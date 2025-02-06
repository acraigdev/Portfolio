import React from 'react';
import { lazy, Suspense } from 'react';

const About = lazy(() =>
  import('./About.tsx').then(module => ({
    default: module.About,
  })),
);

export function AboutLazy() {
  return (
    <Suspense>
      <About />
    </Suspense>
  );
}
