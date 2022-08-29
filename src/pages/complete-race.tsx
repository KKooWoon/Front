import React, { useState } from 'react';
import styled from 'styled-components';
import CompleteRace from '@components/complete-race';
import { ReactComponent as CloseIcon } from '@assets/icons/close.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import { AlertModal } from '@components/modal';
import useModal from '@hooks/use-modal';

const CompleteRacePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen: CopyRaceCodePwd, onClose: CopyRaceCodePwdClose, setIsOpen: setCopyRaceCodePwd } = useModal();
  const { isOpen: CopyRaceCode, onClose: CopyRaceCodeClose, setIsOpen: setCopyRaceCode } = useModal();
  const state = location.state as { raceCode: string; racePassword: string };
  const raceResponse = {
    raceCode: state.raceCode,
    racePassword: state.racePassword,
  };

  return (
    <Wrapper>
      <CloseIcon stroke='#adacb1' onClick={() => navigate('/race')} />
      <CompleteRace raceResponse={raceResponse} />
      {raceResponse.racePassword ? (
        <CopyBtn
          onClick={() => {
            navigator.clipboard.writeText(raceResponse.racePassword);
            setCopyRaceCodePwd(true);
          }}
        >
          초대코드 및 비밀번호 복사하기
        </CopyBtn>
      ) : (
        <CopyBtn
          onClick={() => {
            navigator.clipboard.writeText(raceResponse.raceCode);
            setCopyRaceCode(true);
          }}
        >
          초대코드 복사하기
        </CopyBtn>
      )}
      <AlertModal
        show={CopyRaceCodePwd}
        close={CopyRaceCodePwdClose}
        message={`코드 및 비밀번호 복사가 완료되었습니다.`}
      />
      <AlertModal show={CopyRaceCode} close={CopyRaceCodeClose} message={`코드 복사가 완료되었습니다.`} />
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
  margin-bottom: 151px;
`;

export default CompleteRacePage;
