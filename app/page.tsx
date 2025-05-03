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
import Upload from './components/upload';

export default function Home() {
  const [subject, setSubject] = React.useState<string | null>(null);
  const [showRevision, setShowRevision] = React.useState<boolean>(false);
  const [showRequirements, setShowRequirements] = React.useState<boolean>(false);
  const [revisionSubject, setRevisionSubject] = React.useState<'chem'|'cs'|'filipChem'|null>(null);
  const [showUpload, setShowUpload] = React.useState<boolean>(false);
  const [showFilipChem, setShowFilipChem] = React.useState<boolean>(false);

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-8 bg-black text-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">
          {'Welcome to interactive studies Filip!'.split('').map((char, index) => {
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
        <div className="flex space-x-4 mt-6 justify-center">
          <button 
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
            onClick={() => setShowUpload(!showUpload)}
          >
            {showUpload ? 'Hide Upload' : 'Upload Markdown'}
          </button>
        </div>
        {showUpload && (
          <div className="mt-8 bg-gray-900 p-6 rounded-lg w-full max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">Upload Markdown File</h2>
            <Upload />
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-6 justify-center mb-10">
        {/* Stack Chemistry buttons vertically */}
        <div className="flex flex-col gap-3 mr-6">
          <button
            className="px-6 py-3 rounded bg-green-600 text-white hover:bg-green-700 transition-all text-xl font-semibold"
            onClick={() => { setShowRequirements(true); setShowRevision(false); setSubject(null); setRevisionSubject(null); setShowFilipChem(false); }}
          >
            Chemistry Requirements
          </button>
          <button
            className={`px-6 py-3 rounded bg-green-700 text-white hover:bg-green-800 transition-all text-xl font-semibold ${subject === 'chem' ? 'ring-2 ring-yellow-400' : ''}`}
            onClick={() => { setSubject('chem'); setShowRevision(false); setShowRequirements(false); setShowFilipChem(false); }}
          >
            Chemistry
          </button>
         
          <button
            className={`px-6 py-3 rounded bg-emerald-700 text-white hover:bg-emerald-800 transition-all text-xl font-semibold ${subject === 'chemExt' ? 'ring-2 ring-yellow-400' : ''}`}
            onClick={() => { setSubject(subject === 'chemExt' ? null : 'chemExt'); setShowFilipChem(false); }}
          >
            Chemistry Extended
          </button>

          <button
            className={`px-6 py-3 rounded bg-lime-700 text-white hover:bg-lime-800 transition-all text-xl font-semibold ${showFilipChem ? 'ring-2 ring-yellow-400' : ''}`}
            onClick={() => { setShowFilipChem(!showFilipChem); setSubject(null); setShowRevision(false); setShowRequirements(false); }}
          >
            Filip Chemistry
          </button>
        </div>
        {/* Stack Computer Science buttons vertically */}
        <div className="flex flex-col gap-3 mx-6">
          <button
            className="px-6 py-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition-all text-xl font-semibold"
            onClick={() => { setShowRequirements(true); setShowRevision(false); setSubject(null); setRevisionSubject(null); setShowFilipChem(false); }}
          >
            Computer Science Requirements
          </button>
          <button
            className={`px-6 py-3 rounded bg-blue-700 text-white hover:bg-blue-800 transition-all text-xl font-semibold ${subject === 'cs' ? 'ring-2 ring-yellow-400' : ''}`}
            onClick={() => { setSubject('cs'); setShowRevision(false); setShowRequirements(false); setRevisionSubject(null); setShowFilipChem(false); }}
          >
            Computer Science
          </button>
          <button
            className={`px-6 py-3 rounded bg-blue-800 text-white hover:bg-blue-900 transition-all text-xl font-semibold ${subject === 'csExt' ? 'ring-2 ring-yellow-400' : ''}`}
            onClick={() => { setSubject(subject === 'csExt' ? null : 'csExt'); setShowRequirements(false); setShowRevision(false); setRevisionSubject(null); setShowFilipChem(false); }}
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
          onClick={() => { setShowRevision(true); setRevisionSubject(null); setShowFilipChem(false); }}
        >
          Revision Notes
        </button>
      </div>
      <div className="w-full flex flex-col items-center">
        {showFilipChem && (
          <div className="grid grid-cols-5 gap-4 justify-center mb-10 mt-6 max-w-4xl">
            {Array.from({ length: 29 }, (_, i) => (
              <Link
                key={i + 1}
                href={`/filipChemCh${i + 1}`}
                className="px-4 py-2 border rounded bg-lime-600 hover:bg-lime-700 text-white text-center"
              >
                Chapter {i + 1}
              </Link>
            ))}
          </div>
        )}
        {!showRevision && !showRequirements && !showFilipChem && (
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
            <button
              className="px-6 py-3 rounded bg-lime-700 text-white hover:bg-lime-800 transition-all text-xl font-semibold"
              onClick={() => setRevisionSubject('filipChem')}
            >
              Filip Chemistry
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
        {showRevision && revisionSubject === 'filipChem' && (
          <div className="grid grid-cols-5 gap-4 justify-center mb-10 mt-6 max-w-4xl">
            {Array.from({ length: 29 }, (_, i) => (
              <Link 
                key={i + 1} 
                href={`/flashcards?file=revisionNotes/filipChemistry/filipChemCh${i + 1}.csv`} 
                className="px-4 py-2 border rounded bg-lime-600 hover:bg-lime-700 text-white text-center"
              >
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
