import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { GlobalStyle } from 'global.style';
import AppLayout from '@components/layouts';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>로딩 중 ...</div>}>
        <AppLayout>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </AppLayout>
      </Suspense>
    </QueryClientProvider>
  </BrowserRouter>
);
