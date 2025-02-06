import React, { ReactNode } from 'react';

interface ButtonProps {
  label: ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
      className={variant}
    >
      {label}
    </button>
  );
}
