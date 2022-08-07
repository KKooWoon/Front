import React, { useState } from 'react';
import { ButtonWrapper, Wrapper } from './exercise-detail.style';
import PeriodSetting from '@components/period-setting';
import RaceList from '@components/race-list';
import { raceType } from '@typings/race';
import { RaceListDummy } from 'dummy';

const ExerciseDetail = () => {
  const RaceData: Array<raceType> = RaceListDummy;
  const [raceSelected, setRaceSelected] = useState(RaceData[0].raceId);

  return (
    <Wrapper>
      <ButtonWrapper>
        <button>오늘 운동 삭제하기</button>
        <button style={{ marginLeft: '13' }}>전체 운동 삭제하기</button>
      </ButtonWrapper>
      <h1>인증할 레이스</h1>
      <RaceList data={RaceData} height={115} now={raceSelected} setNow={setRaceSelected} styleType='detail' />
      <PeriodSetting />
    </Wrapper>
  );
};

export default ExerciseDetail;
