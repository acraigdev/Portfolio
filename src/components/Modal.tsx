import type { ReactNode } from 'react';
import React, { useRef } from 'react';
import { Icons } from './Icons';
import { useOuterClickHandler } from '../utils/hooks/useOuterClickHandler';

interface ModalProps {
  onDismiss: () => void;
  children: ReactNode;
  title?: string;
}

export function Modal({ onDismiss, children, title }: ModalProps) {
  const ModalRef = useRef<HTMLDivElement>(null);
  useOuterClickHandler({
    ref: ModalRef,
    onOuterClick: onDismiss,
  });
  return (
    <div className="fixed top-0 left-0 w-full h-full z-10">
      <div className="bg-gray-200 w-full h-full opacity-40"></div>
      <div
        ref={ModalRef}
        className="bg-white p-4 shadow-sm absolute top-1/6 left-0 right-0 m-auto opacity-100 w-9/10 md:w-3/4 max-h-3/4 overflow-hidden"
      >
        <div className="flex justify-between items-center">
          <h3>{title}</h3>
          <button type="button" className="icon" onClick={() => onDismiss()}>
            <Icons.XMark className="size-6 float-right" />
          </button>
        </div>
        <div className="flex items-center flex-col">{children}</div>
      </div>
    </div>
  );
}
