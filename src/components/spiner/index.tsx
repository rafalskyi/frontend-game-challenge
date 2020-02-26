import React from 'react';

import loader from '../../assets/svg/35.gif';

import './style.scss';

export const Spiner = () => (
  <div className="spiner">
    <img src={loader} alt="loader" />
  </div>
);
