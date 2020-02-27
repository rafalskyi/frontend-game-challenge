import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

// STYLES
import './styles.scss';

// CONSTANTS
import { GAME_PAGE_PATH } from '../../routes/index';

// COMPONENTS
import { AuthForm, FormValues } from './form';

// DEPENDENT MODELS
import { STORE } from '../../store/store.model';

// ACTION CREATORS
import { setUserName } from '../../store/users/action-creators';

interface OwnProps {}

interface StoreProps {}

interface DispatchProps {
  setUserName: Function;
}

type AuthPageProps = RouteComponentProps & OwnProps & StoreProps & DispatchProps;

export const AuthPage = ({ setUserName, history }: AuthPageProps) => {
  const handleSubmit = (formValues: FormValues) => {
    setUserName(formValues);
    history.push(GAME_PAGE_PATH);
  };

  return (
    <div className="auth-page">
      <AuthForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default connect<StoreProps, DispatchProps, OwnProps, STORE>(null, { setUserName })(AuthPage);
