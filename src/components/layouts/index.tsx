import React, { ReactNode } from 'react';
import { LayoutWrapper } from './layout.style';

const AppLayout = ({children}:{children:ReactNode}) => {
  return (
    <LayoutWrapper>
      <article>
        {children}
      </article>
    </LayoutWrapper>
  )
}

export default AppLayout;