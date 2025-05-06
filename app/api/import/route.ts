// app/api/import/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { splitSections } from '../../lib/markdown';
import { buildMindMap } from '../../lib/mindmap-builder';
import type { MindMapNode } from '../../types/mind-map';

export const runtime = 'nodejs'; // guarantee Node APIs (fs) are available

export async function POST(req: NextRequest): Promise<NextResponse> {
  const form = await req.formData();
  const file = form.get('file');

  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  // Extract chapter number or name from filename
  const originalFilename = file.name;
  let filenameBase = '';
  
  // Try to extract chapter information from filename
  const chapterMatch = originalFilename.match(/chapter[_\s-]*(\d+)/i) || 
                      originalFilename.match(/ch[_\s-]*(\d+)/i);
  
  if (chapterMatch && chapterMatch[1]) {
    filenameBase = `sarahCsCh${chapterMatch[1]}`;
  } else {
    // If no chapter number found, use a timestamp
    const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    filenameBase = `sarahCsCh${timestamp}`;
  }

  const mdText = await file.text();
  const sections = splitSections(mdText);
  const tree: MindMapNode = await buildMindMap(sections);

  // Ensure data directory exists
  const dataDir = path.join(process.cwd(), 'app', 'data');
  try {
    await fs.access(dataDir);
  } catch (error) {
    // Directory doesn't exist, create it
    await fs.mkdir(dataDir, { recursive: true });
  }

  // Create unique filename
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  let outFilename = `${filenameBase}.ts`;
  let outFilePath = path.join(dataDir, outFilename);
  
  // Check if file already exists, if so, append timestamp
  try {
    await fs.access(outFilePath);
    // File exists, create a unique name
    outFilename = `${filenameBase}-${timestamp}.ts`;
    outFilePath = path.join(dataDir, outFilename);
  } catch (error) {
    // File doesn't exist, we can use the original name
  }

  const tsExport = [
    "import type { MindMapNode } from '../types/mind-map';",
    '',
    `const data: MindMapNode = ${JSON.stringify(tree, null, 2)};`,
    '',
    'export default data;'
  ].join('\n');

  await fs.writeFile(outFilePath, tsExport, 'utf8');

  return NextResponse.json({ 
    ok: true, 
    filename: outFilename,
    path: `/data/${outFilename}`
  });
}