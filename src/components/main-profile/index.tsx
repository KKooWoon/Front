import React from 'react';
import { AlertWrapper, Balloon, Button, ImageWrapper, UserInfo, Wrapper } from './main.style';
import character from '@assets/images/character.png';
import EXPBar from './progress';
import { ReactComponent as ListIcon } from '@assets/icons/list.svg';
import {ReactComponent as AlertIcon} from '@assets/icons/alert.svg';

const MainProfile = () => {
  return (
    <Wrapper>
      <Balloon>
        <h1>6월 30일</h1>
        <span>다양한 레이스에 참여해 보세요!</span>
      </Balloon>
      <AlertWrapper>
        <AlertIcon />
      </AlertWrapper>
      <ImageWrapper>
        <img src={character} alt='character' />
      </ImageWrapper>
      <UserInfo>
        <h1>LV.1</h1>
        <EXPBar exp={50.3} />
        <p>달리는 닉네임</p>
      </UserInfo>
      <Button>
        <ListIcon />
        <span>도감보기</span>
      </Button>
    </Wrapper>
  );
};

export default MainProfile;
