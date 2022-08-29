import React, { useState } from 'react';
import {
  ButtonWrapper,
  SelectWrapper,
  SetInputWrapper,
  Wrapper,
  InputWrapper,
  CategoryInput,
} from './diet-category.style';

interface DietProps {
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

const Diet: React.FunctionComponent<DietProps> = ({ diet, setDiet }) => {
  const [dietName, setDietName] = useState('');
  return (
    <Wrapper>
      <h1>식단 이름</h1>
      <InputWrapper>
        <CategoryInput
          placeholder='식당 명을 입력해 주세요.'
          maxLength={25}
          onChange={e => {
            setDietName(e.target.value);
          }}
        />
        <span>{dietName.length} / 25</span>
      </InputWrapper>
      {diet.foodList.map((food, i) => (
        <div key={food}>
          <h1>세부 식단</h1>
          <SelectWrapper>
            <h1>식품</h1>
            <input placeholder='식품의 종류를 입력하세요' onChange={e => (diet.foodList[i] = e.target.value)} />
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
            <button onClick={() => setDiet({ ...diet, foodList: diet.foodList.splice(i, 1) })}>삭제하기</button>
            <button onClick={() => setDiet({ ...diet, foodList: diet.foodList.concat('') })}>추가하기</button>
          </ButtonWrapper>
        </div>
      ))}
    </Wrapper>
  );
};

export default Diet;
//onChange={e => diet.foodList.concat(e.target.value)}
