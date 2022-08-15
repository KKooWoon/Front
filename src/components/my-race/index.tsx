import React, { useState } from 'react';
import { Wrapper, AddRaceBtn } from './my-race.style';
import RaceList from '@components/race-list';
import { raceType } from '@typings/race';
import { RaceListDummy } from 'dummy';
import { ReactComponent as AddRaceIcon } from '@assets/icons/add-race.svg';
import { useNavigate } from 'react-router-dom';

const MyRace = () => {
  const RaceData: Array<raceType> = RaceListDummy;
  const navigate = useNavigate();

  return (
    <Wrapper>
      <h1>진행 중인 레이스</h1>
      <AddRaceBtn onClick={() => navigate('/main')}>
        <AddRaceIcon />
        <p>레이스 생성하기</p>
      </AddRaceBtn>
      <h1>완료된 레이스</h1>
      <RaceList data={RaceData} height={115} styleType='myrace' />
    </Wrapper>
  );
};

export default MyRace;
