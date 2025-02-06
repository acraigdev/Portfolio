import React, { Children, ReactNode } from 'react';
import { Maybe } from '../utils/typeHelpers';

type Size = 'xs' | 'sm' | 'm' | 'l' | 'xl';
interface SpaceBetweenProps {
  direction?: 'horizontal' | 'vertical';
  size: Size;
  children: ReactNode;
  className?: Maybe<string>;
}

export function SpaceBetween({
  direction = 'vertical',
  size,
  children,
  className,
}: SpaceBetweenProps) {
  const margin =
    direction === 'vertical' ? getBottomMargin(size) : getRightMargin(size);
  return (
    <div className={className ?? ''}>
      {Children.map(children, child => (
        <span
          className={
            direction === 'vertical'
              ? `${margin} block align-middle`
              : `${margin} inline align-middle`
          }
        >
          {child}
        </span>
      ))}
    </div>
  );
}

function getBottomMargin(size: Size) {
  switch (size) {
    case 'xs':
      return 'mb-0.5 md:mb-1';
    case 'sm':
      return 'mb-1 md:mb-2';
    case 'm':
      return 'mb-2 md:mb-4';
    case 'l':
      return 'mb-3 md:mb-6';
    case 'xl':
      return 'mb-4 md:mb-8';
  }
}

function getRightMargin(size: Size) {
  switch (size) {
    case 'xs':
      return 'mr-0.5 md:mr-1';
    case 'sm':
      return 'mr-1 md:mr-2';
    case 'm':
      return 'mr-2 md:mr-4';
    case 'l':
      return 'mr-3 md:mr-6';
    case 'xl':
      return 'mr-4 md:mr-8';
  }
}
