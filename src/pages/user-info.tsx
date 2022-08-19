import UserInfo from '@components/user-info';
import { useAppDispatch } from '@hooks/redux-hooks';
import React from 'react';
import { useLocation } from 'react-router-dom';
import onBoadingSlice from 'reducer/onboading';

const UserInfoPage = () => {
  const { state } = useLocation();
  console.log(state);
  const dispatch = useAppDispatch();
  dispatch(onBoadingSlice.actions.setKakaoId(state));
  return <UserInfo />;
};

export default UserInfoPage;
