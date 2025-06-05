import React, { Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ContentBox } from '../../components/ContentBox';
import { Dropdown } from '../../components/Dropdown';
import { Nullable } from '../../utils/typeHelpers';
import { SpaceBetween } from '../../components/SpaceBetween';
import { RandomDuck } from './components/RandomDuck';
import { CatFacts } from './components/CatFacts';
import { PokemonList } from './components/PokemonList';
import { VirtualizationContextProvider } from '../../components/VirtualizedList/VirtualizationContext';
import { SearchableUser } from './components/SearchableUser';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { PawSpinner } from '../../components/PawSpinner/PawSpinner';

// TODO: Dynamically build
const Project = {
  duck: 'duck',
  cat: 'cat',
  pokemon: 'pokemon',
  user: 'user',
} as const;
type Project = (typeof Project)[keyof typeof Project];

const ProjectLabels: Record<Project, string> = {
  duck: 'Random duck',
  cat: 'Cat facts',
  pokemon: 'Pokemon Virtualization',
  user: 'Searchable Dropdown',
};

export function Random() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedProject = searchParams.get('project')
    ? (searchParams.get('project') as Project)
    : null;
  return (
    <ContentBox>
      <SpaceBetween size="l">
        <Dropdown
          label="Select a project"
          items={Object.keys(Project).map(key => ({
            label: ProjectLabels[key as Project],
            value: key,
          }))}
          selected={selectedProject}
          onSelectionChange={item => setSearchParams({ project: String(item) })}
        />
        <ErrorBoundary>
          <Suspense
            fallback={<PawSpinner isLoading={true} isDarkMode={true} />}
          >
            <VirtualizationContextProvider
              root={document.getElementById('virtual-container')}
            >
              <div
                id="virtual-container"
                className="h-96 overflow-y-scroll w-full"
              >
                <SelectedProject project={selectedProject} />
              </div>
            </VirtualizationContextProvider>
          </Suspense>
        </ErrorBoundary>
      </SpaceBetween>
    </ContentBox>
  );
}

function SelectedProject({ project }: { project: Nullable<Project> }) {
  if (!project) return <></>;
  switch (project) {
    case Project.duck:
      return <RandomDuck />;
    case Project.cat:
      return <CatFacts />;
    case Project.pokemon:
      return <PokemonList />;
    case Project.user:
      return <SearchableUser />;
    default:
      return <></>;
  }
}
