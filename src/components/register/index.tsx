import React, { useState, Dispatch } from 'react';
import { ButtonWrapper, Wrapper } from './register.style';
import Weight from '@components/weight-category';
import Cardio from '@components/cardio-category';
import Food from '@components/diet-category';
import styled from 'styled-components';
import PeriodSetting from '@components/period-setting';

interface CardioProps {
  cardio: {
    calorie: number;
    name: string;
    hour: number;
    minute: number;
  };
  setCardio: Dispatch<
    React.SetStateAction<{
      calorie: number;
      name: string;
      hour: number;
      minute: number;
    }>
  >;
}

const Register: React.FunctionComponent<CardioProps> = ({ cardio, setCardio }) => {
  const [content, setContent] = useState();

  const handleClickBtn = e => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    weight: <Weight />,
    cardio: <Cardio cardio={cardio} setCardio={setCardio} />,
    food: <Food />,
  };
  return (
    <Wrapper>
      <h1>카테고리</h1>
      <ButtonWrapper>
        <button onClick={handleClickBtn} name='weight' />
        <p>웨이트 트레이닝</p>
        <button onClick={handleClickBtn} name='cardio' />
        <p>유산소 운동</p>
        <button onClick={handleClickBtn} name='food' />
        <p>식단</p>
      </ButtonWrapper>
      {content ? selectComponent[content] : <Weight />}
      <PeriodSetting />
    </Wrapper>
  );
};

export default Register;
