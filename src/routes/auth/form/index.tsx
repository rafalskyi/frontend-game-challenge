import React, { useState } from 'react';
import { Input } from '../../../components/input';

export type FormValues = {
  name: string;
};

export type AuthFormProps = {
  handleSubmit: (formValues: FormValues) => void;
};

export const AuthForm = ({ handleSubmit }: AuthFormProps) => {
  const [formValues, setformValues] = useState<FormValues>({
    name: '',
  });

  const setformValuesForKey = (key: string) => (event: React.ChangeEvent<HTMLInputElement>) =>
    setformValues({
      ...formValues,
      [key]: event.target.value,
    });

  const innerHandleSubmitWrapper = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(formValues);
  };

  return (
    <form onSubmit={innerHandleSubmitWrapper}>
      <Input type="text" value={formValues['name']} onChange={setformValuesForKey('name')} label="Name" />
      <button type="submit">Go in</button>
    </form>
  );
};
