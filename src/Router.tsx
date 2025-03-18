import { createBrowserRouter } from 'react-router-dom';
import React, { createRef, lazy } from 'react';
import { AboutLazy } from './pages/About/AboutLazy';
import { WorkLazy } from './pages/Work/WorkLazy';
import { ContactLazy } from './pages/Contact/ContactLazy';
import { RandomLazy } from './pages/Random/RandomLazy';

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
  Random: {
    path: '/random',
    title: 'Random Projects',
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
  {
    path: RouteData.Random.path,
    element: <RandomLazy />,
  },
]);
