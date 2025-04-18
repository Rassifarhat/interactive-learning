// app/api/saveNote/route.ts
import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse, NextRequest } from 'next/server';

interface RequestBody {
  note: string;
  field?: string; // Chemistry, Physics, etc.
  chapter?: string | number;
  answer?: string; // Optional, for future extensibility
}

function escapeCsvField(field: string) {
  // Escape double-quotes and wrap in quotes if needed
  if (field.includes(',') || field.includes('"') || field.includes('\n')) {
    return '"' + field.replace(/"/g, '""') + '"';
  }
  return field;
}

export async function POST(request: NextRequest) {
  console.log('API /api/saveNote POST invoked');
  try {
    const body = await request.json() as RequestBody;
    console.log('API /api/saveNote received body:', body);
    const { note, field = '', chapter = '', answer = '' } = body;
    
    if (!note || typeof note !== 'string') {
      return NextResponse.json({ error: 'No valid note content provided' }, { status: 400 });
    }

    // Use OpenAI to generate a clear revision question
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 });
    }
    const aiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'Generate a concise, unambiguous question based on the following note for revision purposes:' },
          { role: 'user', content: note },
        ],
        temperature: 0.7,
      }),
    });
    const aiJson = await aiRes.json();
    const question = aiJson.choices?.[0]?.message?.content?.trim() || note.slice(0,100);

    // Build directory and file path
    const dirPath = path.join(process.cwd(), 'public', 'revisionNotes', field);
    await fs.mkdir(dirPath, { recursive: true });
    const fileName = field === 'computerScience' ? `csCardsCh${chapter}.csv` : `chemCardsCh${chapter}.csv`;
    const csvPath = path.join(dirPath, fileName);
    const header = 'question,answer\n';
    try { await fs.access(csvPath); } catch { await fs.writeFile(csvPath, header, 'utf8'); }
    const row = [question, note].map(f => escapeCsvField(String(f))).join(',') + '\n';
    await fs.appendFile(csvPath, row, 'utf8');

    return NextResponse.json({ success: true, question });
  } catch (error: unknown) {
    console.error('Error saving note:', error);
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}