import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import ReactGA from 'react-ga4';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

ReactGA.initialize('G-00X9Z0KN6V');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
