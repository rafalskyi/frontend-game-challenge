import * as React from 'react';
import { connect } from 'react-redux';

import './App.css';
import { IAppState, isAppStarted, appStartAction } from './getStore';

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
      <p>place your soultion here</p>
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
