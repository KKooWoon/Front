import React from 'react';
import { BackButtonWrapper } from './layout.style';
import { ReactComponent as BackButtonIcon } from '@assets/icons/back.svg';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <BackButtonWrapper onClick={()=> navigate(-1)}>
      <BackButtonIcon />
    </BackButtonWrapper>
  );
};

export default BackButton;
