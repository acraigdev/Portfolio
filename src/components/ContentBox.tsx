import type { ReactNode } from 'react';
import React from 'react';

interface ContentBoxProps {
  className?: string;
  children: ReactNode;
  inert?: boolean;
  noPadding?: boolean;
}

export function ContentBox({
  className,
  children,
  inert,
  noPadding,
}: ContentBoxProps) {
  return (
    <div
      className={`bg-white ${noPadding ? '' : 'p-4 md:p-15'} rounded-lg shadow-sm ${className ?? ''}`}
      inert={inert}
    >
      {children}
    </div>
  );
}
