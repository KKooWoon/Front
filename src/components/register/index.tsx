import React from 'react';
import { Wrapper, RegisterWrapper, ButtonWrapper, WeightStartWrapper, WeightEndWrapper } from './register.style';

const Register = () => {
  return (
    <Wrapper>
      <span>챌린지에서 진행할 운동을 등록해보세요.</span>
      <RegisterWrapper>
        <title>제목</title>
        <input maxLength={25} />
        <title>카테고리</title>
        <ButtonWrapper>
          <button />
          <span>웨이트 트레이닝</span>
          <button />
          <span>유산소 운동</span>
          <button />
          <span>식단</span>
        </ButtonWrapper>
        <WeightStartWrapper>
          <span>1세트</span>
          <input placeholder='중량' />
          <span>kg</span>
          <input placeholder='개수' />
          <span>개</span>
        </WeightStartWrapper>
        <WeightEndWrapper>
          <button>복제하기</button>
          <button>추가하기</button>
        </WeightEndWrapper>
        <title>인증할 레이스</title>
        <title>기간 및 반복 설정</title>
      </RegisterWrapper>
    </Wrapper>
  );
};

export default Register;
