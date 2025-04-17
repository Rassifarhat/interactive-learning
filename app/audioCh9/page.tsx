'use client';

import React, { useState, useEffect, useRef } from 'react';

const AudioPageCh9: React.FC = () => {
    const [transcript, setTranscript] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const fetchTranscript = async () => {
            try {
                // Fetch Chapter 9 transcript
                const response = await fetch('/chemistryTranscriptionCh9.txt');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const text = await response.text();
                setTranscript(text);
            } catch (e: any) {
                console.error("Failed to fetch transcript:", e);
                setError(`Failed to load transcript: ${e.message}`);
                setTranscript('Error loading transcript.');
            }
        };

        fetchTranscript();
    }, []);

    // Construct PDF URL safely in useEffect after window is available
    const [pdfUrl, setPdfUrl] = useState<string>('');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setPdfUrl(`${window.location.origin}/chemCh9.pdf`);
        }
    }, []);


    return (
        <div className="p-4 h-screen flex flex-col bg-gray-100"> {/* Added a light background */}
            <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Chapter 9: Kinetics & Equilibria - Audio Lecture</h1> {/* Updated Title */}
            <div className="flex-grow flex flex-col md:flex-row gap-4 overflow-hidden">
                {/* Left Side: Audio Player and Transcript */}
                 <div className="md:w-1/3 flex flex-col border border-gray-300 rounded-lg shadow-sm p-4 bg-white h-full"> {/* Enhanced styling */}
                    <h2 className="text-xl font-semibold mb-3 text-gray-700">Audio Lecture & Transcript</h2>

                    {/* Audio Player */}
                    <div className="mb-4">
                        <audio
                            ref={audioRef}
                            controls
                            className="w-full block rounded" // Added rounded corners
                            preload="metadata"
                            aria-label="Chapter 9 Audio Lecture Player" // Updated aria-label
                        >
                            {/* Chapter 9 Audio Source */}
                            <source src="/chemistryAudioCh9.mp3" type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>

                    {/* Scrollable Transcript */}
                    <div className="flex-grow overflow-y-auto border border-gray-200 rounded p-3 bg-gray-50"> {/* Slightly different background */}
                         <h3 className="text-lg font-medium mb-2 text-gray-600">Transcript</h3>
                         {error ? (
                             <p className="text-red-600">{error}</p> // Slightly darker red
                         ) : (
                            <pre className="whitespace-pre-wrap text-sm font-mono text-gray-700">{transcript || 'Loading transcript...'}</pre> // Slightly darker text
                         )}
                    </div>
                </div>

                {/* Right Side: PDF Viewer */}
                <div className="md:w-2/3 flex flex-col border border-gray-300 rounded-lg shadow-sm p-4 bg-white h-full"> {/* Enhanced styling */}
                     <h2 className="text-xl font-semibold mb-3 text-gray-700">Chapter 9 Notes (PDF)</h2>
                     <div className="flex-grow h-full overflow-hidden rounded"> {/* Ensure overflow hidden and rounded */}
                         {/* Embedding PDF */}
                        <object
                            data="/chemCh9.pdf" // Chapter 9 PDF Source
                            type="application/pdf"
                            width="100%"
                            height="100%"
                            aria-label="PDF viewer for Chapter 9 notes" // Updated aria-label
                            className="rounded" // Added rounded corners
                        >
                            <p className="p-4 text-gray-600">Your browser does not support embedded PDFs. You can <a href="/chemCh9.pdf" download className="text-blue-600 hover:underline">download the PDF</a> instead.</p>
                            {/* Fallback using Google Viewer */}
                             {pdfUrl && ( // Only render iframe when pdfUrl is set
                                <iframe
                                    src={`https://docs.google.com/gview?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
                                    style={{ width: '100%', height: '100%', border: 'none' }}
                                    title="PDF Viewer Frame Chapter 9" // Updated Title
                                    className="rounded" // Added rounded corners
                                ></iframe>
                             )}
                        </object>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioPageCh9;
