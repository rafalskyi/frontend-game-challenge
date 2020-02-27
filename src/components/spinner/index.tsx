import React from 'react';

import loader from '../../assets/svg/35.gif';

import './style.scss';

export const Spinner = () => (
  <div className="spinner">
    <img src={loader} alt="loader" />
  </div>
);
