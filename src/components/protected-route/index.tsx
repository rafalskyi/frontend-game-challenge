import React from 'react';
import { Route, RouteProps, RouteComponentProps } from 'react-router-dom';

// export type ProtectedRouteProps = RouteProps & { isProtected: boolean };
interface ProtectedRouteProps extends RouteProps {
  isProtected: boolean;
  component: React.ComponentType<RouteComponentProps>;
}

function isPassAllowed() {
  // mock
  return true;
}

export const ProtectedRoute = ({ component: Component, isProtected, path, exact }: ProtectedRouteProps) => {
  if (!isProtected) {
    return <Route path={path} exact={exact} render={(props) => <Component {...props} />} />;
  }

  if (!isPassAllowed()) {
    return null;
  }

  return <Route path={path} exact={exact} render={(props) => <Component {...props} />} />;
};
