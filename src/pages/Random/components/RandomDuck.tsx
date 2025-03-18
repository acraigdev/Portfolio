import React from 'react';
import { useQuery } from '@tanstack/react-query';
import * as RandomDuckQueries from '../../../sdk/RandomDuckQueries';
import { queryClient } from '../../../utils/queryClient';

// TODO: UI between getting data and fetching image
export function RandomDuck() {
  const { data: duck, isFetching } = useQuery({ ...RandomDuckQueries.quack() });
  return (
    <div className="m-auto p-3 border border-gray-400 rounded-lg w-1/2 flex flex-col">
      {duck?.url && <img src={duck.url} className="w-full mb-2" />}
      <button
        className="primary"
        disabled={isFetching}
        onClick={() => queryClient.invalidateQueries(RandomDuckQueries.quack())}
      >
        Quack!
      </button>
    </div>
  );
}
