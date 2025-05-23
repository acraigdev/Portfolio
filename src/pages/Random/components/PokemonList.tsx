import React from 'react';
import pokemonList from './pokemon.json';
import { useVirtualization } from '../../../components/VirtualizedList/VirtualizationContext';

/**
 * Without context hook
 * <ul className="h-96 overflow-y-scroll w-44" id="list">
      {pokemonList.map(p => (
        <IntersectItem key={p.id} root={document.getElementById('list')}>
          {p.name}
        </IntersectItem>
      ))}
    </ul>
 */

export function PokemonList() {
  const { getVirtualList } = useVirtualization();
  return (
    <div className="divide-y divide-gray-300">
      {getVirtualList({
        items: pokemonList,
        content: item => (
          <div className="m-2">
            <h4>{item.name}</h4>
            <b>Type:</b> {item.type.join(', ')}
          </div>
        ),
      })}
    </div>
  );
}
