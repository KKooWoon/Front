import React from 'react';
import { ProgressWrapper } from './main.style';

const EXPBar = ({exp}:{exp:number}) => {
  return (
    <ProgressWrapper>
      <div style={{width:`${exp}%`}} />
    </ProgressWrapper>
  )
}

export default EXPBar;