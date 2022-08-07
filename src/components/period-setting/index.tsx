import React from 'react';
import { PeriodWrapper, Wrapper, ModifyDetailBtn, RepeatWrapper } from './period-setting.style';

const PeriodSetting = () => {
  return (
    <Wrapper>
      <h1>기간 및 반복 설정</h1>
      <PeriodWrapper>
        <button>2022.07.01</button>
        <p>~</p>
        <button>2022.07.30</button>
      </PeriodWrapper>
      <RepeatWrapper>
        <button>월</button>
        <button>화</button>
        <button>수</button>
        <button>목</button>
        <button>금</button>
        <button>토</button>
        <button>일</button>
      </RepeatWrapper>
      <ModifyDetailBtn>세부 수정하기</ModifyDetailBtn>
    </Wrapper>
  );
};

export default PeriodSetting;
