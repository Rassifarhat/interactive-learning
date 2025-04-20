import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');
    const chapter = searchParams.get('chapter');
    
    if (!id || !chapter) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }
    
    // Import the exercise data dynamically
    try {
      // Since we can't directly use dynamic imports in route handlers,
      // we'll simulate it by reading the file contents
      const filePath = path.join(process.cwd(), 'app', 'data', `csExercisesCh${chapter}.ts`);
      let fileContent = await fs.readFile(filePath, 'utf-8');
      
      // Parse the exercises array from the file content
      // This is a simple implementation and might break if the file structure changes
      // A more robust solution would involve a proper TypeScript compiler
      const exercisesMatch = fileContent.match(/export const exercises[^[]*\[([\s\S]*)\];/);
      
      if (!exercisesMatch) {
        throw new Error('Could not parse exercises from file');
      }
      
      const exercisesContent = exercisesMatch[1];
      
      // Extract the specific exercise with the given ID
      const idPattern = new RegExp(`id:\\s*["']${id}["']`);
      let startIdx = exercisesContent.search(idPattern);
      
      if (startIdx === -1) {
        return NextResponse.json(
          { error: `Exercise with ID ${id} not found in chapter ${chapter}` },
          { status: 404 }
        );
      }
      
      // Find the start of this exercise object
      let objectStart = exercisesContent.lastIndexOf('{', startIdx);
      
      // Find the end of this exercise object
      // Count braces to handle nested objects
      let objectEnd = objectStart;
      let braceCount = 1;
      
      for (let i = objectStart + 1; i < exercisesContent.length; i++) {
        if (exercisesContent[i] === '{') braceCount++;
        if (exercisesContent[i] === '}') braceCount--;
        
        if (braceCount === 0) {
          objectEnd = i + 1;
          break;
        }
      }
      
      const exerciseJson = exercisesContent.substring(objectStart, objectEnd);
      
      // Extract fields using regex without the /s flag (ES2018+)
      // Using [\s\S]* to match any character including newlines instead of /s flag
      const questionMatch = exerciseJson.match(/question:\s*`([\s\S]*?)`/);
      const modelAnswerMatch = exerciseJson.match(/modelAnswer:\s*`([\s\S]*?)`/);
      const explanationMatch = exerciseJson.match(/explanation:\s*`([\s\S]*?)`/);
      
      if (!questionMatch || !modelAnswerMatch) {
        throw new Error('Could not extract required fields');
      }
      
      return NextResponse.json({
        id,
        chapter,
        question: questionMatch[1],
        modelAnswer: modelAnswerMatch[1],
        explanation: explanationMatch ? explanationMatch[1] : '',
      });
    } catch (error) {
      console.error('Error loading exercise data:', error);
      return NextResponse.json(
        { error: 'Failed to load exercise data' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in getExercise API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
