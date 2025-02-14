import React from 'react';
import { Icons } from './Icons';

interface TagProps {
  tag: string;
  onTagRemove?: (tag: string) => void;
}

export function Tag({ tag, onTagRemove }: TagProps) {
  return (
    <span className="bg-purple-dark text-white py-1 px-2 rounded-sm min-w-fit">
      <span className={onTagRemove ? 'pr-1' : ''}>{tag}</span>
      {!!onTagRemove && (
        <button
          type="button"
          className="align-middle cursor-pointer"
          onClick={() => onTagRemove(tag)}
        >
          <Icons.XMark className="size-4" />
        </button>
      )}
    </span>
  );
}
