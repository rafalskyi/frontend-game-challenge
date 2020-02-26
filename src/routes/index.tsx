import { lazy } from 'react';

export const AUTH_PAGE_PATH = '/';
export const GAME_PAGE_PATH = '/game';

export const appRoutes = [
  {
    path: AUTH_PAGE_PATH,
    isProtected: false,
    component: lazy(() => import('../routes/auth')),
    layoutConfig: {
      isWithoutFooter: true,
    },
  },
  {
    path: GAME_PAGE_PATH,
    isProtected: true,
    component: lazy(() => import('../routes/game')),
    layoutConfig: {
      isWithoutFooter: true,
    },
  },
];
