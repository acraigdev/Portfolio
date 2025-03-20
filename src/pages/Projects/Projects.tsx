import React, { useState } from 'react';
import { LayoutFrame } from '../../components/LayoutFrame';
import { ContentBox } from '../../components/ContentBox';
import { SpaceBetween } from '../../components/SpaceBetween';
import {
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from 'firebase/firestore';
import { useQuery } from '@tanstack/react-query';
import { Demo, Project } from '../../utils/dataTypes';
import { db } from '../..';
import { Tag } from '../../components/Tag';
import { Icons } from '../../components/Icons';
import { Modal } from '../../components/Modal';
import { Nullable } from '../../utils/typeHelpers';

export function Projects() {
  const [selectedDemo, setSelectedDemo] = useState<Nullable<Demo>>(null);
  const likelyMobile = window.innerWidth < 1000 || window.innerHeight < 750;

  const { data: projects } = useQuery({
    queryKey: ['getProjects'],
    queryFn: () => {
      return getDocs(
        query(collection(db, 'projects'), orderBy('date', 'desc')),
      );
    },
    select: res => {
      return res.docs.map(doc => doc.data()) as Array<Project>;
    },
  });

  return (
    <LayoutFrame>
      <ContentBox>
        <SpaceBetween size="m">
          <h1 className="mb-4">Projects</h1>
          <p>
            A collection of personal development projects I've worked on over
            the years.
          </p>
          {projects?.map(project => (
            <ProjectSection
              key={project.title}
              {...project}
              onDemoClick={demo => setSelectedDemo(demo)}
            />
          ))}
        </SpaceBetween>
        {selectedDemo && (
          <Modal
            title={selectedDemo.title}
            onDismiss={() => setSelectedDemo(null)}
          >
            {selectedDemo.details && <p>{selectedDemo.details}</p>}
            {selectedDemo.url &&
              (likelyMobile ? (
                <SpaceBetween
                  direction="horizontal"
                  size="sm"
                  className="text-teal"
                  alignOverride="items-center"
                >
                  <Icons.Star className="size-6 md:size-8 inline-block" />
                  For the best experience, please visit this page on a larger
                  device.
                </SpaceBetween>
              ) : (
                <iframe
                  src={selectedDemo.url}
                  className="w-full aspect-video border border-gray-200"
                />
              ))}
            {selectedDemo.image && (
              <img
                className="w-full lg:w-1/2 h-full object-contain"
                src={`https://firebasestorage.googleapis.com/v0/b/acraigdev-8d7d6.firebasestorage.app/o/${selectedDemo.image}?alt=media`}
              />
            )}
          </Modal>
        )}
      </ContentBox>
    </LayoutFrame>
  );
}
function ProjectSection({
  title,
  code_url,
  demo,
  description,
  tech,
  onDemoClick,
}: Project & { onDemoClick: (demo: Demo) => void }) {
  return (
    <div className="rounded-lg border border-gray-200 p-5 shadow-sm sm:flex items-start justify-between gap-2 w-full">
      <div className="w-full sm:w-3/4">
        <h3 className="text-purple-dark font-bold">{title}</h3>
        <p>{description}</p>
        <div className="flex gap-2 flex-wrap w-full">
          {tech?.map(t => <Tag key={t} tag={t} />)}
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-2 sm:mt-0 sm:items-end">
        {code_url && (
          <a
            href={code_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Opens in a new tab"
            className="block"
          >
            <button className="secondary flex justify-center w-full sm:w-auto">
              <Icons.Code className="size-6 inline-block mr-2" />
              <span className="no-underline">Code</span>
            </button>
          </a>
        )}
        {demo?.url && (
          <button
            className="secondary flex justify-center"
            onClick={() => onDemoClick({ ...demo, title })}
          >
            <Icons.Demo className="size-6 inline-block mr-2" />
            <span>Demo</span>
          </button>
        )}
        {demo?.image && (
          <button
            className="secondary flex justify-center"
            onClick={() => onDemoClick({ ...demo, title })}
          >
            <Icons.Photo className="size-6 inline-block mr-2" />
            <span>Photo</span>
          </button>
        )}
      </div>
    </div>
  );
}
