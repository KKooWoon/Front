import ImageSlider from '@components/image-slider/inedx';
import { raceType } from '@typings/race';
import React, { Dispatch, SetStateAction } from 'react';
import RaceItem from './race-item';
import { NoResult, Wrapper } from './race-list.style';

interface Props {
  data: Array<raceType>;
  height: number;
  now?: number;
  setNow?: (v:number) => void;
  styleType?: 'main' | 'detail' | 'profile' | 'myrace';
  itemWidth?: number;
}

const RaceList = ({ data, height, now, setNow, styleType = 'main' }: Props) => {
  return (
    <Wrapper>
      <ImageSlider SliderHeight={height}>
        {data.map((v, i) => (
          <div key={i} onClick={() => setNow && setNow(v.raceId)}>
            <RaceItem item={v} isActive={now === v.raceId} styleType={styleType} />
          </div>
        ))}
      </ImageSlider>
    </Wrapper>
  );
};

export default RaceList;
