import * as React from 'react';
import { connect } from 'react-redux';

import { Switch } from 'react-router-dom';

import './App.css';
import { IAppState, isAppStarted, appStartAction } from './getStore';

import { appRoutes } from './routes';
import { ProtectedRoute } from './components/ProtectedRoute';

export interface Props {
  started: boolean;
  onStart: () => void;
}

export const AppRoot: React.FC<Props> = ({ started, onStart }) => {
  React.useEffect(() => {
    onStart();
  }, [onStart]);

  if (!started) {
    return <span className="loading">Loading...</span>;
  }

  return (
    <div className="app">
      <Switch>
        {appRoutes.map(({ path, isProtected, component }) => (
          <ProtectedRoute path={path} component={component} isProtected={isProtected} exact />
        ))}
      </Switch>
    </div>
  );
};

export const mapStateToProps = (state: IAppState) => {
  const started = isAppStarted(state);
  return {
    started,
  };
};

export const mapDispatchToProps = {
  onStart: appStartAction,
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppRoot);
export default App;
