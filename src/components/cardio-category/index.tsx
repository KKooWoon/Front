import React, { useState, Dispatch } from 'react';
import { SetInputWrapper, Wrapper, InputWrapper, CategoryInput } from './cardio-category.style';

interface CardioProps {
  cardio: {
    calorie: number;
    name: string;
    hour: number;
    minute: number;
  };
  setCardio: Dispatch<
    React.SetStateAction<{
      calorie: number;
      name: string;
      hour: number;
      minute: number;
    }>
  >;
}

const Cardio: React.FunctionComponent<CardioProps> = ({ cardio, setCardio }) => {
  const [cardioName, setCardioName] = useState('');

  return (
    <Wrapper>
      <p>종류</p>
      <InputWrapper>
        <CategoryInput
          placeholder='운동 종류를 입력해 주세요.'
          maxLength={25}
          onChange={e => {
            setCardioName(e.target.value);
            setCardio({ ...cardio, name: e.target.value });
          }}
        />
        <span>{cardioName.length} / 25</span>
      </InputWrapper>
      <SetInputWrapper>
        <h1>시간</h1>
        <input onChange={e => setCardio({ ...cardio, hour: Number(e.target.value) })} />
        <p>시간</p>
        <input onChange={e => setCardio({ ...cardio, minute: Number(e.target.value) })} />
        <p>분</p>
      </SetInputWrapper>
    </Wrapper>
  );
};

export default Cardio;
