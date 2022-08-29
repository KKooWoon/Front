import React, { useState, Dispatch } from 'react';
import { ButtonWrapper, Wrapper } from './register.style';
import Weight from '@components/weight-category';
import Cardio from '@components/cardio-category';
import Diet from '@components/diet-category';
import styled from 'styled-components';
import PeriodSetting from '@components/period-setting';

interface RegisterProps {
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
  diet: {
    foodList: string[];
    name: string;
  };
  setDiet: React.Dispatch<
    React.SetStateAction<{
      foodList: string[];
      name: string;
    }>
  >;
}

const Register: React.FunctionComponent<RegisterProps> = ({ cardio, setCardio, diet, setDiet }) => {
  const [content, setContent] = useState();
  const [tab, setTab] = useState();

  const handleClickBtn = e => {
    const { name } = e.target;
    setContent(name);
    setTab(name);
  };

  const selectComponent = {
    weight: <Weight />,
    cardio: <Cardio cardio={cardio} setCardio={setCardio} />,
    diet: <Diet diet={diet} setDiet={setDiet} />,
  };
  return (
    <Wrapper>
      <h1>카테고리</h1>
      <ButtonWrapper>
        <button
          onClick={handleClickBtn}
          name='weight'
          style={tab == 'weight' ? { backgroundColor: '#6732ff', color: '#ffffff' } : {}}
        />
        <p>웨이트 트레이닝</p>
        <button
          onClick={handleClickBtn}
          name='cardio'
          style={tab == 'cardio' ? { backgroundColor: '#6732ff', color: '#ffffff' } : {}}
        />
        <p>유산소 운동</p>
        <button
          onClick={handleClickBtn}
          name='diet'
          style={tab == 'diet' ? { backgroundColor: '#6732ff', color: '#ffffff' } : {}}
        />
        <p>식단</p>
      </ButtonWrapper>
      {content ? selectComponent[content] : <Weight />}
      <PeriodSetting />
    </Wrapper>
  );
};

export default Register;
