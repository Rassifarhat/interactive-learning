'use client';

import React, { useState, useEffect } from 'react';

interface Props {
  transcript: string;
  modelAnswer: string;
  question: string;
}

export const Assessment: React.FC<Props> = ({ transcript, modelAnswer, question }) => {
  const [state, setState] = useState<'pending' | 'done' | 'error'>('pending');
  const [result, setResult] = useState<{ grade: number; comments: string; modelAnswer: string }>();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/evaluate', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ studentAnswer: transcript, modelAnswer, question })
        });
        const data = await res.json();
        setResult(data);
        setState('done');
      } catch {
        setState('error');
      }
    })();
  }, [transcript, modelAnswer, question]);

  if (state === 'pending') return <p className="text-yellow-400">Assessing your answer…</p>;
  if (state === 'error') return <p className="text-red-500">Could not evaluate answer.</p>;

  return (
    <div className="space-y-2">
      <p><strong>Your answer:</strong> {transcript}</p>
      <p><strong>Grade:</strong> {result!.grade}/10</p>
      <p className="whitespace-pre-wrap">{result!.comments}</p>

      <details className="mt-2">
        <summary className="cursor-pointer underline">Model answer</summary>
        <p className="whitespace-pre-wrap">{result!.modelAnswer}</p>
      </details>
    </div>
  );
};