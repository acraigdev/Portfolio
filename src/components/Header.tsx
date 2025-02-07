import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RouteData } from '../Router';

/**
 * TODO: popover menu on mobile once more links are added
 */
export function Header() {
  const { pathname } = useLocation();
  const [nameClass, setNameClass] = useState(
    pathname === '/' ? 'text-4xl lg:text-7xl' : 'text-4xl',
  );

  window.addEventListener('scroll', function () {
    if (
      document.documentElement.scrollTop > 50 ||
      document.body.scrollTop > 50
    ) {
      setNameClass('text-4xl');
    } else {
      setNameClass(pathname === '/' ? 'text-7xl' : 'text-4xl');
    }
  });
  return (
    <div className="bg-purple-dark text-white p-6 sticky top-0 w-full md:flex justify-between items-end z-1">
      <span
        className={`font-fancy transition-all duration-500 ease-in-out ${nameClass}`}
      >
        Alexandria Craig
      </span>
      <div>
        <HeaderLink route={RouteData.Home} />
        <HeaderLink route={RouteData.Work} />
        {/* <HeaderLink route={RouteData.Hobbies} />
        <HeaderLink route={RouteData.Projects} /> */}
        <HeaderLink route={RouteData.Contact} />
      </div>
    </div>
  );
}

function HeaderLink({
  route,
}: {
  route: (typeof RouteData)[keyof typeof RouteData];
}) {
  return (
    <Link
      to={route.path}
      className="pr-4 text-xl no-underline inverted font-header"
    >
      {route.title}
    </Link>
  );
}
