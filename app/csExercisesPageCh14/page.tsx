'use client';
import React from 'react';
import ExercisePageTemplate from '../components/ExercisePageTemplate';
import { exercises } from '../data/csExercisesCh14';

export default function CSExercisesPage14() {
  return (
    <ExercisePageTemplate
      exercises={exercises}
      chapterNumber={14}
    />
  );
}
