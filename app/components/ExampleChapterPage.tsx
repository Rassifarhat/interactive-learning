'use client';
import React from 'react';
import ExercisePageTemplate from './ExercisePageTemplate';

// Import your exercise data
// Replace this import with the appropriate chapter data file
// import { exercises } from '../data/csExercisesCh14'; 

export default function CSExercisesPageExample() {
  // Example data - replace with your actual imported data
  const exampleExercises = [
    {
      id: "14.1",
      question: "Your exercise question here",
      modelAnswer: "Model answer",
      explanation: "Explanation",
      commonMistakeTip: "Common mistakes"
    }
  ];

  return (
    <ExercisePageTemplate
      exercises={exampleExercises} // Use your imported exercises here
      chapterNumber={14} // Change to your chapter number
      // Optional: custom title
      // title="Custom Chapter Title"
    />
  );
}
