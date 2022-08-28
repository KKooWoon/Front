import React, { useState } from 'react';
import styled from 'styled-components';
import CompleteRace from '@components/complete-race';
import { ReactComponent as CloseIcon } from '@assets/icons/close.svg';
import { useNavigate } from 'react-router-dom';

const CompleteRacePage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <CloseIcon stroke='#adacb1' onClick={() => navigate('/race')} />
      <CompleteRace />
      <CopyBtn>초대코드 복사하기</CopyBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0px 20px;
  & svg {
    margin-top: 30px;
    margin-bottom: 81px;
  }
`;

const CopyBtn = styled.button`
  width: 100%;
  height: 54px;
  background-color: #6732ff;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  border-radius: 20px;
  bottom: 151px;
`;

export default CompleteRacePage;
