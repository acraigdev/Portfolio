import React from 'react';
import { lazy, Suspense } from 'react';

const Random = lazy(() =>
  import('./Random.tsx').then(module => ({
    default: module.Random,
  })),
);

export function RandomLazy() {
  return (
    <Suspense>
      <Random />
    </Suspense>
  );
}
