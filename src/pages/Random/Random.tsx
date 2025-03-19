import React, { useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { LayoutFrame } from '../../components/LayoutFrame';
import { ContentBox } from '../../components/ContentBox';
import { Dropdown } from '../../components/Dropdown';
import { Maybe, Nullable } from '../../utils/typeHelpers';
import { SpaceBetween } from '../../components/SpaceBetween';
import { RandomDuck } from './components/RandomDuck';
import { CatFacts } from './components/CatFacts';

// TODO: Dynamically build
const Project = {
  duck: 'duck',
  cat: 'cat',
} as const;
type Project = (typeof Project)[keyof typeof Project];

const ProjectLabels: Record<Project, string> = {
  duck: 'Random duck',
  cat: 'Cat facts',
};

export function Random() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedProject = searchParams.get('project')
    ? (searchParams.get('project') as Project)
    : null;
  return (
    <LayoutFrame>
      <ContentBox>
        <SpaceBetween size="l">
          <Dropdown
            label="Select a project"
            items={Object.keys(Project).map(key => ({
              label: ProjectLabels[key as Project],
              value: key,
            }))}
            selected={selectedProject}
            onSelectionChange={item =>
              setSearchParams({ project: String(item) })
            }
          />
          <SelectedProject project={selectedProject} />
        </SpaceBetween>
      </ContentBox>
    </LayoutFrame>
  );
}

function SelectedProject({ project }: { project: Nullable<Project> }) {
  if (!project) return <></>;
  switch (project) {
    case Project.duck:
      return <RandomDuck />;
    case Project.cat:
      return <CatFacts />;
    default:
      return <></>;
  }
}
