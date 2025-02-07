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
    <div>
      <Header />
      <div
        className="my-4 md:my-8 mx-3 md:mx-auto xl:w-1/2 lg:w-3/4"
        key={pathname}
      >
        <Outlet />
      </div>
    </div>
  );
}
