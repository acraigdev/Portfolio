import React, { use, useEffect, useMemo, useState } from 'react';
import { Maybe } from '../../../utils/typeHelpers';

const data = (() => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(data);
        }, 2000);
      });
    });
})();

export function SearchableUser() {
  const [query, setQuery] = useState<Maybe<string>>('');
  const [selected, setSelected] = useState();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Suspense and ErrorBoundary need to surround to catch
  const users = use(data);

  const debouncedQuery = useDebounce(query, 500);

  const filteredItems = useMemo(() => {
    if (!data) return;
    return [...users].filter(user => {
      return debouncedQuery
        ? Object.values(user)
            .join(' ')
            .toLowerCase()
            .includes(debouncedQuery.toLowerCase())
        : true;
    });
  }, [data, debouncedQuery]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="flex justify-between border border-gray-light text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/2 p-2.5"
        placeholder="search"
        onFocus={() => {
          if (!dropdownVisible) {
            setDropdownVisible(true);
          }
        }}
        onKeyDown={e => {
          if (e.key === 'Escape') {
            setDropdownVisible(false);
            return;
          }
        }}
      />
      {dropdownVisible && (
        <div className="dropdown divide-y-1 divide-gray-400 border-1 border-gray-200 p-2 w-1/2">
          {!filteredItems?.length && <h4>No matching search</h4>}
          {filteredItems?.map(user => (
            <button
              className="block text-left w-full p-4 !rounded-none hover:bg-gray-100"
              key={user.username}
              onClick={() => {
                setSelected(user.id);
                setDropdownVisible(false);
              }}
            >
              <p className="text-sm font-bold">{user.name}</p>
              <p className="text-xs">
                {user.username} | {user.email}
              </p>
            </button>
          ))}
        </div>
      )}
      <h4>Selected: {users?.find(u => u.id === selected)?.name ?? 'None'}</h4>
    </div>
  );
}

function useDebounce(value: Maybe<string>, delay: number) {
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
