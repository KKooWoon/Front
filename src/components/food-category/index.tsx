import React from 'react';
import { ButtonWrapper, SelectWrapper, SetInputWrapper, Wrapper, FoodInput } from './food-category.style';

const Weight = () => {
  return (
    <Wrapper>
      <h1>식단 이름</h1>
      <FoodInput placeholder='식품 명을 입력해주세요.' maxLength={25} />
      <h1>세부 식단</h1>
      <SelectWrapper>
        <h1>식품</h1>
        <input placeholder='식품의 종류를 입력하세요' />
      </SelectWrapper>
      <SetInputWrapper>
        <h1>양</h1>
        <input />
        <p>g</p>
        <h1>칼로리</h1>
        <input />
        <h1>kcal</h1>
      </SetInputWrapper>
      <ButtonWrapper>
        <button>삭제하기</button>
        <button>추가하기</button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Weight;
