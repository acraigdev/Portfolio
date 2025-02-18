import React, { useRef, useState } from 'react';
import { CareerPreview } from './components/CareerPreview';
import { ContentBox } from '../../components/ContentBox';
import { CompanyPreviews } from '../../data/work';
import { useQuery } from '@tanstack/react-query';
import { CareerDetail } from './components/CareerDetail';
import { Nullable } from '../../utils/typeHelpers';
import './style.css';
import { LayoutFrame } from '../../components/LayoutFrame';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

/**
 * TODO: Hover cuts off, more space between items
 */
export function Work() {
  const [selectedCompany, setSelectedCompany] =
    useState<Nullable<string>>('aws');
  const { data: companies } = useQuery({
    queryKey: ['getCareerPreview'],
    queryFn: () => CompanyPreviews,
  });

  const carousel = useRef<AliceCarousel>(null);

  //https://docs.google.com/document/d/e/2PACX-1vQMp13VDh3uL6MSRHrYXeTDu8Pl2miySH5rJjnEsgEAaKen-Pp0MkJoMXZFdL-QJ001wbNHSwLDx8hw/pub

  return (
    <LayoutFrame>
      <ContentBox className="overflow-hidden">
        <div className="relative min-h-105 duration-300">
          <AliceCarousel
            mouseTracking
            ref={carousel}
            disableDotsControls
            disableButtonsControls
            items={[
              <div>
                <h1 className="mb-10 inline-block">Work</h1>
                <div className="grid gap-2 md:grid-cols-3 md:gap-6">
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
              <div>
                <CareerDetail
                  id={selectedCompany}
                  onReturn={() => {
                    carousel?.current?.slidePrev();
                  }}
                  key="detail"
                />
              </div>,
            ]}
          ></AliceCarousel>
        </div>
      </ContentBox>
    </LayoutFrame>
  );
}
