'use client'; // for client-side state & hooks
import { useSearchParams } from 'next/navigation'; // Use next/navigation for App Router
import React, { useEffect, useState, Suspense } from 'react'; // Import Suspense
import Papa from 'papaparse';
import Link from 'next/link'; // Import Link

// Define type for flashcard data
interface FlashcardData {
  question: string;
  answer: string;
}

// Map the chapter number in the query to the corresponding CSV filename
const csvMapping: { [key: string]: string } = {
  '1': 'AS_Chemistry_Topic1_KeyFacts.csv',
  '2': 'AS_Chemistry_Topic2_KeyFacts.csv',
  '3': 'AS_Chemistry_Topic3_KeyFacts.csv',
  '4': 'AS_Chemistry_Topic4_KeyFacts.csv',
  '5': 'AS_Chemistry_Topic5_KeyFacts.csv',
  '6': 'AS_Chemistry_Topic6_KeyFacts.csv',
  '7': 'AS_Chemistry_Topic7_KeyFacts.csv',
  '8': 'AS_Chemistry_Topic8_KeyFacts.csv',
  '9': 'AS_Chemistry_Topic9_KeyFacts.csv',
  '10': 'AS_Chemistry_Topic10_KeyFacts.csv', // Add Chapter 10 mapping
};

// A single flashcard showing Q + (toggleable) A
// Add type annotations for props
function Flashcard({ question, answer }: FlashcardData) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div 
      onClick={() => setShowAnswer(!showAnswer)}
      className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200"
    >
      {/* Make question text red */}
      <p className="font-semibold mb-2 text-red-600">{question}</p>
      {showAnswer && (
        <p className="text-gray-700 border-t pt-2 mt-2">{answer}</p>
      )}
    </div>
  );
}

// Component to fetch and display flashcards, needs Suspense wrapper
function FlashcardsContent() {
  const searchParams = useSearchParams();
  const chapter = searchParams.get('chapter');
  const specificFile = searchParams.get('file'); // Get the 'file' parameter

  const [flashcards, setFlashcards] = useState<FlashcardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [title, setTitle] = useState<string>('Flashcards'); // Dynamic title

  useEffect(() => {
    let csvFileName: string | null = null;
    let pageTitle = 'Flashcards';

    if (specificFile) {
      // Prioritize the 'file' parameter
      csvFileName = specificFile;
      pageTitle = `Exercises: ${specificFile.replace('.csv', '')}`;
    } else if (chapter && csvMapping[chapter]) {
      // Fallback to 'chapter' parameter
      csvFileName = csvMapping[chapter];
      pageTitle = `Chapter ${chapter} Flashcards`;
    } else {
      setError('Please select a chapter or exercise set from the main page.');
      setLoading(false);
      setTitle(pageTitle);
      return;
    }

    setTitle(pageTitle);
    const csvUrl = `/${csvFileName}`; // Assuming files are in /public

    Papa.parse(csvUrl, {
      download: true,
      header: false, // since your file is Q,A with no header row
      skipEmptyLines: true,
      complete: (results: Papa.ParseResult<string[]>) => {
        // Each row is [question, answer]
        // Ensure data is string[][] and filter any potentially incomplete rows
        const parsed: FlashcardData[] = results.data
          .filter(row => Array.isArray(row) && row.length >= 2 && row[0] && row[1]) 
          .map((row: string[]) => ({
            question: row[0],
            answer: row[1],
          }));
        setFlashcards(parsed);
        setLoading(false);
      },
      error: (error) => {
        console.error('Error fetching CSV:', error);
        setError('Error loading flashcards.');
        setLoading(false);
      },
    });
  }, [chapter, specificFile]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-cyan-300">{title}</h2>
      {loading && <p className="text-center">Loading flashcards...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      {!loading && !error && (
        <div className="container mx-auto">
          {/* Add Back Home Link */}
          <Link href="/" className="mb-4 inline-block text-blue-600 hover:underline">
            &larr; Back Home
          </Link>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {flashcards.map((fc, idx) => (
              <Flashcard key={idx} question={fc.question} answer={fc.answer} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Wrap the main logic in a Suspense boundary because useSearchParams needs it
export default function FlashcardsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-900 text-white p-8 text-center">Loading page...</div>}>
      <FlashcardsContent />
    </Suspense>
  );
}
