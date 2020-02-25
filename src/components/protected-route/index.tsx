import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

export type ProtectedRouteProps = RouteProps & { isProtected: boolean };

function isPassAllowed() {
  // mock
  return true;
}

export const ProtectedRoute = ({ isProtected, ...routeProps }: ProtectedRouteProps) => {
  if (!isProtected) {
    return <Route {...routeProps} />;
  }

  if (!isPassAllowed()) {
    return null;
  }

  return <Route {...routeProps} />;
};
