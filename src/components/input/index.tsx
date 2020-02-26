import React from 'react';

import './styles.scss';

export type InputProps = {
  type: string;
  value: string;
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export const Input = ({ type, value, onChange, label, ...props }: InputProps) => (
  <div className="input">
    {label && <label className="input__label">{label}</label>}
    <input className="input__field" type={type} value={value} onChange={onChange} {...props} />
  </div>
);
