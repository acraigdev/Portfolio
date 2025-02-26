import { createBrowserRouter } from 'react-router-dom';
import React, { createRef } from 'react';
import { AboutLazy } from './pages/About/AboutLazy';
import { WorkLazy } from './pages/Work/WorkLazy';
import { ContactLazy } from './pages/Contact/ContactLazy';

export const RouteData = {
  Home: {
    path: '/',
    title: 'Home',
    ref: createRef<HTMLDivElement>(),
  },
  About: {
    path: '/about',
    title: 'About',
    ref: createRef<HTMLDivElement>(),
  },
  Work: {
    path: '/work',
    title: 'Work',
    ref: createRef<HTMLDivElement>(),
  },
  // Hobbies: {
  //   path: '/hobbies',
  //   title: 'Hobbies',
  // },
  // Projects: {
  //   path: '/projects',
  //   title: 'Projects',
  // },
  Contact: {
    path: '/contact',
    title: 'Contact',
    ref: createRef<HTMLDivElement>(),
  },
};

export const router = createBrowserRouter([
  {
    path: RouteData.Home.path,
    handle: RouteData.About,
    element: <AboutLazy />,
  },
  {
    path: RouteData.Work.path,
    handle: RouteData.Work,
    element: <WorkLazy />,
  },
  // {
  //   path: RouteData.Hobbies.path,
  //   handle: RouteData.Hobbies,
  // },
  // {
  //   path: RouteData.Projects.path,
  //   handle: RouteData.Projects,
  // },
  {
    path: RouteData.Contact.path,
    handle: RouteData.Contact,
    element: <ContactLazy />,
  },
]);
