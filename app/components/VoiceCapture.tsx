import React, { useEffect, useRef, useState } from 'react';

interface VoiceCaptureProps {
  onFinished: (base64: string) => void;
}

export const VoiceCapture: React.FC<VoiceCaptureProps> = ({ onFinished }) => {
  const [recording, setRecording] = useState(true);
  const chunks = useRef<Blob[]>([]);
  const recorder = useRef<MediaRecorder | null>(null);

  useEffect(() => {
    (async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      recorder.current = new MediaRecorder(stream);
      chunks.current = [];

      recorder.current.ondataavailable = e => {
        console.log('VoiceCapture dataavailable, chunk size:', e.data.size);
        chunks.current.push(e.data);
      };

      recorder.current.onstop = () => {
        console.log('VoiceCapture stopped, chunks:', chunks.current.length);
        const blob = new Blob(chunks.current, { type: 'audio/webm' });
        const reader = new FileReader();
        reader.onloadend = () => {
          const dataUrl = reader.result as string;
          console.log('VoiceCapture onFinished dataUrl length:', dataUrl.length);
          onFinished(dataUrl);
        };
        reader.readAsDataURL(blob);
        stream.getTracks().forEach(t => t.stop());
      };

      recorder.current.start();
      console.log('VoiceCapture recorder started');
    })();
    return () => {
      if (recorder.current && recorder.current.state !== 'inactive') {
        console.log('VoiceCapture cleanup, stopping recorder');
        recorder.current.stop();
      }
    };
  }, [onFinished]);

  const stop = () => {
    recorder.current?.stop();
    setRecording(false);
  };

  return (
    <button
      onClick={stop}
      className="w-full px-4 py-2 rounded bg-red-600 hover:bg-red-700"
    >
      {recording ? '🔴 End answer' : 'Processing…'}
    </button>
  );
};