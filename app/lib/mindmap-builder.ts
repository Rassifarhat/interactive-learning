// lib/mindmap-builder.ts
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import OpenAI from 'openai';
import type { Section, MindMapNode } from '../types/mind-map';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

/*────────────────────────── helpers ──────────────────────────*/

/** Recursively drop nodes that have no content AND no children.  */
function prune(section: Section): Section | null {
  const kids =
    (section.children ?? [])
      .map(prune)                // prune sub-branches first
      .filter(Boolean) as Section[];

  section.children = kids;       // normalise undefined → []

  const isLeafEmpty = kids.length === 0 && section.text.trim() === '';
  return isLeafEmpty ? null : section;
}

/** Depth-first iterator that yields *leaves* only. */
function* walkLeaves(sec: Section): Generator<Section> {
  if (!sec.children || sec.children.length === 0) {
    yield sec;
  } else {
    for (const c of sec.children) yield* walkLeaves(c);
  }
}

/** Capitalise slug for display; keeps original if you prefer */
function titleFromSlug(slug: string) {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

/** Fill `name` (question) + `summary` (answer) via GPT for one Section leaf. */
async function fillWithOpenAI(leaf: Section): Promise<void> {
  const ctx = leaf.text.trim();
  if (!ctx) return;   // already has content → skip

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    response_format: { type: 'json_object' },
    messages: [
      {
        role: 'system',
        content:
          'You are an IGCSE tutor. Return ALL examinable facts; omit nothing.'
      },
      {
        role: 'user',
        content: [
          'CONTEXT (verbatim; do NOT lose facts):',
          '```markdown',
          ctx,
          '```',
          '',
          'Return JSON **exactly**:',
          '{ "question": "...", "answer": "..." }',
          '',
          '• “question” = phrase as an exam prompt.',
          '• “answer”   = full mark-scheme answer.'
        ].join('\n')
      }
    ]
  });

  const { question, answer } = JSON.parse(
    completion.choices[0].message.content!
  ) as { question: string; answer: string };

  leaf.name = question;
  leaf.summary = answer;
}

/** Convert Section → MindMapNode recursively  */
function toMindNode(sec: Section): MindMapNode {
  return {
    name: sec.name ?? titleFromSlug(sec.slug),
    id: sec.path[0],
    summary: sec.summary,
    children: sec.children?.map(toMindNode) ?? []
  };
}

/*────────────────────── export 1 public fn ──────────────────────*/

/**
 * Turn raw Section[] (from splitSections) into a fully-populated MindMapNode tree.
 */
export async function buildMindMap(raw: Section[]): Promise<MindMapNode> {
  // 1) prune empties
  const pruned = raw.map(prune).filter(Boolean) as Section[];

  // 2) enrich leaves in parallel
  const leafPromises: Promise<void>[] = [];
  for (const root of pruned) {
    for (const leaf of walkLeaves(root)) {
      leafPromises.push(fillWithOpenAI(leaf));
    }
  }
  await Promise.all(leafPromises);

  // 3) wrap everything under a "root" node for your renderer
  return {
    name: pruned[0]?.slug ?? 'chapter',
    id: 'root',
    children: pruned.map(toMindNode)
  };
}