import React, { useRef, useState } from 'react';
import { CareerPreview } from './components/CareerPreview';
import { SpaceBetween } from '../../components/SpaceBetween';
import { ContentBox } from '../../components/ContentBox';
import { CompanyPreviews } from '../../data/work';
import { useQuery } from '@tanstack/react-query';
import { CareerDetail } from './components/CareerDetail';
import { Nullable } from '../../utils/typeHelpers';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css';

export function Work() {
  const [selectedCompany, setSelectedCompany] =
    useState<Nullable<string>>(null);
  const { data: companies } = useQuery({
    queryKey: ['getCareerPreview'],
    queryFn: () => CompanyPreviews,
  });

  const previewRef = useRef(null);
  const detailRef = useRef(null);
  const currentRef = !selectedCompany ? previewRef : detailRef;

  //https://docs.google.com/document/d/e/2PACX-1vQMp13VDh3uL6MSRHrYXeTDu8Pl2miySH5rJjnEsgEAaKen-Pp0MkJoMXZFdL-QJ001wbNHSwLDx8hw/pub

  return (
    <ContentBox>
      <SpaceBetween size="l">
        <h1 className="mb-3">Work</h1>
        <div className="relative min-h-75">
          <TransitionGroup
            // https://stackoverflow.com/a/70408067
            childFactory={child =>
              React.cloneElement(child, {
                // @ts-ignore
                classNames: Boolean(selectedCompany)
                  ? 'right-to-left'
                  : 'left-to-right',
              })
            }
          >
            <CSSTransition
              key={selectedCompany}
              nodeRef={currentRef}
              timeout={1000}
              unmountOnExit
              classNames={'right-to-left'}
            >
              {!selectedCompany ? (
                <div className="flex justify-between w-full" ref={currentRef}>
                  {companies?.map(company => (
                    <CareerPreview
                      company={company}
                      onLearnMore={id => setSelectedCompany(id)}
                      key={`preview-${company.id}`}
                    />
                  ))}
                </div>
              ) : (
                <div className="w-full" ref={currentRef}>
                  <CareerDetail
                    id={selectedCompany}
                    onReturn={() => setSelectedCompany(null)}
                    key="detail"
                  />
                </div>
              )}
            </CSSTransition>
          </TransitionGroup>
        </div>
      </SpaceBetween>
    </ContentBox>
  );
}
