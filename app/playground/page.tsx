'use client';
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function Playground() {
  const searchParams = useSearchParams();
  const questionId = searchParams.get('id') || '';
  const chapter = searchParams.get('chapter') || '';
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000000');
  const [lineWidth, setLineWidth] = useState(2);
  const [eraserSize, setEraserSize] = useState(4);
  const [isEraser, setIsEraser] = useState(false);
  const [isAssessing, setIsAssessing] = useState(false);
  const [assessment, setAssessment] = useState<string | null>(null);
  const [exerciseDetails, setExerciseDetails] = useState<{
    question: string;
    modelAnswer: string;
    explanation: string;
  } | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isTextMode, setIsTextMode] = useState(false);
  const [textInput, setTextInput] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // Colors for the color picker
  const colors = [
    '#000000', // Black
    '#FF0000', // Red
    '#0000FF', // Blue
    '#008000', // Green
    '#FFA500', // Orange
    '#800080', // Purple
    '#FF00FF', // Magenta
    '#008080', // Teal
  ];

  // Line widths for the line width picker
  const lineWidths = [1, 2, 3, 5, 8];
  
  // Eraser sizes for the eraser size picker - offering larger options
  const eraserSizes = [3, 5, 8, 25, 40];

  // Initialize canvas context
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    // Set canvas size to match parent container with a responsive approach
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      // Make canvas larger - almost full screen
      canvas.width = container.clientWidth;
      canvas.height = Math.max(700, window.innerHeight - 200); // Much larger height
      
      // Clear and redraw horizontal lines after resize
      drawHorizontalLines(ctx, canvas.width, canvas.height);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    setContext(ctx);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Draw horizontal guidelines
  const drawHorizontalLines = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);
    
    const lineCount = 20;
    const lineSpacing = height / (lineCount + 1);
    
    ctx.strokeStyle = '#e5e5e5'; // Very light gray
    ctx.lineWidth = 1;
    
    for (let i = 1; i <= lineCount; i++) {
      const y = i * lineSpacing;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  };

  // Clear canvas and redraw guidelines
  const clearCanvas = () => {
    if (!canvasRef.current || !context) return;
    
    const canvas = canvasRef.current;
    
    // First clear the entire canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // Then redraw the horizontal lines
    drawHorizontalLines(context, canvas.width, canvas.height);
    
    // Reset the drawing state and context properties
    setIsDrawing(false);
    context.globalCompositeOperation = 'source-over';
    context.strokeStyle = color;
    context.lineWidth = isEraser ? eraserSize : lineWidth;
    context.lineCap = 'round';
    context.lineJoin = 'round';

    // Reset assessment if there was one
    setAssessment(null);
  };

  // Drawing functions
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!context) return;
    
    setIsDrawing(true);
    
    let clientX: number, clientY: number;
    
    if ('touches' in e) {
      // Touch event
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      // Mouse event
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    
    context.beginPath();
    context.moveTo(x, y);
    
    // Set drawing styles
    if (isEraser) {
      context.globalCompositeOperation = 'destination-out';
      context.strokeStyle = 'rgba(255,255,255,1)';
      context.lineWidth = eraserSize; // Use the selected eraser size
    } else {
      context.globalCompositeOperation = 'source-over';
      context.strokeStyle = color;
      context.lineWidth = lineWidth;
    }
    
    context.lineCap = 'round';
    context.lineJoin = 'round';
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !context || !canvasRef.current) return;
    
    let clientX: number, clientY: number;
    
    if ('touches' in e) {
      // Touch event
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
      e.preventDefault(); // Prevent scrolling on touch devices
    } else {
      // Mouse event
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    
    context.lineTo(x, y);
    context.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing || !context) return;
    
    setIsDrawing(false);
    context.closePath();
  };

  // Toggle eraser
  const toggleEraser = () => {
    setIsEraser(!isEraser);
  };

  // Get exercise details to send with assessment
  const fetchExerciseDetails = async () => {
    try {
      // Get question and model answer from data files
      const response = await fetch(`/api/getExercise?id=${questionId}&chapter=${chapter}`);
      if (!response.ok) throw new Error('Failed to fetch exercise details');
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching exercise details:', error);
      return null;
    }
  };
  
  // Submit for assessment
  const submitForAssessment = async () => {
    setIsAssessing(true);
    
    try {
      // Get exercise details from API
      const details = await fetchExerciseDetails();
      
      if (!details) {
        throw new Error('Could not fetch exercise details');
      }
      
      let contentData;
      
      // If in text mode, use the text input directly
      if (isTextMode && textInput) {
        // We still need to send something in the imageData format that the API expects
        // Create a simple text representation of the textInput
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Could not create canvas context');
        
        // Set canvas size - similar to our drawing canvas
        canvas.width = 800;
        canvas.height = 600;
        
        // Fill with white background
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Write the text input
        ctx.font = '16px monospace';
        ctx.fillStyle = 'black';
        
        // Split the text by lines and render each line
        const lines = textInput.split('\n');
        lines.forEach((line, index) => {
          ctx.fillText(line, 20, 30 + (index * 20));
        });
        
        contentData = canvas.toDataURL('image/png');
      } else {
        // In drawing mode, capture the canvas as before
        if (!canvasRef.current) {
          throw new Error('Canvas not found');
        }
        contentData = canvasRef.current.toDataURL('image/png');
      }
      
      // Prepare data for API call
      const response = await fetch('/api/visualAssessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageData: contentData,
          question: details.question,
          modelAnswer: details.modelAnswer,
          explanation: details.explanation,
          id: questionId,
          chapter: chapter,
          isTextMode: isTextMode,
          textContent: isTextMode ? textInput : null, // Include the raw text if in text mode
        }),
      });
      
      if (!response.ok) {
        throw new Error('Assessment failed');
      }
      
      const { assessment } = await response.json();
      setAssessment(assessment);
    } catch (error) {
      console.error('Error during assessment:', error);
      setAssessment('An error occurred while processing your assessment. Please try again.');
    } finally {
      setIsAssessing(false);
    }
  };

  // Back link based on chapter
  const backLink = chapter ? `/csExercisesPageCh${chapter}` : '/';

  useEffect(() => {
    fetchExerciseDetails().then((details) => {
      if (details) {
        setExerciseDetails(details);
      }
    });
  }, [questionId, chapter]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
          <Link href={backLink} className="text-blue-400 hover:text-blue-300 flex items-center">
            <span>← Back to {chapter ? `Chapter ${chapter} Exercises` : 'Home'}</span>
          </Link>
          
          <h1 className="text-2xl font-bold text-center text-yellow-300">
            Drawing Playground {questionId ? `- Exercise ${questionId}` : ''}
          </h1>
          
          <div className="flex gap-2">
            <button
              onClick={clearCanvas}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Clear Canvas
            </button>
            
            <button
              onClick={submitForAssessment}
              disabled={isAssessing}
              className={`px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors ${isAssessing ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isAssessing ? 'Assessing...' : 'Finish! Please assess me'}
            </button>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
          {/* Drawing tools */}
          <div className="flex flex-wrap items-center gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Colors</label>
              <div className="flex gap-2">
                {colors.map((c) => (
                  <button
                    key={c}
                    className={`w-8 h-8 rounded-full ${color === c && !isEraser ? 'ring-2 ring-white' : ''}`}
                    style={{ backgroundColor: c }}
                    onClick={() => {
                      setColor(c);
                      setIsEraser(false);
                    }}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Line Width</label>
              <div className="flex gap-2">
                {lineWidths.map((w) => (
                  <button
                    key={w}
                    className={`w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center ${lineWidth === w && !isEraser ? 'ring-2 ring-white' : ''}`}
                    onClick={() => {
                      setLineWidth(w);
                      setIsEraser(false);
                    }}
                  >
                    <div
                      className="rounded-full bg-current"
                      style={{
                        width: `${w}px`,
                        height: `${w}px`,
                        backgroundColor: color
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <button
                className={`px-4 py-2 rounded ${isEraser ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
                onClick={toggleEraser}
              >
                Eraser {isEraser && '(Active)'}
              </button>
            </div>
            
            {/* Add Eraser Size picker - only show when eraser is active */}
            {isEraser && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Eraser Size</label>
                <div className="flex gap-2">
                  {eraserSizes.map((size) => (
                    <button
                      key={size}
                      className={`w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center ${eraserSize === size ? 'ring-2 ring-white' : ''}`}
                      onClick={() => setEraserSize(size)}
                    >
                      <div
                        className="rounded-full bg-white"
                        style={{
                          width: `${Math.min(size, 8)}px`,
                          height: `${Math.min(size, 8)}px`
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div>
              <button
                className={`px-4 py-2 rounded ${isTextMode ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
                onClick={() => setIsTextMode(!isTextMode)}
              >
                Text Mode {isTextMode && '(Active)'}
              </button>
            </div>
          </div>
          
          {/* Canvas container - Made larger */}
          <div className="bg-white rounded-lg overflow-hidden w-full">
            {isTextMode ? (
              <textarea
                ref={textAreaRef}
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                className="w-full h-full p-4 bg-gray-800 text-gray-100 font-mono text-base leading-relaxed rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your solution here using your keyboard..."
                spellCheck="false"
              />
            ) : (
              <canvas
                ref={canvasRef}
                className="touch-none w-full"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
              />
            )}
          </div>
          
          {/* Model answer */}
          {exerciseDetails && (
            <div className="mt-6 p-4 bg-gray-700 rounded-lg shadow-inner">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-blue-300">Reference Materials</h2>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  onClick={() => setShowAnswer(!showAnswer)}
                >
                  {showAnswer ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-yellow-300">Question:</h3>
                <div className="prose prose-invert max-w-none whitespace-pre-wrap">
                  {exerciseDetails.question}
                </div>
              </div>
              
              {showAnswer && (
                <>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2 text-green-300">Model Answer:</h3>
                    <div className="prose prose-invert max-w-none whitespace-pre-wrap p-3 bg-gray-800 rounded">
                      {exerciseDetails.modelAnswer}
                    </div>
                  </div>
                  
                  {exerciseDetails.explanation && (
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2 text-cyan-300">Explanation:</h3>
                      <div className="prose prose-invert max-w-none whitespace-pre-wrap">
                        {exerciseDetails.explanation}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
          
          {/* Assessment results */}
          {assessment && (
            <div className="mt-6 p-4 bg-gray-700 rounded-lg shadow-inner">
              <h2 className="text-xl font-semibold mb-2 text-green-300">Assessment</h2>
              <div className="prose prose-invert max-w-none whitespace-pre-wrap">
                {assessment}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
