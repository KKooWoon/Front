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
      {header && <Header title={header.title} />}
      {hasBack && <BackButton />}
      <main style={{ height: '100%', paddingTop: header && '67px', paddingBottom: !noNav ? '67px' : '0' }}>{children}</main>
      {!noNav && <NavBar />}
    </LayoutWrapper>
  );
};

export default AppLayout;
