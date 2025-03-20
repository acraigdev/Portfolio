import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import * as RandomDuckQueries from '../../../sdk/RandomDuckQueries';
import { queryClient } from '../../../utils/queryClient';

// TODO: UI between getting data and fetching image
export function RandomDuck() {
  const { data: duck, isFetching } = useQuery({ ...RandomDuckQueries.quack() });
  const [imgLoading, setImgLoading] = useState(true);
  return (
    <div className="m-auto p-3 border border-gray-400 rounded-lg w-full lg:w-1/2 flex flex-col">
      {(imgLoading || isFetching) && <div className="loader m-auto my-5"></div>}
      {duck?.url && (
        <img
          src={duck.url}
          className={`w-full mb-2 ${imgLoading ? 'hidden' : 'block'}`}
          onLoad={() => setImgLoading(false)}
        />
      )}
      <button
        className="primary"
        disabled={isFetching}
        onClick={() => {
          queryClient.invalidateQueries(RandomDuckQueries.quack());
          setImgLoading(true);
        }}
      >
        Quack!
      </button>
    </div>
  );
}
