import React, { ReactNode } from 'react';

interface ContentBoxProps {
  children: ReactNode;
}

export function ContentBox({ children }: ContentBoxProps) {
  return (
    <div className="bg-white p-3 md:p-8 rounded-lg shadow-sm font-body overflow-clip transform-container">
      {children}
    </div>
  );
}
