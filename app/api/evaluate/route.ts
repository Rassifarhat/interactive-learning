import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      studentAnswer: string;
      modelAnswer: string;
      question?: string;
    };
    console.log('evaluate POST body', body);
    const { studentAnswer, modelAnswer, question } = body;

    if (!studentAnswer || !modelAnswer) {
      return NextResponse.json({ error: 'Missing payload' }, { status: 400 });
    }

    const openai = new OpenAI();

    const chat = await openai.chat.completions.create({
      model: 'gpt-4o',
      temperature: 0,
      messages: [
        {
          role: 'system',
          content: `
You are an official Cambridge‑style AS‑level Chemistry examiner.
Mark answers STRICTLY against the British mark‑scheme keywords.
Return ONLY valid JSON in this shape:
{"grade":<0‑10>,"comments":"...","modelAnswer":"..."}
          `.trim()
        },
        {
          role: 'user',
          content: `
Question:
${question ?? 'N/A'}

Mark‑scheme answer:
${modelAnswer}

Student answer:
${studentAnswer}
          `.trim()
        }
      ]
    });

    const payload = JSON.parse(chat.choices[0].message.content!);
    return NextResponse.json(payload);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Evaluation failed' }, { status: 500 });
  }
}