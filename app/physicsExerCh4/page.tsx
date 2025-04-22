'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { exercises } from '../data/physicsExerCh4';

export default function PhysicsExercisesChapter4() {
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggleExercise = (id: string) => {
    setSelectedExercise(selectedExercise === id ? null : id);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
    setSelectedExercise(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← Back to Home
          </Link>
          <button
            onClick={toggleShowAll}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white transition-colors"
          >
            {showAll ? 'Hide All Answers' : 'Show All Answers'}
          </button>
        </div>
        <h1 className="text-3xl font-bold text-center text-purple-300 mb-2">Physics Exercises</h1>
        <h2 className="text-xl text-center text-purple-200">Chapter 4: Electricity and Electronics</h2>
      </header>

      <div className="max-w-4xl mx-auto grid gap-6">
        {exercises.map(exercise => (
          <div key={exercise.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div 
              className="p-4 cursor-pointer hover:bg-gray-700 transition-colors"
              onClick={() => toggleExercise(exercise.id)}
            >
              <h3 className="text-lg font-medium text-purple-300">Exercise {exercise.id}</h3>
              <p className="text-gray-300 mt-2 whitespace-pre-wrap">
                {exercise.question}
              </p>
              
              {(selectedExercise === exercise.id || showAll) && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <h4 className="text-lg font-medium mb-2 text-green-300">Model Answer:</h4>
                  <div className="text-white bg-gray-700 p-3 rounded overflow-auto whitespace-pre-wrap text-sm">
                    <div dangerouslySetInnerHTML={{ __html: exercise.modelAnswer }} />
                  </div>
                  
                  <h4 className="text-lg font-medium mt-4 mb-2 text-blue-300">Explanation:</h4>
                  <p className="text-gray-300 text-sm">{exercise.explanation}</p>
                  
                  <h4 className="text-lg font-medium mt-4 mb-2 text-red-300">Common Mistake Tip:</h4>
                  <p className="text-gray-300 text-sm">{exercise.commonMistakeTip}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
