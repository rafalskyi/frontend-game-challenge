import React, { lazy } from 'react';

export const appRoutes = [
  {
    path: '/',
    isProtected: false,
    component: () => <div>landing page</div>,
  },
  {
    path: '/auth',
    isProtected: false,
    component: lazy(() => import('../containers/auth-page')),
  },
  {
    path: '/game',
    isProtected: true,
    component: () => <div>game itself</div>,
  },
];
