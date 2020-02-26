import React from 'react';

import { Header } from './header';
import { Main } from './main';
import { Footer } from './footer';

export interface LayoutProps {
  isWithoutHeader?: boolean;
  isWithoutFooter?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, isWithoutFooter, isWithoutHeader }) => {
  return (
    <>
      {!isWithoutHeader && <Header />}
      <Main>{children}</Main>
      {!isWithoutFooter && <Footer />}
    </>
  );
};
