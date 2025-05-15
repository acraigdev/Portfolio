import React from 'react';
import * as CatQueries from '../../../sdk/CatQueries';
import { useQuery } from '@tanstack/react-query';
import { queryClient } from '../../../utils/queryClient';
import { PawSpinner } from '../../../components/PawSpinner/PawSpinner';
import { SpaceBetween } from '../../../components/SpaceBetween';

// TODO:
// Typewriter effect for new facts
// count input
// CSS paw print new

export function CatFacts() {
  const { data: randomCat, isFetching } = useQuery({
    ...CatQueries.randomFacts({}),
  });

  if (isFetching)
    return <PawSpinner isLoading={isFetching} isDarkMode={true} />;
  return (
    <>
      <div className="relative w-full h-36">
        <div className="absolute z-20 text-center w-full mt-4 font-bold p-1 text-xl">
          {randomCat?.facts[0]}
        </div>
        <div className="absolute bg-white opacity-40 h-full w-full z-10"></div>
        <img
          src={randomCat?.image}
          className="w-full h-36 object-cover absolute"
        />
      </div>
      <button
        onClick={() =>
          queryClient.invalidateQueries(CatQueries.randomFacts({}))
        }
        className="primary flex items-center"
      >
        <span>Get new facts</span>
        <PawSpinner isLoading={false} className="small" />
      </button>
    </>
  );
}
