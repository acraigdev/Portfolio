import React, { Ref, useImperativeHandle, useRef, useState } from 'react';
import { Maybe, Nullable, ValidationDelegate } from '../utils/typeHelpers';
import { v4 as uuidv4 } from 'uuid';
import { Icons } from '../components/Icons';
import { SpaceBetween } from './SpaceBetween';

interface TextInputProps {
  val: Maybe<string>;
  onValChange: (val: string) => void;
  label: string;
  validation?: (val: Nullable<string>) => boolean;
  validationError?: Nullable<string>;
  classes?: string;
  validationDelegate?: Nullable<Ref<ValidationDelegate>>;
  type?: 'input' | 'textarea';
}

export function TextInput({
  val,
  onValChange,
  label,
  validation,
  validationError,
  classes,
  validationDelegate,
  type = 'input',
}: TextInputProps) {
  const id = `form-${uuidv4()}`;
  const inputRef = useRef(null);
  const [isError, setIsError] = useState(false);

  useImperativeHandle(validationDelegate, () => ({
    validate: ({ shouldFocus }) => {
      const isValid = validation?.(val);
      if (!isValid) {
        setIsError(true);
        shouldFocus && inputRef.current?.focus();
        return false;
      }
      setIsError(false);
      return true;
    },
  }));
  return (
    <div className={classes}>
      <label htmlFor={id} className="block mb-2 font-bold">
        <p>{label}</p>
      </label>
      {type === 'input' && (
        <input
          id={id}
          value={val}
          onChange={e => {
            setIsError(false);
            onValChange(e.target.value);
          }}
          className="bg-purple-light border border-gray-light text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type="text"
          ref={inputRef}
        />
      )}
      {type === 'textarea' && (
        <textarea
          id={id}
          value={val}
          onChange={e => {
            setIsError(false);
            onValChange(e.target.value);
          }}
          className="bg-purple-light border border-gray-light text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          ref={inputRef}
        />
      )}
      {isError && (
        <SpaceBetween direction="horizontal" size="xs" className="text-red-700">
          <Icons.Error className="size-4" />
          <span className="text-sm">{validationError}</span>
        </SpaceBetween>
      )}
    </div>
  );
}
