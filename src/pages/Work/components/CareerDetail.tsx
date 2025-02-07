import React from 'react';
import { Icons } from '../../../components/Icons';
import { useQuery } from '@tanstack/react-query';
import { CompanyDetails } from '../../../data/work';
import { SpaceBetween } from '../../../components/SpaceBetween';

interface CareerDetailProps {
  id: string;
  onReturn: () => void;
}

export function CareerDetail({ id, onReturn }: CareerDetailProps) {

  const { data: detail } = useQuery({
    queryKey: ['getCompanyDetails'],
    queryFn: () => CompanyDetails,
    select: (details => details.find((company) => company.id === id))
  });
  return (
    <>
      <button className='primary'><SpaceBetween size="sm" direction='horizontal'><Icons.Arrow
        onClick={() => onReturn()}
        className="size-5 cursor-pointer -rotate-90 inline-block"
      />Return</SpaceBetween></button>
      <h2>Details</h2>
      <h3>{detail?.name}</h3>
      <h4>{detail?.title}</h4>

    </>
  );
}
