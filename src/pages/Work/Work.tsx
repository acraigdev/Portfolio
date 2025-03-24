import React, { useRef, useState } from 'react';
import { CareerPreview } from './components/CareerPreview';
import { ContentBox } from '../../components/ContentBox';
import { CompanyPreview } from '../../utils/dataTypes';
import { useQuery } from '@tanstack/react-query';
import { CareerDetail } from './components/CareerDetail';
import { Nullable } from '../../utils/typeHelpers';
import './style.css';
import { LayoutFrame } from '../../components/LayoutFrame';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Icons } from '../../components/Icons';
import { db } from '../..';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
/**
 * TODO: last item doesn't animate, custom implementation and add query param so back button works
 */
export function Work() {
  const [selectedCompany, setSelectedCompany] =
    useState<Nullable<string>>(null);

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

  const carousel = useRef<AliceCarousel>(null);

  return (
    <LayoutFrame>
      <ContentBox className="overflow-hidden" noPadding>
        <div className="relative min-h-105">
          <AliceCarousel
            ref={carousel}
            disableDotsControls
            disableButtonsControls
            items={[
              <div className="p-4 md:p-15">
                <h1>Work</h1>
                <p>
                  Select a company to view my work history or check out my
                  resume directly{' '}
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
                        setSelectedCompany(id);
                        carousel?.current?.slideNext();
                      }}
                      key={`preview-${company.id}`}
                    />
                  ))}
                </div>
              </div>,
              <div className="p-4 md:p-15">
                <CareerDetail
                  id={selectedCompany}
                  onReturn={() => {
                    carousel?.current?.slidePrev();
                    setSelectedCompany(null);
                  }}
                  key="detail"
                />
              </div>,
            ]}
          />
        </div>
      </ContentBox>
    </LayoutFrame>
  );
}
