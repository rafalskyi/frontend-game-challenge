import { lazy } from 'react';

export const appRoutes = [
  {
    path: '/',
    isProtected: false,
    component: lazy(() => import('../routes/auth')),
  },
  {
    path: '/game',
    isProtected: true,
    component: lazy(() => import('../routes/game')),
  },
];
