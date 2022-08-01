import ImageSlider from '@components/image-slider/inedx';
import { raceType } from '@typings/race';
import { RaceListDummy } from 'dummy';
import React from 'react';
import RegisterItem from './register-item';
import { NoResult, Wrapper } from './register-race.style';

const RegisterList = () => {
  const RegisterList: Array<raceType> = RaceListDummy;
  return (
    <Wrapper>
      {RegisterList.length !== 0 ? (
        <ImageSlider SliderHeight={138}>
          {RegisterList.map((v, i) => (
            <RegisterItem key={i} item={v} />
          ))}
        </ImageSlider>
      ) : (
        <NoResult>참여 중인 레이스가 없습니다.</NoResult>
      )}
    </Wrapper>
  );
};

export default RegisterList;
