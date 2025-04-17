import React from 'react';
import Link from 'next/link';

const chapters = [
  { num: 1, color: 'pink', label: 'Chapter 1' },
  { num: 2, color: 'blue', label: 'Chapter 2' },
  { num: 3, color: 'green', label: 'Chapter 3' },
  { num: 4, color: 'orange', label: 'Chapter 4' },
  { num: 5, color: 'indigo', label: 'Chapter 5' },
  { num: 6, color: 'red', label: 'Chapter 6' },
  { num: 7, color: 'yellow', label: 'Chapter 7' },
  { num: 8, color: 'purple', label: 'Chapter 8' },
  { num: 9, color: 'cyan', label: 'Chapter 9' },
  { num: 10, color: 'lime', label: 'Chapter 10' },
  { num: 11, color: 'rose', label: 'Chapter 11' },
  { num: 12, color: 'teal', label: 'Chapter 12' },
  { num: 13, color: 'amber', label: 'Chapter 13' },
  { num: 14, color: 'fuchsia', label: 'Chapter 14' },
  { num: 15, color: 'gray', label: 'Chapter 15' },
];

export default function ComputerScience() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-8 text-center text-gray-300">Computer Science Chapters</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {chapters.map((chapter) => (
          <div key={chapter.num} className={`flex flex-col border border-${chapter.color}-700 rounded-lg overflow-hidden shadow-lg bg-gray-900 hover:border-${chapter.color}-500 hover:shadow-${chapter.color}-500/40 transition-all duration-300`}>
            <div className={`bg-${chapter.color}-600 p-4 text-center font-bold text-xl text-white`}>
              {chapter.label}
            </div>
            <div className="p-4 flex flex-col space-y-3 flex-grow justify-center">
              <Link href={`/csCh${chapter.num}`} className="block text-center text-blue-300 hover:text-blue-100 hover:bg-blue-700 rounded py-2 px-3 transition-colors duration-200 font-medium border border-transparent hover:border-blue-500">Mind Map</Link>
              <Link href={`/flashcards?file=csCh${chapter.num}Csv.csv`} className="block text-center text-green-300 hover:text-green-100 hover:bg-green-700 rounded py-2 px-3 transition-colors duration-200 font-medium border border-transparent hover:border-green-500">Flashcards</Link>
              <Link href={`/flashcards?file=csExercisesCh${chapter.num}.csv`} className="block text-center text-yellow-300 hover:text-yellow-100 hover:bg-yellow-700 rounded py-2 px-3 transition-colors duration-200 font-medium border border-transparent hover:border-yellow-500">Exercises</Link>
              <Link href="#" className="block text-center text-purple-300 hover:text-purple-100 hover:bg-purple-700 rounded py-2 px-3 transition-colors duration-200 font-medium border border-transparent hover:border-purple-500">Audio Lecture</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
