import React, { useState } from 'react';
import { ButtonWrapper, Wrapper } from './register.style';
import Weight from '@components/weight-category';
import Aerobic from '@components/aerobic-category';
import Food from '@components/food-category';
import styled from 'styled-components';
import PeriodSetting from '@components/period-setting';

const Register = () => {
  const [content, setContent] = useState();

  const handleClickBtn = e => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    weight: <Weight />,
    aerobic: <Aerobic />,
    food: <Food />,
  };
  return (
    <Wrapper>
      <h1>카테고리</h1>
      <ButtonWrapper>
        <button onClick={handleClickBtn} name='weight' />
        <p>웨이트 트레이닝</p>
        <button onClick={handleClickBtn} name='aerobic' />
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
