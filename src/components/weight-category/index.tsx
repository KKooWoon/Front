import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import onBoadingSlice from 'reducer/onboading';
import {
  ButtonWrapper,
  CategoryInput,
  InputWrapper,
  SelectWrapper,
  SetInputWrapper,
  Wrapper,
} from './weight-category.style';

const Weight = () => {
  const isActive = useAppSelector(state => state.onboading.isActive);
  const category = useAppSelector(state => state.onboading.nickname);
  const dispatch = useAppDispatch();

  const onChangeNickname = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(onBoadingSlice.actions.setNickname(e.target.value));
    },
    [category]
  );
  useEffect(() => {
    if (category !== '' && !isActive) {
      dispatch(onBoadingSlice.actions.setActive(true));
    } else if (category === '' && isActive) {
      dispatch(onBoadingSlice.actions.setActive(false));
    }
  }, [category]);

  return (
    <Wrapper>
      <p>종류</p>
      <InputWrapper>
        <CategoryInput placeholder='운동 종류를 입력해 주세요.' value={category} maxLength={25} />
        <span>{category.length} / 25</span>
      </InputWrapper>
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
