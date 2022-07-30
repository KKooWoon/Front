import ImageSlider from '@components/image-slider/inedx';
import { raceType } from '@typings/race';
import { RaceListDummy } from 'dummy';
import React from 'react';
import RaceItem from './race-item';
import { NoResult, CustomButton, Wrapper } from './race-list.style';

const RaceList = () => {
  const isData = true;
  const RaceList: Array<raceType> = RaceListDummy;
  return (
    <Wrapper>
      {RaceList.length !== 0 ? (
        <ImageSlider SliderHeight={115}>
          {RaceList.map((v, i) => (
            <RaceItem key={i} item={v} />
          ))}
        </ImageSlider>
      ) : (
        <NoResult>참여 중인 레이스가 없습니다.</NoResult>
      )}
      <CustomButton>
        {RaceList.length === 0 ? <span>레이스 참여 하러가기</span> : <span>이 레이스에 운동 인증하기</span>}
      </CustomButton>
    </Wrapper>
  );
};

export default RaceList;
