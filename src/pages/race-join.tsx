import RaceModal from '@components/modal/race-modal';
import { RaceHeader } from '@components/race-detail';
import useInput from '@hooks/use-input';
import useModal from '@hooks/use-modal';
import { raceType } from '@typings/race';
import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const RaceJoinPage = () => {
  const { state } = useLocation();
  const {isOpen, onClose, setIsOpen} = useModal();
  const [password, onChangePassword] = useInput('');
  const { Dday, hashTag, isPrivate, memberCount, raceId, raceName } = state as raceType;
  console.log(state);
  return (
    <JoinSection>
      <RaceHeader
        Dday={Dday}
        tag={hashTag}
        raceName={raceName}
        raceId={raceId}
        description='오늘은 어깨운동 하는 날'
        isJoin={true}
      />
      <ButtonSection>
        <div>총 {memberCount}명 참여 중</div>
        <button onClick={()=> setIsOpen(true)}>비밀번호 입력하기</button>
      </ButtonSection>
      {/* 참가 요청하는 api onClickHandler로 전달 해줘야함 */}
      <RaceModal show={isOpen} close={onClose} raceCode={password} onChangeRaceCode={onChangePassword} />
    </JoinSection>
  );
};

const JoinSection = styled.section`
  width: 100%;
  height: 100%;
  background-color: var(--primary-purple);
`;
const ButtonSection = styled.section`
  padding: 0px 20px;
  position:absolute;
  bottom:300px;
  width:100%;
  & div {
    color: var(--gray-02);
    font-size:16px;
    font-weight:400;
  }
  & button {
    width:100%;
    padding: 16px 0px;
    color: var(--primary-purple);
    border-radius:20px;
    background-color:var(--purple-sub01);
    border:none;
    margin-top:40px;
    :focus{
      outline:none;
    }
  }
`;

export default RaceJoinPage;
