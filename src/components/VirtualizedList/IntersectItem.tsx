import { ReactNode, useEffect, useRef, useState } from 'react';
import { Nullable } from '../../utils/typeHelpers';
import React from 'react';

export const IntersectItem = ({
  children,
  root,
}: {
  children: ReactNode;
  root: Nullable<HTMLElement>;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      const observer = new IntersectionObserver(
        entries => {
          setIsVisible(entries[0].isIntersecting);
        },
        { root },
      );
      observer.observe(divRef.current);

      return () => {
        if (divRef.current) {
          observer.unobserve(divRef.current);
        }
      };
    }
  });

  return (
    <div ref={divRef} style={{ minHeight: '24px' }}>
      {isVisible ? <>{children}</> : <></>}
    </div>
  );
};
