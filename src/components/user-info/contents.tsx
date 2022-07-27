import React from 'react';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
interface Props {
  nowStep: number;
}
const Contents = ({ nowStep }: Props) => {
  if (nowStep === 0) {
    return <Step1 />;
  } else if (nowStep === 1) {
    return <Step2 />;
  } else if (nowStep === 2) {
    return <Step3 />;
  } else {
    return <Step4 />;
  }
};

export default Contents;
