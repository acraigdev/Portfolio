import React, { useEffect, useMemo, useState } from 'react';
import { Maybe } from '../../../utils/typeHelpers';
import { useQuery } from '@tanstack/react-query';

interface SearchableUserProps {}

export function SearchableUser({}: SearchableUserProps) {
  const [query, setQuery] = useState<Maybe<string>>('');
  const [selected, setSelected] = useState();

  const { data } = useQuery({
    queryKey: ['getData'],
    queryFn: async () =>
      await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => data),
  });

  const debouncedQuery = useDebounce(query, 500);

  const filteredItems = useMemo(() => {
    if (!data) return;
    return [...data].filter(user => {
      return debouncedQuery
        ? Object.values(user)
            .join(' ')
            .toLowerCase()
            .includes(debouncedQuery.toLowerCase())
        : true;
    });
  }, [data, debouncedQuery]);

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="border-1 border-gray-400"
        placeholder="search"
      />
      <div className="dropdown divide-y-1 divide-gray-400">
        {filteredItems?.map(user => (
          <button
            className="block text-left w-full p-4 !rounded-none hover:bg-gray-100"
            key={user.username}
            onClick={() => setSelected(user.id)}
          >
            <h4>{user.name}</h4>
            <p>
              {user.username} | {user.email}
            </p>
          </button>
        ))}
      </div>
      <h4>Selected: {data?.find(u => u.id === selected)?.name}</h4>
    </>
  );
}

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}
