import React from 'react';
import { ButtonWrapper, SelectWrapper, SetInputWrapper, Wrapper } from './weight-category.style';

const Weight = () => {
  return (
    <Wrapper>
      <SelectWrapper>
        <p>종류</p>
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
        <h3>1세트</h3>
        <input placeholder='중량' />
        <p>kg</p>
        <input placeholder='개수' />
        <p>개</p>
      </SetInputWrapper>
      <ButtonWrapper>
        <button>삭제하기</button>
        <button>복제하기</button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Weight;
