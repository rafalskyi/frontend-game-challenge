import React from 'react';
import { connect } from 'react-redux';

// COMPONENTS
import { AuthForm, FormValues } from './form';

// DEPENDENT MODELS
import { STORE } from '../../store/store.model';
import { UserI } from '../../entities/User';

// ACTION CREATORS
import { setUserName } from '../../store/users/action-creators';

// PROPS MODEL
export type AuthPageProps = {
  currentUser: UserI;
  setUserName: Function;
};

const AuthPage = ({ currentUser, setUserName }: AuthPageProps) => {
  const handleSubmit = (formValues: FormValues) => {
    setUserName(formValues);
  };

  return <AuthForm handleSubmit={handleSubmit} />;
};

const mapStateToProps = (state: STORE) => ({
  currentUser: state.users.currentUser,
});
const mapDispatchToProps = {
  setUserName,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);