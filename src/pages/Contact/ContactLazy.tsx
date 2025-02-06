import React from 'react';
import { lazy, Suspense } from 'react';

const Contact = lazy(() =>
  import('./Contact.tsx').then(module => ({
    default: module.Contact,
  })),
);

export function ContactLazy() {
  return (
    <Suspense>
      <Contact />
    </Suspense>
  );
}
