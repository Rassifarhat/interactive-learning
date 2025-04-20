import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    // Check if OpenAI API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    // Parse the request body
    const body = await request.json();
    const { 
      imageData, 
      question, 
      modelAnswer, 
      explanation, 
      id, 
      chapter,
      isTextMode,
      textContent
    } = body;

    if (!imageData || !question || !modelAnswer) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    // Extract base64 data from the data URL
    const base64Data = imageData.split(',')[1];

    // Create the prompt for the AI assistant
    const systemPrompt = `You are a computer science professor specializing in the British A-level curriculum.
Your task is to assess a student's solution to a computer science exercise.

${isTextMode 
  ? `⚠️ SPECIFIC INSTRUCTION FOR TEXT MODE ⚠️
The student submitted text directly rather than a handwritten solution.
Here is the exact text they submitted:
\`\`\`
${textContent || "No text submitted"}
\`\`\`
Please focus your assessment on the text content above, while also examining the image which contains the same text.`
  : `⚠️ CRITICAL INSTRUCTION ⚠️
The ONLY thing you should evaluate is what you can ACTUALLY SEE in the image. 
- If the image shows nothing, say there is nothing to evaluate.
- If the image only contains the word "none" or scribbles, do not pretend there is code.
- DO NOT hallucinate code that isn't there.
- DO NOT assume the student wrote anything resembling the reference answer unless you CLEARLY see it.
- START your assessment by literally describing what you can see in the image.`}

Here's the context:
1. EXERCISE INFORMATION: This is Exercise ${id} from Chapter ${chapter}
2. QUESTION: "${question}"
3. REFERENCE ANSWER (not student's work): "${modelAnswer}"
4. EXPLANATION OF REFERENCE ANSWER (not student's work): "${explanation || 'Not provided'}"

Your assessment MUST:
1. ${isTextMode ? 'Evaluate the submitted text' : 'Begin with a literal description of what is visibly written/drawn in the image'}
2. ${isTextMode ? 'Compare the submitted text to the reference answer' : 'If nothing coherent is visible, state this clearly and DO NOT proceed with a code evaluation'}
3. Identify any errors or misconceptions
4. Provide suggestions for improvement
5. Assign a score (on a scale of 1-10) with justification
6. Give specific feedback on clarity and completeness

${isTextMode 
  ? 'Focus on the quality and correctness of the student\'s solution compared to the reference answer.'
  : 'Remember: It is IMPOSSIBLE for you to know what the student intended to write unless it is CLEARLY visible in the image. Your primary duty is to accurately report what is visually present, NOT to imagine what might be there.'}`;

    // Call the OpenAI API with the image
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: [
            { 
              type: "text", 
              text: "Here is my solution to the computer science exercise. Please assess it and provide detailed feedback." 
            },
            {
              type: "image_url",
              image_url: {
                url: `data:image/png;base64,${base64Data}`
              }
            }
          ]
        }
      ],
      max_tokens: 1500,
    });

    // Get the assessment from the API response
    const assessment = response.choices[0]?.message.content || "Unable to generate assessment";

    // Return the assessment
    return NextResponse.json({ assessment });
  } catch (error: any) {
    console.error('Error in visualAssessment API:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
