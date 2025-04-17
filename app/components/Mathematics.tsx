import React from 'react';
import Link from 'next/link';

const chapters = [
  { num: 1, color: 'pink' },
  { num: 2, color: 'blue' },
  { num: 3, color: 'green' },
  { num: 4, color: 'orange' },
  { num: 5, color: 'indigo' },
];

export default function Mathematics() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-8 text-center text-gray-300">Mathematics Chapters</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {chapters.map((chapter) => (
          <div key={chapter.num} className={`flex flex-col border border-${chapter.color}-700 rounded-lg overflow-hidden shadow-lg bg-gray-900 hover:border-${chapter.color}-500 hover:shadow-${chapter.color}-500/40 transition-all duration-300`}>
            <div className={`bg-${chapter.color}-600 p-4 text-center font-bold text-xl text-white`}>
              Chapter {chapter.num}
            </div>
            <div className="p-4 flex flex-col space-y-3 flex-grow justify-center">
              <Link href={`/math/ch${chapter.num}`} className="block text-center text-blue-300 hover:text-blue-100 hover:bg-blue-700 rounded py-2 px-3 transition-colors duration-200 font-medium border border-transparent hover:border-blue-500">Mind Map</Link>
              <Link href={`/math/flashcards?chapter=${chapter.num}`} className="block text-center text-green-300 hover:text-green-100 hover:bg-green-700 rounded py-2 px-3 transition-colors duration-200 font-medium border border-transparent hover:border-green-500">Flashcards</Link>
              <Link href={`/math/exercises?chapter=${chapter.num}`} className="block text-center text-yellow-300 hover:text-yellow-100 hover:bg-yellow-700 rounded py-2 px-3 transition-colors duration-200 font-medium border border-transparent hover:border-yellow-500">Exercises</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
