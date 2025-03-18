import React from 'react';
import * as CatFactsQueries from '../../../sdk/CatFactsQueries';
import { useQuery } from '@tanstack/react-query';

// TODO:
// Typewriter effect for new facts
// count input
// CSS paw print new

export function CatFacts() {
  const { data: facts } = useQuery({ ...CatFactsQueries.randomFacts({}) });
  return <>{facts.data}</>;
}
