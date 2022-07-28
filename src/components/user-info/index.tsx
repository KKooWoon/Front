import { USERINFO } from '@utils/constants';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigator from './navigator';
import { ButtonSection, ContentsWrapper, ImageSection, LayoutWrapper, NextButton } from './user-info.style';
import onBoadingText from '@assets/images/onboading-text.png';
import character from '@assets/images/character.png';
import Contents from './contents';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import onBoadingSlice from 'reducer/onboading';

const UserInfo = () => {
  const userInfo = USERINFO;
  const navigator = useNavigate();
  const [nowStep, setNowStep] = useState(0);

  const dispatch = useAppDispatch();
  const isActive = useAppSelector(state => state.onboading.isActive);

  const NextStepHandler = useCallback(() => {
    setNowStep(prev => prev + 1);
    dispatch(onBoadingSlice.actions.setActive(false));
  }, [isActive, nowStep]);

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
          <NextButton onClick={() => navigator('/main')}>시작하기</NextButton>
        </ButtonSection>
      </LayoutWrapper>
    );
  }
  return (
    <LayoutWrapper>
      <pre>{userInfo[nowStep].title}</pre>
      {userInfo[nowStep].subtitle && <pre>{userInfo[nowStep].subtitle}</pre>}
      <ContentsWrapper>
        <Contents nowStep={nowStep} />
      </ContentsWrapper>
      <ButtonSection>
        <Navigator nowStep={nowStep} />
        <NextButton onClick={NextStepHandler} disabled={!isActive}>
          다음으로
        </NextButton>
      </ButtonSection>
    </LayoutWrapper>
  );
};

export default UserInfo;
