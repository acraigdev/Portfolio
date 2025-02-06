import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { Outlet, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

export function Home() {
  const { pathname } = useLocation();
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: pathname });
  }, [pathname]);
  return (
    <div className="h-dvw">
      <Header />
      <div className="my-4 md:my-8 mx-3 md:mx-auto lg:w-1/2 md:w-3/4">
        <Outlet />
      </div>
    </div>
  );
}
