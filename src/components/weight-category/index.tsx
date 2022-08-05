import React from 'react';
import { ButtonWrapper, SelectWrapper, SetInputWrapper, Wrapper } from './weight-category.style';

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
        <h1>1세트</h1>
        <input placeholder='중량' />
        <h1>kg</h1>
        <input placeholder='개수' />
        <h1>개</h1>
      </SetInputWrapper>
      <ButtonWrapper>
        <button>삭제하기</button>
        <button>복제하기</button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Weight;
