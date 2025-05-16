import React from 'react';
import { Link } from 'react-router-dom';
import { RouteData } from '../Router';

/**
 * TODO: popover menu on mobile once more links are added
 */
export function Header() {
  return (
    <div className="bg-purple-dark text-white p-6 sticky top-0 w-full md:flex justify-between items-end z-1">
      <div
        className={`font-fancy transition-all duration-500 ease-in-out text-5xl lg:text-7xl`}
      >
        Alexandria Craig
      </div>
      <div>
        <HeaderLink route={RouteData.Home} />
        <HeaderLink route={RouteData.Work} />
        {/* <HeaderLink route={RouteData.Hobbies} /> */}
        <HeaderLink route={RouteData.Projects} />
        <HeaderLink route={RouteData.Contact} />
      </div>
      <a
        href="https://www.linkedin.com/in/alexandria-craig-77982410b/"
        className="absolute top-2 right-2"
        aria-label="Visit my LinkedIn profile"
      >
        <img
          src={require(`../assets/linkedin.svg`)}
          className="size-6"
          alt="LinkedIn"
        />
      </a>
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
