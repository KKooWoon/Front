import React from 'react';
import { SelectWrapper, SetInputWrapper, Wrapper } from './aerobic-category.style';

const Weight = () => {
  return (
    <Wrapper>
      <SelectWrapper>
        <h1>종류</h1>
        <select required>
          <option value='' disabled selected hidden>
            선택
          </option>
          <option value='a'>a</option>
          <option value='b'>b</option>
          <option value='c'>c</option>
          <option value='d'>d</option>
        </select>
      </SelectWrapper>
      <SetInputWrapper>
        <h1>시간</h1>
        <input />
        <p>시간</p>
        <input />
        <p>분</p>
      </SetInputWrapper>
    </Wrapper>
  );
};

export default Weight;
