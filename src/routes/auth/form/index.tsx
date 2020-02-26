import React, { Component } from 'react';
import { Input } from '../../../components/input';

export type FormValues = {
  name: string;
};

export type AuthFormProps = {
  handleSubmit: (formValues: FormValues) => void;
};

export class AuthForm extends Component<AuthFormProps, FormValues> {
  state = { name: '' };

  setformValuesForKey = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: event.target.value });

  saveEvent = () => {
    const { handleSubmit } = this.props;
    handleSubmit(this.state);
  };

  render() {
    const { name } = this.state;
    return (
      <div className="auth-form">
        <Input
          type="text"
          value={name}
          onChange={this.setformValuesForKey}
          // label="Name"
          placeholder="Type your name here..."
        />
        <button className="auth-form__submit" onClick={this.saveEvent}>
          Go in
        </button>
      </div>
    );
  }
}
