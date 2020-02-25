import React, { Suspense } from 'react';

import { Switch } from 'react-router-dom';

import './App.css';

import { appRoutes } from '..';
import { ProtectedRoute } from '../../components/protected-route';

// export interface RootAppProps {
//   started: boolean;
//   onStart: () => void;
// }

export const AppRoot = () => {
  return (
    <Suspense fallback={() => <div>loading...</div>}>
      <div className="app">
        <Switch>
          {appRoutes.map(({ path, isProtected, component }) => (
            <ProtectedRoute key={path} path={path} component={component} isProtected={isProtected} exact />
          ))}
        </Switch>
      </div>
    </Suspense>
  );
};

export default AppRoot;
