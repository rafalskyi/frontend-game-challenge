import React from 'react';
import { Route, RouteProps, RouteComponentProps, Redirect } from 'react-router-dom';

// MODELS
import { UserI } from '../../store/users/model';

// CONSTANTS
import { AUTH_PAGE_PATH } from '../../routes/index';

// COMPONENTS
import { Layout } from '../layout';

interface ProtectedRouteProps extends RouteProps {
  isProtected: boolean;
  component: React.ComponentType<RouteComponentProps>;
  layoutConfig: object;
  currentUser: UserI;
}

export const RootProtectedRoute = ({
  component: Component,
  isProtected,
  path,
  exact,
  layoutConfig,
  currentUser,
}: ProtectedRouteProps) => {
  if (!isProtected) {
    return (
      <Route
        path={path}
        exact={exact}
        render={(props) => (
          <Layout {...layoutConfig}>
            <Component {...props} />
          </Layout>
        )}
      />
    );
  }

  if (!currentUser.name) {
    // alert('Pick a name first');
    return <Redirect to={AUTH_PAGE_PATH} />;
  }

  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => (
        <Layout {...layoutConfig}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};
