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
    <div className="p-8 border border-gray-200 rounded-lg hover:border-gray-400 flex flex-col justify-between items-center">
      <img
        src={require(`../../../assets/${company.logo}`)}
        className="h-14 m-auto"
        aria-hidden
      />
      <div className="p-6 w-full text-center">
        <h3>{company.name}</h3>
        <h4 className="font-normal">{company.title}</h4>
        <i className="font-normal">
          {getMonthYearOrCurrent(company.startDate)} -{' '}
          {getMonthYearOrCurrent(company.endDate)}
        </i>
      </div>
      <button className="primary" onClick={() => onLearnMore(company.id)}>
        <SpaceBetween direction="horizontal" size="xs">
          Learn more
        </SpaceBetween>
      </button>
    </div>
  );
}
