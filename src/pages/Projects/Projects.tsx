import React, { useState } from 'react';
import { LayoutFrame } from '../../components/LayoutFrame';
import { ContentBox } from '../../components/ContentBox';
import { SpaceBetween } from '../../components/SpaceBetween';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { useQuery } from '@tanstack/react-query';
import { Demo, Project } from '../../utils/dataTypes';
import { db } from '../..';
import { Tag } from '../../components/Tag';
import { Icons } from '../../components/Icons';
import { Modal } from '../../components/Modal';
import { Nullable } from '../../utils/typeHelpers';

export function Projects() {
  const [selectedDemo, setSelectedDemo] = useState<Nullable<Demo>>(null);
  const likelyMobile = window.innerWidth < 768;

  const { data: projectColumns } = useQuery({
    queryKey: ['getProjects'],
    queryFn: () => {
      return getDocs(
        query(collection(db, 'projects'), orderBy('date', 'desc')),
      );
    },
    select: res => {
      const projects = res.docs.map(doc => doc.data()) as Array<Project>;
      return projects.reduce(
        (acc, p, i) => {
          const index = i % 2;
          acc[index].push(p);
          return acc;
        },
        [[], []] as Array<Project[]>,
      );
    },
  });

  return (
    <LayoutFrame>
      <ContentBox>
        <SpaceBetween size="m">
          <div>
            <h1 className="mb-4">Projects</h1>
            <p>
              A collection of personal development projects I've worked on over
              the years.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[...Array(2)].fill('').map((_, i) => (
              <div className="flex flex-col gap-6" key={i}>
                {(projectColumns?.[i] ?? []).map(project => (
                  <ProjectSection
                    key={project.title}
                    {...project}
                    onDemoClick={demo => setSelectedDemo(demo)}
                  />
                ))}
              </div>
            ))}
          </div>
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
    <div className="rounded-lg border border-gray-200 p-5">
      <SpaceBetween size="xs">
        <h3 className="text-purple-dark font-bold">{title}</h3>
        <p>{description}</p>
        <div className="flex gap-1 flex-wrap w-full">
          {tech?.map(t => <Tag key={t} tag={t} />)}
        </div>
        <div className="border-t border-gray-200 w-full my-3"></div>
        <div className="flex gap-4 items-center justify-center w-full">
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
      </SpaceBetween>
    </div>
  );
}
