// app/api/speechToText/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export const runtime: 'edge' = 'edge';

export async function POST(req: NextRequest) {
  try {
    // parse JSON and validate
    const body = (await req.json()) as { audioBase64?: string };
    console.log('speechToText POST body', { audioBase64Length: body.audioBase64?.length });
    const audioBase64 = body.audioBase64;
    if (typeof audioBase64 !== 'string') {
      return NextResponse.json({ error: 'audioBase64 missing' }, { status: 400 });
    }

    // strip header and convert to Uint8Array
    const base64Data = audioBase64.split(',').pop()!;
    const uint8 = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));

    // create a File object compatible with OpenAI Uploadable
    const file = new File([uint8], 'audio.webm', { type: 'audio/webm', lastModified: Date.now() });
    console.log('speechToText file created:', file.name, file.size);

    const openai = new OpenAI(); // picks up OPENAI_API_KEY

    // Whisper supports webm natively
    const transcription = await openai.audio.transcriptions.create({
      model: 'whisper-1',
      file,
      response_format: 'text',
      language: 'en'
    });
    console.log('speechToText transcription:', transcription);

    return NextResponse.json({ text: transcription.trim() });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Transcription failed' }, { status: 500 });
  }
}