import React from 'react';

export const appRoutes = [
  {
    path: '/',
    isProtected: false,
    component: () => <div>landing page</div>,
  },
  {
    path: '/auth',
    isProtected: false,
    component: () => <div>auth</div>,
  },
  {
    path: '/game',
    isProtected: true,
    component: () => <div>game itself</div>,
  },
];
