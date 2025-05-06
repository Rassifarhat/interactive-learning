// app/api/noteParser/route.ts
import { NextResponse, NextRequest } from 'next/server';

interface NoteRequest {
  note: string;
  field: string; // philchem, philphysics, philcs, philbiology
  chapter: number; // Always 0 for Phil notes
}

export async function POST(request: NextRequest) {
  console.log('API /api/noteParser POST invoked');
  try {
    const body = await request.json() as NoteRequest;
    console.log('API /api/noteParser received body:', body);
    const { note, field, chapter } = body;
    
    if (!note || typeof note !== 'string') {
      return NextResponse.json({ error: 'No valid note content provided' }, { status: 400 });
    }

    // Use OpenAI to break down the note into logical mini-notes
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
        model: 'gpt-4o',
        messages: [
          { 
            role: 'system', 
            content: 'You are a helpful assistant that breaks down complex educational notes into logical, discrete knowledge items. Extract the most important concepts, definitions, and facts from these notes. Structure your output as a JSON array, with each item being a separate piece of knowledge. Format: {"notes": ["First concept or fact.", "Second concept or fact.", etc]}. Only return the JSON object, nothing else.' 
          },
          { role: 'user', content: note },
        ],
        temperature: 0.3,
        response_format: { type: "json_object" }
      }),
    });

    const aiJson = await aiRes.json();
    const content = aiJson.choices?.[0]?.message?.content;
    let miniNotes: string[] = [];
    
    try {
      // Parse the JSON response from OpenAI
      const parsedContent = JSON.parse(content);
      if (Array.isArray(parsedContent.notes)) {
        miniNotes = parsedContent.notes;
      } else {
        // Fallback if the response format is unexpected
        return NextResponse.json({ error: 'Unexpected response format from AI' }, { status: 500 });
      }
    } catch (error) {
      console.error('Error parsing AI response:', error, content);
      return NextResponse.json({ error: 'Failed to parse AI response' }, { status: 500 });
    }

    // For each mini note, send a request to the saveNote endpoint
    const saveResults = await Promise.all(
      miniNotes.map(async (miniNote) => {
        const saveResponse = await fetch(new URL('/api/saveNote', request.url).toString(), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            note: miniNote,
            field,
            chapter
          }),
        });
        return saveResponse.json();
      })
    );

    return NextResponse.json({ 
      success: true, 
      message: `Parsed ${miniNotes.length} notes and saved them`,
      notes: miniNotes,
      results: saveResults
    });
    
  } catch (error: unknown) {
    console.error('Error parsing note:', error);
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
