import React from 'react';

import './styles.scss';

export interface MainProps {}

export const Main: React.FC<MainProps> = ({ children }) => {
  return <main className="container">{children}</main>;
};
