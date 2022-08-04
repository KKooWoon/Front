import React from 'react';
import { BodySpecWrapper, FatAndMuscle } from './profile.style';
interface Props {
  weight: number;
  height: number;
  age: number;
  fat?: number;
  muscle?: number;
}
const BodySpec = ({ weight, height, age, fat, muscle }: Props) => {
  return (
    <BodySpecWrapper>
      <section>
        <h3>키</h3>
        <h3>체중</h3>
        <h3>연령대</h3>
        <span>{height}cm</span>
        <span>{weight}kg</span>
        <span>{age}대</span>
      </section>
      <hr />
      <FatAndMuscle>
        <div>
          <h3>체지방률</h3>
          <span>{fat ? fat : '00'}%</span>
        </div>
        <div>
          <h3>골격근량</h3>
          <span>{muscle ? muscle : '00'}%</span>
        </div>
      </FatAndMuscle>
    </BodySpecWrapper>
  );
};

export default BodySpec;
