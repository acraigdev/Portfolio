import React from 'react';
import { Icons } from '../../../components/Icons';

interface CareerDetailProps {
  id: string;
  onReturn: () => void;
}

export function CareerDetail({ id, onReturn }: CareerDetailProps) {
  return (
    <>
      <Icons.Arrow
        onClick={() => onReturn()}
        className="size-8 cursor-pointer -rotate-90"
      />
      CareerDetail
    </>
  );
}
