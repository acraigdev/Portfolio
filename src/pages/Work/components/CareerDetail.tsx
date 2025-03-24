import React, { RefObject, useEffect, useRef } from 'react';
import { Icons } from '../../../components/Icons';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { Award, CompanyDetail, Promo } from '../../../utils/dataTypes';
import { SpaceBetween } from '../../../components/SpaceBetween';
import { KeyValueTable } from '../../../components/KeyValueTable';
import { getMonthYearOrCurrent } from '../../../utils/dates';
import { Tag } from '../../../components/Tag';
import { Maybe, Nullable } from '../../../utils/typeHelpers';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../..';

interface CareerDetailProps {
  id: Nullable<string>;
  onReturn: () => void;
  detailHeight: Maybe<Number>;
  onDetailHeight: (height: Maybe<Number>) => void;
}

export function CareerDetail({
  id,
  onReturn,
  detailHeight,
  onDetailHeight,
}: CareerDetailProps) {
  const detailRef = useRef<HTMLDivElement>(null);
  const { data: detail, isError } = useSuspenseQuery({
    queryKey: ['getCompanyDetails', id],
    queryFn: () => {
      return id ? getDoc(doc(db, 'careerDetail', id!)) : null;
    },
    select: details => details?.data() as CompanyDetail,
  });

  /** Pass up the height of the detail so we can animate the container shrinking since it needs pixels */
  useEffect(() => {
    if (detail && !detailHeight) {
      onDetailHeight(detailRef.current?.clientHeight);
    }
  }, [detail, detailRef]);

  if (isError) {
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
    <div ref={detailRef}>
      <SpaceBetween size="m">
        <button className="primary" onClick={() => onReturn()}>
          <SpaceBetween size="sm" direction="horizontal">
            <Icons.Arrow className="size-5 cursor-pointer -rotate-90 inline-block" />
            Return
          </SpaceBetween>
        </button>
        {detail?.logo && (
          <img
            src={require(`../../../assets/${detail.logo}`)}
            className="h-20 m-auto mt-8"
            aria-hidden
          />
        )}
        <div className="flex justify-center gap-3 flex-wrap w-full">
          {detail?.languages?.map(lang => <Tag key={lang} tag={lang} />)}
        </div>
        <KeyValueTable
          items={[
            {
              key: 'Company',
              value: detail?.name,
            },
            {
              key: 'Title',
              value: detail?.title,
            },
            {
              key: 'Start date',
              value: getMonthYearOrCurrent(detail?.startDate),
            },
            {
              key: 'End date',
              value: getMonthYearOrCurrent(detail?.endDate),
            },
          ]}
        />
        <h4 className="font-bold text-purple-dark">Details</h4>
        <ul className="list-disc list-inside">
          {detail?.content.map((content, i) => (
            <li key={i} className="mb-3">
              <span className="font-body">{content}</span>
            </li>
          ))}
        </ul>
        <h4 className="font-bold text-purple-dark">Recognition</h4>
        {detail?.recognition?.map(rec => (
          <AwardDetail key={rec.title} {...rec} />
        ))}
        <h4 className="font-bold text-purple-dark">Promotion History</h4>
        {detail?.promotion?.map(promo => (
          <PromoDetail key={promo.title} {...promo} />
        ))}
      </SpaceBetween>
    </div>
  );
}

function AwardDetail({ date, title, details }: Award) {
  return (
    <div className="flex gap-4 items-center">
      <Icons.Trophy className="size-6" />
      <SpaceBetween size="xs" className="w-4/5">
        <h5>
          {title} - <i>{getMonthYearOrCurrent(date)}</i>
        </h5>
        {details}
      </SpaceBetween>
    </div>
  );
}

function PromoDetail({ startDate, endDate, title }: Promo) {
  return (
    <div>
      <h5>{title}</h5>
      <i>
        {getMonthYearOrCurrent(startDate)} - {getMonthYearOrCurrent(endDate)}
      </i>
    </div>
  );
}
