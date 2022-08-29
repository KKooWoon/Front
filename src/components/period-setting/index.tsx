import React from 'react';
import { PeriodWrapper, Wrapper, ModifyDetailBtn, RepeatWrapper, PeriodInput } from './period-setting.style';

const PeriodSetting = () => {
  return (
    <Wrapper>
      <h1>기간 및 반복 설정</h1>
      <PeriodWrapper>
        <PeriodInput placeholder='YY.MM.DD' />
        <p>~</p>
        <PeriodInput placeholder='YY.MM.DD' />
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
    </Wrapper>
  );
};

export default PeriodSetting;
