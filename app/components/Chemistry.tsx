import React from 'react';
import Link from 'next/link';
import ChapterOneMindMap from './chapterOne';
import ChapterTwoMindMap from './chapterTwo';
import ChapterSevenMindMap from './chapterSeven';
import dynamic from 'next/dynamic';

const ChemistryBondingMindMap = dynamic(() => import('./ChemistryBondingMindMap'), { ssr: false });
const OrganicChemistryMindMap = dynamic(() => import('./OrganicChemistryMindMap'), { ssr: false });
const AlkenesMindMap = dynamic(() => import('./AlkenesMindMap'), { ssr: false });
const EnergeticsMindMap = dynamic(() => import('./EnergeticsMindMap'), { ssr: false });
const ChapterEightMindMap = dynamic(() => import('./chapterEight'), { ssr: false });
const ChapterNineMindMap = dynamic(() => import('./chapterNine'), { ssr: false });
const ChapterTenMindMap = dynamic(() => import('./chapterTen'), { ssr: false });

const chapters = [
  { num: 1, color: 'pink', audio: false, label: 'Chapter 1', component: <ChapterOneMindMap /> },
  { num: 2, color: 'blue', audio: false, label: 'Chapter 2', component: <ChapterTwoMindMap /> },
  { num: 3, color: 'green', audio: false, label: 'Chemical Bonding', component: <ChemistryBondingMindMap /> },
  { num: 4, color: 'orange', audio: false, label: 'Organic Chemistry', component: <OrganicChemistryMindMap /> },
  { num: 5, color: 'indigo', audio: false, label: 'Alkenes', component: <AlkenesMindMap /> },
  { num: 6, color: 'teal', audio: false, label: 'Energetics', component: <EnergeticsMindMap /> },
  { num: 7, color: 'red', audio: false, label: 'Chapter 7', component: <ChapterSevenMindMap /> },
  { num: 8, color: 'purple', audio: true, label: 'Chapter 8', component: <ChapterEightMindMap /> },
  { num: 9, color: 'yellow', audio: true, label: 'Chapter 9', component: <ChapterNineMindMap /> },
  { num: 10, color: 'gray', audio: true, label: 'Chapter 10', component: <ChapterTenMindMap /> },
];

export default function Chemistry() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-8 text-center text-gray-300">Chapters Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {chapters.map((chapter) => (
          <div key={chapter.num} className={`flex flex-col border border-${chapter.color}-700 rounded-lg overflow-hidden shadow-lg bg-gray-900 hover:border-${chapter.color}-500 hover:shadow-${chapter.color}-500/40 transition-all duration-300`}>
            <div className={`bg-${chapter.color}-600 p-4 text-center font-bold text-xl text-white`}>
              {chapter.label}
            </div>
            <div className="p-4 flex flex-col space-y-3 flex-grow justify-center">
              <Link href={`/ch${chapter.num}`} className="block text-center text-blue-300 hover:text-blue-100 hover:bg-blue-700 rounded py-2 px-3 transition-colors duration-200 font-medium border border-transparent hover:border-blue-500">Mind Map</Link>
              <Link href={`/flashcards?chapter=${chapter.num}`} className="block text-center text-green-300 hover:text-green-100 hover:bg-green-700 rounded py-2 px-3 transition-colors duration-200 font-medium border border-transparent hover:border-green-500">Flashcards</Link>
              <Link href={`/flashcards?file=ch${chapter.num}Exercises.csv`} className="block text-center text-yellow-300 hover:text-yellow-100 hover:bg-yellow-700 rounded py-2 px-3 transition-colors duration-200 font-medium border border-transparent hover:border-yellow-500">Exercises</Link>
              {chapter.audio && (
                <Link href={`/audioCh${chapter.num}`} className="block text-center text-purple-300 hover:text-purple-100 hover:bg-purple-700 rounded py-2 px-3 transition-colors duration-200 font-medium border border-transparent hover:border-purple-500">Audio Lecture</Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
