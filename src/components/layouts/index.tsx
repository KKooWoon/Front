import { layoutHeader, pageLayout } from '@typings/layout';
import React, { ReactNode } from 'react';
import BackButton from './back-button';
import Header from './header';
import { LayoutWrapper } from './layout.style';
import NavBar from './navbar';
interface Props {
  children:ReactNode;
  header?: layoutHeader;
  noNav?:boolean;
  hasBack?:boolean,
}


const AppLayout = ({ children, header, noNav, hasBack }: Props) => {
  return (
    <LayoutWrapper>
      {header && <Header />}
      {hasBack && <BackButton />}
      <main style={{ height: '100%', paddingTop: header && '60px', paddingBottom: !noNav ? '60px' : '0' }}>{children}</main>
      {!noNav && <NavBar />}
    </LayoutWrapper>
  );
};

export default AppLayout;
