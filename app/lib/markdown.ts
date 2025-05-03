// lib/markdown.ts
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { visit } from 'unist-util-visit';
import slugify from '@sindresorhus/slugify';
import { toMarkdown } from 'mdast-util-to-markdown';
import type { Root, RootContent, Heading } from 'mdast';

const JUNK_HEADING = /^page\s+\d+$/i;

export type Section = {
  slug: string;
  text: string;
  path: string[];
  children?: Section[];
};

export function splitSections(md: string): Section[] {
  const ast = unified().use(remarkParse).parse(md) as Root;
  const rootSections: Section[] = [];
  const stack: { depth: number; node: Section }[] = [];

  /** helper: finalise current buffer into the *last* node on stack */
  function flush(buf: RootContent[]) {
    if (stack.length === 0) return;
    const last = stack[stack.length - 1].node;
    last.text = toMarkdown({ type: 'root', children: buf } as Root).trim();
    buf.length = 0;                          // reset in-place
  }

  const buf: RootContent[] = [];
  let order: number[] = [];                  // keeps running counters per depth

  visit(ast, (node) => {
    if (node.type !== 'heading') {
      buf.push(node as RootContent);
      return;
    }

    const h = node as Heading;
    const depth = h.depth;                   // 1 = #, 2 = ##, …

    const title = (h.children[0] as any).value as string;
    if (JUNK_HEADING.test(title)) return;    // skip Page N

    // finish previous section before starting a new one
    flush(buf);

    // Adjust counters for hierarchical id
    order = order.slice(0, depth);
    order[depth - 1] = (order[depth - 1] || 0) + 1;

    const id = order.join('-');
    const section: Section = { slug: slugify(title), text: '', path: [id], children: [] };

    if (stack.length === 0 || depth === 1) {
      rootSections.push(section);
    } else {
      // find parent with depth-1
      const parent = stack.findLast(s => s.depth < depth)!.node;
      parent.children!.push(section);
    }

    // maintain stack
    while (stack.length && stack[stack.length - 1].depth >= depth) stack.pop();
    stack.push({ depth, node: section });
  });

  flush(buf);                                // final trailing text
  return rootSections;
}