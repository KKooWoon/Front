import React from 'react';
import { ButtonWrapper, Wrapper } from './register.style';
import Weight from '@components/weight-category';
import RaceList from '@components/race-list';

const Register = () => {
  return (
    <Wrapper>
      <h1>카테고리</h1>
      <ButtonWrapper>
        <button />
        <p>웨이트 트레이닝</p>
        <button />
        <p>유산소 운동</p>
        <button />
        <p>식단</p>
      </ButtonWrapper>
      <Weight />
      <h1>기간 및 반복 설정</h1>
    </Wrapper>
  );
};

export default Register;
