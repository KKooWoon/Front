import AppLayout from '@components/layouts';
import useLayout from '@hooks/use-layout';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactQueryDevtools } from "react-query/devtools";

const GlobalLayout = () => {
const {header, noNav, hasBack} = useLayout();

  return (
    <AppLayout {...{header, noNav, hasBack}}>
      <Suspense fallback={<div>로딩 중....</div>}>
        <Outlet />
        <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
      </Suspense>
    </AppLayout>
  );
};

export default GlobalLayout;
