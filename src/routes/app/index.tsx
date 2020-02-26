import React, { Suspense } from 'react';

import { Switch } from 'react-router-dom';

// import './App.css';

import { appRoutes } from '..';
import { ProtectedRoute } from '../../components/protected-route';

export const AppRoot = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        {appRoutes.map(({ path, isProtected, component, layoutConfig }) => (
          <ProtectedRoute
            key={path}
            path={path}
            component={component}
            isProtected={isProtected}
            exact
            layoutConfig={layoutConfig}
          />
        ))}
      </Switch>
    </Suspense>
  );
};

export default AppRoot;
