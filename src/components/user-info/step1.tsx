import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import onBoadingSlice from 'reducer/onboading';
import { InputWrapper, NicknameInput } from './user-info.style';

const Step1 = () => {
  const [nickname, setNickname] = useState('');
  const isActive = useAppSelector(state => state.onboading.isActive);
  const dispatch = useAppDispatch();

  const onChangeNickname = useCallback(
    (e:ChangeEvent<HTMLInputElement>) => {
      setNickname(e.target.value);
      dispatch(onBoadingSlice.actions.setNickname(e.target.value));
    },
    [nickname]
  );
  useEffect(() => {
    if (nickname !== '' && !isActive) {
      dispatch(onBoadingSlice.actions.setActive(true));
    } else if (nickname === '' && isActive) {
      dispatch(onBoadingSlice.actions.setActive(false));
    }
  }, [nickname]);
  return (
    <InputWrapper>
      <NicknameInput value={nickname} onChange={onChangeNickname} maxLength={25} />
      <span>{nickname.length} / 25</span>
    </InputWrapper>
  );
};

export default Step1;
