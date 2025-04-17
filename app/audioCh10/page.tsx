'use client';

import React, { useState, useEffect, useRef } from 'react';

const AudioCh10Page: React.FC = () => {
    const [transcript, setTranscript] = useState<string>('Loading transcription...');
    const [error, setError] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    
    // Construct PDF URL safely in useEffect after window is available
    const [pdfUrl, setPdfUrl] = useState<string>('');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setPdfUrl(`${window.location.origin}/chemCh10.pdf`);
        }
    }, []);
    
    useEffect(() => {
        const fetchTranscript = async () => {
            try {
                // Fetch Chapter 10 transcript
                const response = await fetch('/chemistryTranscriptionCh10.txt');
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
        <div className="p-4 h-screen flex flex-col bg-gray-900 text-white"> 
            <h1 className="text-2xl font-bold mb-4 text-center text-teal-400">Chapter 10: Organic Chemistry II - Audio Lecture</h1>
            <div className="flex-grow flex flex-col md:flex-row gap-4 overflow-hidden">
                {/* Left Side: Audio Player and Transcript */}
                <div className="md:w-1/3 flex flex-col border border-gray-700 rounded-lg shadow-sm p-4 bg-gray-800 h-full">
                    <h2 className="text-xl font-semibold mb-3 text-teal-300">Audio Lecture & Transcript</h2>

                    {/* Audio Player */}
                    <div className="mb-4">
                        <audio
                            ref={audioRef}
                            controls
                            className="w-full block rounded bg-gray-700"
                            preload="metadata"
                            aria-label="Chapter 10 Audio Lecture Player"
                        >
                            <source src="/chemistryAudioCh10.mp3" type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>

                    {/* Scrollable Transcript */}
                    <div className="flex-grow overflow-y-auto border border-gray-700 rounded p-3 bg-gray-700">
                        <h3 className="text-lg font-medium mb-2 text-teal-300">Transcript</h3>
                        {error ? (
                            <p className="text-red-400">{error}</p>
                        ) : (
                            <pre className="whitespace-pre-wrap text-sm font-mono text-gray-300">{transcript}</pre>
                        )}
                    </div>
                </div>

                {/* Right Side: PDF Viewer */}
                <div className="md:w-2/3 flex flex-col border border-gray-700 rounded-lg shadow-sm p-4 bg-gray-800 h-full">
                    <h2 className="text-xl font-semibold mb-3 text-teal-300">Chapter 10 Notes (PDF)</h2>
                    <div className="flex-grow h-full overflow-hidden rounded">
                        {/* Embedding PDF */}
                        <object
                            data="/chemCh10.pdf"
                            type="application/pdf"
                            width="100%"
                            height="100%"
                            aria-label="PDF viewer for Chapter 10 notes"
                            className="rounded"
                        >
                            <p className="p-4 text-gray-300">
                                Your browser does not support embedded PDFs. You can 
                                <a href="/chemCh10.pdf" download className="text-teal-400 hover:underline ml-1">
                                    download the PDF
                                </a> instead.
                            </p>
                            {/* Fallback using Google Viewer */}
                            {pdfUrl && (
                                <iframe
                                    src={`https://docs.google.com/gview?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
                                    style={{ width: '100%', height: '100%', border: 'none' }}
                                    title="PDF Viewer Frame Chapter 10"
                                    className="rounded bg-white"
                                ></iframe>
                            )}
                        </object>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioCh10Page;