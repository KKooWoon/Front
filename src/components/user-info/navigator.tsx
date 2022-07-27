import React from 'react';
import { NaviWrapper } from './user-info.style';
interface Props {
  nowStep:number;
}
const Navigator = ({nowStep}:Props) => {
  return (
    <NaviWrapper>
      <div className={nowStep === 0 ? "active":""}/>
      <div className={nowStep === 1 ? "active":""}/>
      <div className={nowStep === 2 ? "active":""}/>
      <div className={nowStep === 3 ? "active":""}/>
    </NaviWrapper>
  )
}

export default Navigator;