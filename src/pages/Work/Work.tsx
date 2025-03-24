import React, { Suspense, useEffect, useRef, useState } from 'react';
import { CareerPreview } from './components/CareerPreview';
import { ContentBox } from '../../components/ContentBox';
import { CompanyPreview } from '../../utils/dataTypes';
import { useQuery } from '@tanstack/react-query';
import { CareerDetail } from './components/CareerDetail';
import './style.css';
import { LayoutFrame } from '../../components/LayoutFrame';
import { Icons } from '../../components/Icons';
import { db } from '../..';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { useSearchParams } from 'react-router-dom';
import { Nullable } from '../../utils/typeHelpers';

export function Work() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryCompany = searchParams.get('company')
    ? searchParams.get('company')
    : null;
  const [selectedCompany, setSelectedCompany] =
    useState<Nullable<string>>(queryCompany);

  const { data: companies } = useQuery({
    queryKey: ['getCareerPreview'],
    queryFn: () => {
      return getDocs(
        query(collection(db, 'careerPreview'), orderBy('startDate', 'desc')),
      );
    },
    select: res => {
      return res.docs.map(doc => doc.data()) as Array<CompanyPreview>;
    },
  });

  const previewRef = useRef<HTMLDivElement>(null);
  const previewHeight = previewRef.current?.clientHeight;
  const [detailHeight, setDetailHeight] = useState<Number>();

  return (
    <LayoutFrame>
      <ContentBox className="overflow-hidden" noPadding>
        <div className="flex">
          <div
            className={`grow-0 shrink-0 basis-full p-4 md:p-15 ${queryCompany ? 'right-to-left' : 'left-to-right'}`}
          >
            <div ref={previewRef}>
              <h1 className="mb-4">Work</h1>
              <p>
                Select a company to view my work history or check out my resume
                directly{' '}
                <a
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.google.com/document/d/e/2PACX-1vQMp13VDh3uL6MSRHrYXeTDu8Pl2miySH5rJjnEsgEAaKen-Pp0MkJoMXZFdL-QJ001wbNHSwLDx8hw/pub"
                >
                  here
                  <Icons.External className="size-4 inline ml-1" />
                </a>
              </p>
              <div className="mt-5 grid gap-2 md:grid-cols-3 md:gap-10">
                {companies?.map(company => (
                  <CareerPreview
                    company={company}
                    onLearnMore={id => {
                      window.scrollTo(0, 0);
                      setSearchParams({ company: id });
                      setSelectedCompany(id);
                    }}
                    key={`preview-${company.id}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div
            className={`grow-0 shrink-0 basis-full p-4 md:p-15 ${queryCompany ? 'right-to-left' : 'left-to-right'}`}
          >
            <div
              style={{
                transition: 'height 500ms linear',
                height: !queryCompany
                  ? `${previewHeight}px`
                  : `${detailHeight}px`,
              }}
            >
              <Suspense>
                {selectedCompany && (
                  <CareerDetail
                    id={selectedCompany}
                    onReturn={() => {
                      setSearchParams();
                      setTimeout(() => {
                        setSelectedCompany(null);
                      }, 1000);
                    }}
                    onDetailHeight={height => setDetailHeight(height ?? 0)}
                    detailHeight={detailHeight}
                    key="detail"
                  />
                )}
              </Suspense>
            </div>
          </div>
        </div>
      </ContentBox>
    </LayoutFrame>
  );
}
