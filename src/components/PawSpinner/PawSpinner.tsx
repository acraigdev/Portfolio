import React from 'react';
import './style.css';

export function PawSpinner({
  isLoading,
  isDarkMode,
  className,
}: {
  isLoading: boolean;
  isDarkMode?: boolean;
  className?: string;
}) {
  return (
    <div className={`paw-spinner ${className ? className : ''}`}>
      <div className={`toes ${isLoading ? 'loading' : ''}`}>
        {new Array(4).fill('').map((_bean, i) => (
          <div key="i" className={`bean ${isDarkMode ? 'dark' : ''}`}></div>
        ))}
      </div>
      <div className={`pad ${isDarkMode ? 'dark' : ''}`}></div>
    </div>
  );
}
