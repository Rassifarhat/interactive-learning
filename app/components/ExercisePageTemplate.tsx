'use client';
import React, { useState } from 'react';
import Link from 'next/link';

type Exercise = {
  id: string;
  question: string;
  modelAnswer: string;
  explanation: string;
  commonMistakeTip?: string;
};

type ExercisePageProps = {
  exercises: Exercise[];
  chapterNumber: number;
  title?: string;
};

export default function ExercisePageTemplate({ 
  exercises, 
  chapterNumber,
  title = `Computer Science Chapter ${chapterNumber} Exercises` 
}: ExercisePageProps) {
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);

  // Toggle exercise selection
  const toggleExercise = (id: string) => {
    if (selectedExercise === id) {
      setSelectedExercise(null); // Close if already open
    } else {
      setSelectedExercise(id); // Open the clicked exercise
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-semibold mb-8 text-center text-yellow-300">
        {title}
      </h2>

      {/* Back to home link */}
      <div className="container mx-auto mb-6">
        <Link href="/" className="text-blue-400 hover:text-blue-300 flex items-center">
          <span>← Back to Home</span>
        </Link>
      </div>

      {/* Exercise cards grid */}
      <div className="container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {exercises.map((exercise) => (
          <div 
            key={exercise.id}
            className={`bg-gray-800 rounded-lg shadow-md border-2 transition-all duration-300 cursor-pointer ${
              selectedExercise === exercise.id 
                ? 'border-yellow-400 shadow-yellow-400/30' 
                : 'border-gray-700 hover:border-yellow-500'
            }`}
            onClick={() => toggleExercise(exercise.id)}
          >
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-yellow-300">
                Exercise {exercise.id}
              </h3>
              <div className="mb-3">
                <Link 
                  href={`/playground?id=${exercise.id}&chapter=${chapterNumber}`}
                  className="inline-block px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700 transition-colors"
                >
                  Let me try
                </Link>
              </div>
              <p className="text-gray-300 whitespace-pre-wrap">
                {exercise.question}
              </p>
              
              {selectedExercise === exercise.id && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <h4 className="text-lg font-medium mb-2 text-green-300">Model Answer:</h4>
                  <pre className="text-white bg-gray-700 p-3 rounded overflow-auto whitespace-pre-wrap text-sm">
                    {exercise.modelAnswer}
                  </pre>
                  
                  <h4 className="text-lg font-medium mt-4 mb-2 text-blue-300">Explanation:</h4>
                  <p className="text-gray-300 text-sm whitespace-pre-wrap">{exercise.explanation}</p>
                  
                  {exercise.commonMistakeTip && (
                    <>
                      <h4 className="text-lg font-medium mt-4 mb-2 text-red-300">Common Mistakes:</h4>
                      <p className="text-gray-300 text-sm">{exercise.commonMistakeTip}</p>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
