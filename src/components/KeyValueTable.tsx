import { Maybe } from '../utils/typeHelpers';
import React from 'react';

type Item = {
  key: string;
  value?: Maybe<string>;
};

interface KeyValueTableProps {
  items: Array<Item>;
}

/**
 * TODO:
 * Figure out divider on mobile
 */

export function KeyValueTable({ items }: KeyValueTableProps) {
  return (
    <div className="w-full my-6 grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-solid md:divide-gray-light">
      {items.map(({ key, value }) => (
        <div key={key} className="px-3 text-center">
          <div className="font-body font-bold text-purple-dark">{key}</div>
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
}
