import React from 'react';
import { Icons } from '../../../components/Icons';
import { SpaceBetween } from '../../../components/SpaceBetween';
import { CompanyPreview } from '../../../utils/dataTypes';
import { getMonthYearOrCurrent } from '../../../utils/dates';

interface CareerPreviewProps {
  company: CompanyPreview;
  onLearnMore: (id: string) => void;
}

export function CareerPreview({ company, onLearnMore }: CareerPreviewProps) {
  return (
    <button
      className="border border-gray-200 rounded-lg hover:border-gray-400 flex flex-col justify-between"
      onClick={() => onLearnMore(company.id)}
    >
      <img
        src={require(`../../../assets/${company.logo}`)}
        className="h-14 m-auto mt-8"
        aria-hidden
      />
      <div className="p-6 w-full">
        <h3>{company.name}</h3>
        <h4 className="font-normal">{company.title}</h4>
        <i className="font-normal">
          {getMonthYearOrCurrent(company.startDate)} -{' '}
          {getMonthYearOrCurrent(company.endDate)}
        </i>
      </div>
      <div className="w-full bg-purple-dark block p-6 rounded-b-lg text-white">
        <SpaceBetween direction="horizontal" size="xs">
          Learn more <Icons.Arrow className="inline rotate-90 size-6" />
        </SpaceBetween>
      </div>
    </button>
  );
}
