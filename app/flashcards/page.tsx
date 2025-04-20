'use client'; // for client-side state & hooks
import { useSearchParams } from 'next/navigation'; // Use next/navigation for App Router
import React, { useEffect, useState, Suspense } from 'react'; // Import Suspense
import Papa from 'papaparse';
import Link from 'next/link'; // Import Link

// Define type for flashcard data
interface FlashcardData {
  question: string;
  answer: string;
  id?: string; // Add unique ID for storage purposes
}

// Define the type for our difficulty ratings
type DifficultyRating = 'difficult' | 'medium' | 'easy' | null;

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

// Simple hash function for generating unique IDs from question text
function generateCardId(question: string, fileKey: string): string {
  // Create a hash from the question text and file identifier
  let hash = 0;
  for (let i = 0; i < question.length; i++) {
    const char = question.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return `${fileKey}_${Math.abs(hash)}`;
}

// A utility to save and load flashcard ratings
const flashcardRatings = {
  // Save a card's rating to localStorage
  saveRating: (cardId: string, rating: DifficultyRating) => {
    if (typeof window !== 'undefined') {
      // Get current ratings
      const savedRatings = localStorage.getItem('flashcardRatings');
      const ratings = savedRatings ? JSON.parse(savedRatings) : {};
      
      // Update with new rating
      ratings[cardId] = rating;
      
      // Save back to localStorage
      localStorage.setItem('flashcardRatings', JSON.stringify(ratings));
    }
  },
  
  // Load a card's rating from localStorage
  loadRating: (cardId: string): DifficultyRating => {
    if (typeof window !== 'undefined') {
      const savedRatings = localStorage.getItem('flashcardRatings');
      if (savedRatings) {
        const ratings = JSON.parse(savedRatings);
        return ratings[cardId] || null;
      }
    }
    return null;
  }
};

// A single flashcard showing Q + (toggleable) A
// Add type annotations for props
function Flashcard({ question, answer, id }: FlashcardData) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [difficulty, setDifficulty] = useState<DifficultyRating>(null);

  // Load saved rating on mount
  useEffect(() => {
    if (id) {
      const savedRating = flashcardRatings.loadRating(id);
      if (savedRating) {
        setDifficulty(savedRating);
      }
    }
  }, [id]);

  const handleCardClick = () => {
    if (!showAnswer) {
      // First click - show answer and rating buttons
      setShowAnswer(true);
      setShowRating(true);
    } else if (showRating) {
      // Rating is visible, keep it that way
      return;
    } else {
      // Card is already open without rating - close it
      setShowAnswer(false);
    }
  };

  const handleRatingClick = (rating: DifficultyRating) => {
    setDifficulty(rating);
    setShowRating(false);
    setShowAnswer(false); // Close the card when rating is selected
    
    // Save the rating to localStorage
    if (id) {
      flashcardRatings.saveRating(id, rating);
    }
  };

  // Determine card background color based on difficulty
  const getCardStyle = () => {
    if (!difficulty) return "bg-white";
    
    switch (difficulty) {
      case 'difficult': return "bg-red-100 border-red-300";
      case 'medium': return "bg-blue-100 border-blue-300";
      case 'easy': return "bg-green-100 border-green-300";
      default: return "bg-white";
    }
  };

  return (
    <div className="relative">
      {showRating && (
        <div className="absolute top-0 left-0 transform -translate-y-full w-full flex justify-between p-1 bg-gray-100 rounded-t-lg shadow-md">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleRatingClick('difficult');
            }}
            className="px-2 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
          >
            Difficult
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleRatingClick('medium');
            }}
            className="px-2 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
          >
            Medium
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleRatingClick('easy');
            }}
            className="px-2 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors"
          >
            Easy
          </button>
        </div>
      )}
      <div 
        onClick={handleCardClick}
        className={`${getCardStyle()} shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200 border`}
      >
        {/* Make question text red */}
        <p className="font-semibold mb-2 text-red-600">{question}</p>
        {showAnswer && (
          <p className="text-gray-700 border-t pt-2 mt-2">{answer}</p>
        )}
      </div>
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
  const [fileKey, setFileKey] = useState<string>(''); // For creating card IDs

  useEffect(() => {
    let csvFileName: string | null = null;
    let pageTitle = 'Flashcards';
    let currentFileKey = '';

    if (specificFile) {
      // Prioritize the 'file' parameter
      csvFileName = specificFile;
      pageTitle = `Exercises: ${specificFile.replace('.csv', '')}`;
      currentFileKey = specificFile;
    } else if (chapter && csvMapping[chapter]) {
      // Fallback to 'chapter' parameter
      csvFileName = csvMapping[chapter];
      pageTitle = `Chapter ${chapter} Flashcards`;
      currentFileKey = `ch${chapter}`;
    } else {
      setError('Please select a chapter or exercise set from the main page.');
      setLoading(false);
      setTitle(pageTitle);
      return;
    }

    setTitle(pageTitle);
    setFileKey(currentFileKey);
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
          .map((row: string[]) => {
            const question = row[0];
            const answer = row[1];
            // Generate a unique ID for this card
            const id = generateCardId(question, currentFileKey);
            return {
              question,
              answer,
              id
            };
          });
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
              <Flashcard 
                key={fc.id || idx} 
                question={fc.question} 
                answer={fc.answer} 
                id={fc.id} 
              />
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
