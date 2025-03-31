import React, { ReactNode } from 'react';

interface ButtonProps {
  label: ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export function Button({
  label,
  onClick,
  variant = 'primary',
  disabled,
}: ButtonProps) {
  return (
    <button
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
      className={variant}
      disabled={disabled}
    >
      <span>{label}</span>
    </button>
  );
}
