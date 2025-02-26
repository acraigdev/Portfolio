import React, { ReactNode, useEffect } from 'react';
import { Header } from '../components/Header';
import { useLocation, useMatches } from 'react-router-dom';
import ReactGA from 'react-ga4';

export function LayoutFrame({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const route = useMatches()[0]?.handle;
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: route?.path });
    if (route?.title) document.title = `ACraig - ${route.title}`;
  }, [route]);
  return (
    <div>
      <Header />
      <div
        className="my-4 md:my-8 mx-3 md:mx-auto xl:w-2/3 lg:w-3/4"
        key={pathname}
      >
        {children}
      </div>
    </div>
  );
}
