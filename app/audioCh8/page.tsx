'use client';

import React, { useState, useEffect, useRef } from 'react';

const AudioPageCh8: React.FC = () => {
    const [transcript, setTranscript] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const fetchTranscript = async () => {
            try {
                // Assuming chemistryTranscriptionCh8.txt is in the public folder
                const response = await fetch('/chemistryTranscriptionCh8.txt');
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

    return (
        <div className="p-4 h-screen flex flex-col">
            <h1 className="text-2xl font-bold mb-4 text-center">Chapter 8: Redox Chemistry - Audio Lecture</h1>
            <div className="flex-grow flex flex-col md:flex-row gap-4 overflow-hidden">
                {/* Left Side: Audio Player and Transcript */}
                <div className="md:w-1/3 flex flex-col border border-gray-300 rounded p-4 bg-gray-50 h-full">
                    <h2 className="text-xl font-semibold mb-3">Audio Lecture & Transcript</h2>
                    
                    {/* Audio Player - Added block display and potential min-height */}
                    <div className="mb-4"> {/* Container for audio player */}
                        <audio 
                            ref={audioRef} 
                            controls 
                            className="w-full block" // Ensure block display, keep full width
                            preload="metadata"
                            aria-label="Chapter 8 Audio Lecture Player" // Added aria-label for accessibility
                        >
                            {/* Assuming chemistryAudioCh8.mp3 is in the public folder */}
                            <source src="/chemistryAudioCh8.mp3" type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>

                    {/* Scrollable Transcript */}
                    <div className="flex-grow overflow-y-auto border border-gray-200 rounded p-3 bg-white">
                         <h3 className="text-lg font-medium mb-2">Transcript</h3>
                         {error ? (
                             <p className="text-red-500">{error}</p>
                         ) : (
                            /* Added explicit text color */
                            <pre className="whitespace-pre-wrap text-sm font-mono text-gray-800">{transcript || 'Loading transcript...'}</pre>
                         )}
                    </div>
                </div>

                {/* Right Side: PDF Viewer */}
                <div className="md:w-2/3 flex flex-col border border-gray-300 rounded p-4 bg-gray-50 h-full">
                     <h2 className="text-xl font-semibold mb-3">Chapter 8 Notes (PDF)</h2>
                     <div className="flex-grow h-full">
                         {/* Embedding PDF */}
                        <object
                            data="/ChemCh8.pdf" // Assuming ChemCh8.pdf is in the public folder
                            type="application/pdf"
                            width="100%"
                            height="100%" // Ensure object takes full height of its container
                            aria-label="PDF viewer for Chapter 8 notes"
                        >
                            <p>Your browser does not support embedded PDFs. You can <a href="/ChemCh8.pdf" download>download the PDF</a> instead.</p>
                            {/* Fallback for browsers that don't support object tag for PDF */}
                             <iframe
                                src={`https://docs.google.com/gview?url=${window.location.origin}/ChemCh8.pdf&embedded=true`}
                                style={{ width: '100%', height: '100%', border: 'none' }}
                                title="PDF Viewer Frame"
                            ></iframe>
                        </object>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioPageCh8;
