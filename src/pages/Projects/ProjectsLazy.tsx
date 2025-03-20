import React from 'react';
import { lazy, Suspense } from 'react';

const Projects = lazy(() =>
  import('./Projects.tsx').then(module => ({
    default: module.Projects,
  })),
);

export function ProjectsLazy() {
  return (
    <Suspense>
      <Projects />
    </Suspense>
  );
}
