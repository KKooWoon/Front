import React from 'react';
import { AlertWrapper, Balloon, Button, ImageWrapper, UserInfo, Wrapper } from './main.style';
import character from '@assets/images/character.png';
import EXPBar from './progress';
import { ReactComponent as ListIcon } from '@assets/icons/list.svg';
import {ReactComponent as AlertIcon} from '@assets/icons/alert.svg';
import dayjs from 'dayjs';
interface Props {
  nickname:string;
  level:number;
  exp:number;
}
const MainProfile = ({nickname, level, exp}:Props) => {
  return (
    <Wrapper>
      <Balloon>
        <h1>{`${dayjs().get('month')+1}월 ${dayjs().get('date')}일`}</h1>
        <span>다양한 레이스에 참여해 보세요!</span>
      </Balloon>
      <AlertWrapper>
        <AlertIcon />
      </AlertWrapper>
      <ImageWrapper>
        <img src={character} alt='character' />
      </ImageWrapper>
      <UserInfo>
        <h1>LV.{level}</h1>
        <EXPBar exp={exp} />
        <p>{nickname}</p>
      </UserInfo>
      <Button>
        <ListIcon />
        <span>도감보기</span>
      </Button>
    </Wrapper>
  );
};

export default MainProfile;
