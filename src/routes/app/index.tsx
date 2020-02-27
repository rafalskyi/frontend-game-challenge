import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';

// MODELS
import { STORE } from '../../store/store.model';
import { UserI } from '../../store/users/model';

// COMPONENTS
import { appRoutes } from '..';
import { RootProtectedRoute } from '../../components/protected-route';

interface OwnProps {}

interface StoreProps {
  currentUser: UserI;
}

interface DispatchProps {}

type ROOT_PROPS = StoreProps & DispatchProps & OwnProps;

export const AppRoot = ({ currentUser }: ROOT_PROPS) => (
  <Suspense fallback={<div>loading...</div>}>
    <Switch>
      {appRoutes.map(({ path, isProtected, component, layoutConfig }) => (
        <RootProtectedRoute
          key={path}
          path={path}
          component={component}
          isProtected={isProtected}
          exact
          layoutConfig={layoutConfig}
          currentUser={currentUser}
        />
      ))}
    </Switch>
  </Suspense>
);

const mapStateToProps = (state: STORE): StoreProps => ({
  currentUser: state.users.currentUser,
});

export default connect<StoreProps, DispatchProps, OwnProps, STORE>(mapStateToProps)(AppRoot);
