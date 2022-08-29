import { USERINFO } from '@utils/constants';
import React, { useCallback, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Navigator from './navigator';
import { ButtonSection, ContentsWrapper, ImageSection, LayoutWrapper, NextButton } from './user-info.style';
import onBoadingText from '@assets/images/onboading-text.png';
import character from '@assets/images/character.png';
import Contents from './contents';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import onBoadingSlice from 'reducer/onboading';
import { signUpAPI } from '@apis/user';

const UserInfo = () => {
  const userInfo = USERINFO;
  const navigator = useNavigate();
  const [nowStep, setNowStep] = useState(0);

  const dispatch = useAppDispatch();
  const onBoadingState = useAppSelector(state => state.onboading);
  const { isActive, inputFocus } = onBoadingState;

  const NextStepHandler = useCallback(() => {
    setNowStep(prev => prev + 1);
    dispatch(onBoadingSlice.actions.setActive(false));
  }, [isActive, nowStep]);
  const SignUpHandler = async () => {
    const result = await signUpAPI({
      nickname: onBoadingState.nickname,
      age: onBoadingState.age,
      bodyFat: parseInt(onBoadingState.body_spec.fat as string),
      height:parseInt(onBoadingState.body_spec.height as string),
      kakaoId: onBoadingState.kakaoId,
      weight:parseInt(onBoadingState.body_spec.weight as string),
      skeletalMuscleMass: parseInt(onBoadingState.body_spec.muscle as string),
      keyword:onBoadingState.interest,
      profilePhotoUrl:onBoadingState.profilePhotoUrl,
    });
    const {accessToken, refreshToken, userInfoDto} = result;
    try{
      localStorage.setItem('token', accessToken);
      localStorage.setItem('myId', userInfoDto.accountId);
      navigator('/main');
    }catch(e){
      console.log('token Error');
    }
  };

  if (nowStep >= 4) {
    return (
      <LayoutWrapper>
        <ImageSection>
          <img src={onBoadingText} alt='onboading' />
          <div>
            <img src={character} alt='character' />
          </div>
        </ImageSection>
        <ButtonSection>
          <NextButton onClick={SignUpHandler}>시작하기</NextButton>
        </ButtonSection>
      </LayoutWrapper>
    );
  }
  return (
    <LayoutWrapper>
      <pre>{userInfo[nowStep].title}</pre>
      {userInfo[nowStep].subtitle && <pre>{userInfo[nowStep].subtitle}</pre>}
      <ContentsWrapper className={nowStep === 3 ? 'wide' : ''}>
        <Contents nowStep={nowStep} />
      </ContentsWrapper>
      {!inputFocus && (
        <ButtonSection>
          <Navigator nowStep={nowStep} />
          <NextButton onClick={NextStepHandler} disabled={!isActive}>
            다음으로
          </NextButton>
        </ButtonSection>
      )}
    </LayoutWrapper>
  );
};

export default UserInfo;
