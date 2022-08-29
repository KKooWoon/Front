import React from 'react';
import { Spinner, SpinnerWarpper } from './loading.style';

const LoadingSpinner = () => {
  return (
    <SpinnerWarpper>
      <Spinner></Spinner>
    </SpinnerWarpper>
  );
};

export default LoadingSpinner;
