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
  try {
    const body = await request.json() as RequestBody;
    const { note, field = '', chapter = '', answer = '' } = body;
    
    if (!note || typeof note !== 'string') {
      return NextResponse.json({ error: 'No valid note content provided' }, { status: 400 });
    }

    // Generate a simple question from the note (replace with API call if needed)
    const question = `What is: ${note}`;

    // Write to NotesToReviseActiveRecall.csv
    const csvFilePath = path.join(process.cwd(), 'public', 'NotesToReviseActiveRecall.csv');
    const csvHeader = 'field,chapter,question,answer\n';
    const csvRow = [field, chapter, question, answer || note].map(f => escapeCsvField(String(f))).join(',') + '\n';

    // Ensure file exists, create with header if not
    try {
      await fs.access(csvFilePath);
    } catch (error: unknown) {
      if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
        await fs.writeFile(csvFilePath, csvHeader, 'utf8');
      } else {
        throw error;
      }
    }
    await fs.appendFile(csvFilePath, csvRow, 'utf8');

    // Also append to notesToRevise.txt as before (optional, for legacy)
    const filePath = path.join(process.cwd(), 'public', 'notesToRevise.txt');
    try {
      await fs.access(filePath);
    } catch (error: unknown) {
      if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
         await fs.writeFile(filePath, '', 'utf8');
      } else {
        throw error;
      }
    }
    const existingContent = await fs.readFile(filePath, 'utf8');
    await fs.writeFile(filePath, existingContent + note, 'utf8');

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error('Error saving note:', error);
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}