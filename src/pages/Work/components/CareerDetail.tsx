import React from 'react';
import { Icons } from '../../../components/Icons';
import { useQuery } from '@tanstack/react-query';
import { CompanyDetails } from '../../../data/work';
import { SpaceBetween } from '../../../components/SpaceBetween';
import { KeyValueTable } from '../../../components/KeyValueTable';
import { getMonthYearOrCurrent } from '../../../utils/dates';
import { Tag } from '../../../components/Tag';

interface CareerDetailProps {
  id: string;
  onReturn: () => void;
}

export function CareerDetail({ id, onReturn }: CareerDetailProps) {
  const { data: detail } = useQuery({
    queryKey: ['getCompanyDetails'],
    queryFn: () => CompanyDetails,
    select: details => details.find(company => company.id === id),
  });

  if (!detail) {
    return (
      <SpaceBetween
        direction="horizontal"
        size="sm"
        className="text-red-700 w-full mt-4"
      >
        <Icons.Error className="size-6 md:size-8 inline-block" />
        Something went wrong getting the details.
      </SpaceBetween>
    );
  }
  return (
    <SpaceBetween size="m">
      <button className="primary" onClick={() => onReturn()}>
        <SpaceBetween size="sm" direction="horizontal">
          <Icons.Arrow className="size-5 cursor-pointer -rotate-90 inline-block" />
          Return
        </SpaceBetween>
      </button>
      <img
        src={require(`../../../assets/${detail.logo}`)}
        className="h-20 m-auto mt-8"
        aria-hidden
      />
      <div className="flex justify-center gap-3">
        {detail.languages?.map(lang => <Tag tag={lang} />)}
      </div>
      <KeyValueTable
        items={[
          {
            key: 'Company',
            value: detail.name,
          },
          {
            key: 'Title',
            value: detail.title,
          },
          {
            key: 'Start date',
            value: getMonthYearOrCurrent(detail.startDate),
          },
          {
            key: 'End date',
            value: getMonthYearOrCurrent(detail.endDate),
          },
        ]}
      />
      <h4>Details</h4>
      {detail.content.map(content => (
        <p>{content}</p>
      ))}
    </SpaceBetween>
  );
}
