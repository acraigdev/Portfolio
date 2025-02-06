import React from 'react';
import { lazy, Suspense } from 'react';

const Work = lazy(() =>
  import('./Work.tsx').then(module => ({
    default: module.Work,
  })),
);

export function WorkLazy() {
  return (
    <Suspense>
      <Work />
    </Suspense>
  );
}
