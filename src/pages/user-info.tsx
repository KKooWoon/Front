import UserInfo from '@components/user-info';
import { useAppDispatch } from '@hooks/redux-hooks';
import React from 'react';
import { useLocation } from 'react-router-dom';
import onBoadingSlice from 'reducer/onboading';

const UserInfoPage = () => {
  const { state } = useLocation();
  const {kakaoId, profilePhotoUrl} = state as unknown as {
    kakaoId: string,
    profilePhotoUrl:string
  };
  const dispatch = useAppDispatch();
  dispatch(onBoadingSlice.actions.setKakaoId(kakaoId));
  dispatch(onBoadingSlice.actions.setProfileImgae(profilePhotoUrl));
  return <UserInfo />;
};

export default UserInfoPage;
