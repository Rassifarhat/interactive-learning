'use client';
import { Dispatch, SetStateAction } from 'react';

/**
 * Encapsulates the save note logic.
 * @param nodeName - Name of the active node
 * @param infoContent - Content to save
 * @param field - Subject field (e.g., 'computerScience', 'chemistry', or 'filipChemistry')
 * @param chapter - Chapter number
 * @param setSaveStatus - Setter for save status message
 * @param setIsSaving - Setter for loading state
 */
export async function saveNoteForRevision(
  nodeName: string | null,
  infoContent: string,
  field: 'computerScience' | 'chemistry' | 'filipChemistry',
  chapter: number,
  setSaveStatus: Dispatch<SetStateAction<string>>,
  setIsSaving: Dispatch<SetStateAction<boolean>>
) {
  console.log('saveNoteForRevision called with:', { nodeName, infoContent, field, chapter });
  if (!nodeName || !infoContent) {
    console.log('saveNoteForRevision aborted: missing nodeName or infoContent', { nodeName, infoContent });
    return;
  }
  console.log('saveNoteForRevision proceeding to save note');
  setIsSaving(true);

  const timestamp = new Date().toISOString();
  const noteToSave = `# ${nodeName}\n${infoContent}\n\nSaved on: ${timestamp}\n\n---\n\n`;

  try {
    const response = await fetch('/api/saveNote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ note: noteToSave, field, chapter }),
    });

    if (!response.ok) {
      throw new Error('Failed to save note');
    }

    setSaveStatus('Note saved!');
    setTimeout(() => setSaveStatus(''), 3000);
  } catch (error) {
    console.error('Error saving note:', error);
    setSaveStatus('Error saving note');
    setTimeout(() => setSaveStatus(''), 3000);
  } finally {
    setIsSaving(false);
  }
}
