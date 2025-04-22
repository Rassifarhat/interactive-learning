'use client';
import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
});

import Chemistry from './components/Chemistry';
import ComputerScience from './components/ComputerScience';
import Physics from './components/Physics';
import Mathematics from './components/Mathematics';

export default function Home() {
  const [subject, setSubject] = React.useState<string | null>(null);
  const [showRevision, setShowRevision] = React.useState<boolean>(false);
  const [showRequirements, setShowRequirements] = React.useState<boolean>(false);
  const [revisionSubject, setRevisionSubject] = React.useState<'chem'|'cs'|null>(null);

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-8 bg-black text-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">
          {'Welcome to interactive studies Sarah!'.split('').map((char, index) => {
            const colors = [
              'text-red-500','text-orange-500','text-yellow-400','text-lime-500','text-green-500','text-teal-500','text-cyan-500','text-sky-500','text-blue-500','text-indigo-500','text-purple-500','text-fuchsia-500','text-pink-500','text-rose-500',
            ];
            if (char === ' ') return <span key={index}> </span>;
            return <span key={index} className={colors[index % colors.length]}>{char}</span>;
          })}
        </h1>
        <p className={`${dancingScript.className} text-3xl text-red-500`}>
          with love from your dad!
        </p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center mb-10">
        {/* Stack Chemistry buttons vertically */}
        <div className="flex flex-col gap-3 mr-6">
        <button
            className="px-6 py-3 rounded bg-green-600 text-white hover:bg-green-700 transition-all text-xl font-semibold"
            onClick={() => { setShowRequirements(true); setShowRevision(false); setSubject(null); setRevisionSubject(null); }}
          >
            Chemistry Requirements
          </button>
          <button
            className={`px-6 py-3 rounded bg-green-700 text-white hover:bg-green-800 transition-all text-xl font-semibold ${subject === 'chem' ? 'ring-2 ring-yellow-400' : ''}`}
            onClick={() => { setSubject('chem'); setShowRevision(false); setShowRequirements(false); }}
          >
            Chemistry
          </button>
         
          <button
            className={`px-6 py-3 rounded bg-emerald-700 text-white hover:bg-emerald-800 transition-all text-xl font-semibold ${subject === 'chemExt' ? 'ring-2 ring-yellow-400' : ''}`}
            onClick={() => setSubject(subject === 'chemExt' ? null : 'chemExt')}
          >
            Chemistry Extended
          </button>
        </div>
        {/* Stack Computer Science buttons vertically */}
        <div className="flex flex-col gap-3 mx-6">
          <button
            className="px-6 py-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition-all text-xl font-semibold"
            onClick={() => { setShowRequirements(true); setShowRevision(false); setSubject(null); setRevisionSubject(null); }}
          >
            Computer Science Requirements
          </button>
          <button
            className={`px-6 py-3 rounded bg-blue-700 text-white hover:bg-blue-800 transition-all text-xl font-semibold ${subject === 'cs' ? 'ring-2 ring-yellow-400' : ''}`}
            onClick={() => { setSubject('cs'); setShowRevision(false); setShowRequirements(false); setRevisionSubject(null); }}
          >
            Computer Science
          </button>
          <button
            className={`px-6 py-3 rounded bg-blue-800 text-white hover:bg-blue-900 transition-all text-xl font-semibold ${subject === 'csExt' ? 'ring-2 ring-yellow-400' : ''}`}
            onClick={() => { setSubject(subject === 'csExt' ? null : 'csExt'); setShowRequirements(false); setShowRevision(false); setRevisionSubject(null); }}
          >
            Computer Science Extended
          </button>
        </div>
        {/* Other subject buttons horizontally */}
        <button
          className={`px-6 py-3 rounded bg-purple-700 text-white hover:bg-purple-800 transition-all text-xl font-semibold ${subject === 'phys' ? 'ring-2 ring-yellow-400' : ''}`}
          onClick={() => setSubject('phys')}
        >
          Physics
        </button>
        <button
          className={`px-6 py-3 rounded bg-pink-700 text-white hover:bg-pink-800 transition-all text-xl font-semibold ${subject === 'math' ? 'ring-2 ring-yellow-400' : ''}`}
          onClick={() => setSubject('math')}
        >
          Mathematics
        </button>
        <button
          className="px-6 py-3 rounded bg-yellow-700 text-white hover:bg-yellow-800 transition-all text-xl font-semibold"
          onClick={() => { setShowRevision(true); setRevisionSubject(null); }}
        >
          Revision Notes
        </button>
      </div>
      <div className="w-full flex flex-col items-center">
        {!showRevision && !showRequirements && (
          <>
            {subject === 'chem' && <Chemistry />}
            {subject === 'cs' && <ComputerScience />}
            {subject === 'phys' && <Physics />}
            {subject === 'math' && <Mathematics />}
            {subject === 'chemExt' && (
              <div className="flex flex-wrap gap-4 justify-center mb-10 mt-6">
                {Array.from({ length: 10 }, (_, i) => (
                  <Link
                    key={i + 1}
                    href={i + 1 === 10 ? '/chemExtCh10' : `/chemExtCh${i + 1}`}
                    className="px-4 py-2 border rounded m-1 bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    Chapter {i + 1}
                  </Link>
                ))}
              </div>
            )}
            {subject === 'csExt' && (
              <div className="flex flex-wrap gap-4 justify-center mb-10 mt-6">
                {Array.from({ length: 15 }, (_, i) => (
                  <Link
                    key={i + 1}
                    href={`/csExtCh${i + 1}`}
                    className="px-4 py-2 border rounded m-1 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Chapter {i + 1}
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
        {showRevision && revisionSubject === null && (
          <div className="flex flex-wrap gap-6 justify-center mb-10">
            <button
              className="px-6 py-3 rounded bg-green-700 text-white hover:bg-green-800 transition-all text-xl font-semibold"
              onClick={() => setRevisionSubject('chem')}
            >
              Chemistry
            </button>
            <button
              className="px-6 py-3 rounded bg-blue-700 text-white hover:bg-blue-800 transition-all text-xl font-semibold"
              onClick={() => setRevisionSubject('cs')}
            >
              Computer Science
            </button>
          </div>
        )}
        {showRevision && revisionSubject === 'chem' && (
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            {Array.from({ length: 10 }, (_, i) => (
              <Link key={i + 1} href={`/flashcards?file=revisionNotes/chemistry/chemCardsCh${i + 1}.csv`} className="px-4 py-2 border rounded m-1">
                Chapter {i + 1}
              </Link>
            ))}
          </div>
        )}
        {showRevision && revisionSubject === 'cs' && (
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            {Array.from({ length: 15 }, (_, i) => (
              <Link key={i + 1} href={`/flashcards?file=revisionNotes/computerScience/csCardsCh${i + 1}.csv`} className="px-4 py-2 border rounded m-1">
                Chapter {i + 1}
              </Link>
            ))}
          </div>
        )}
        {showRequirements && (
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            {Array.from({ length: 10 }, (_, i) => (
              <Link key={i + 1} href={`/reqChemCh${i + 1}`} className="px-4 py-2 border rounded m-1">
                Chapter {i + 1}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
