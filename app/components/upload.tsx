'use client';
import { FormEvent, useState } from 'react';

export default function Upload() {
  const [status, setStatus] = useState<'idle' | 'busy' | 'ok' | 'err'>('idle');
  const [savedFilename, setSavedFilename] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fileInput = e.currentTarget.elements.namedItem('file') as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (!file) return;

    setStatus('busy');
    setSavedFilename(null);
    const body = new FormData();
    body.append('file', file);

    try {
      const res = await fetch('/api/import', { method: 'POST', body });
      const data = await res.json();
      
      if (res.ok) {
        setStatus('ok');
        setSavedFilename(data.filename || null);
      } else {
        setStatus('err');
      }
    } catch (error) {
      setStatus('err');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 w-full">
      <div className="flex flex-col space-y-2">
        <input 
          type="file" 
          name="file" 
          accept=".md" 
          required 
          className="block w-full text-sm text-gray-300
                  file:mr-4 file:py-2 file:px-4
                  file:rounded file:border-0
                  file:text-sm file:font-semibold
                  file:bg-purple-600 file:text-white
                  hover:file:bg-purple-700"
        />
        <button 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          type="submit"
        >
          Process Markdown
        </button>
      </div>
      {status === 'busy' && <p className="text-yellow-400">⏳ Processing markdown file...</p>}
      {status === 'ok' && (
        <div className="text-green-500">
          <p>✅ Markdown processed and saved successfully!</p>
          {savedFilename && (
            <p className="mt-1 text-sm">
              Saved as: <span className="font-mono bg-gray-800 px-2 py-1 rounded">{savedFilename}</span>
            </p>
          )}
        </div>
      )}
      {status === 'err' && <p className="text-red-500">❌ Failed to process markdown. Please try again.</p>}
    </form>
  );
}