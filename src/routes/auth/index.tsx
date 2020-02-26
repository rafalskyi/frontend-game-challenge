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

// PROPS MODEL
export interface AuthPageProps extends RouteComponentProps {
  setUserName: Function;
}

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

const mapStateToProps = (state: STORE) => ({});

export default connect(mapStateToProps, { setUserName })(AuthPage);
