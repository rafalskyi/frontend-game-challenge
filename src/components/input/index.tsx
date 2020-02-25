import React from 'react';

export type InputProps = {
  type: string;
  value: string;
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ type, value, onChange, label }: InputProps) => (
  <>
    {label && <label>{label}</label>}
    <input type={type} value={value} onChange={onChange} />
  </>
);
