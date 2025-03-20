import { useEffect } from 'react';
import type { Nullable } from '../typeHelpers';

export function useOuterClickHandler({
  ref,
  onOuterClick,
}: {
  ref: React.RefObject<Nullable<HTMLDivElement>>;
  onOuterClick: () => void;
}) {
  useEffect(() => {
    const handleClickOutside = ({ button, target }: MouseEvent) => {
      if (
        button === 0 &&
        target instanceof HTMLElement &&
        !ref.current?.contains(target)
      ) {
        onOuterClick();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onOuterClick, ref]);
}
