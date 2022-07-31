import React from 'react';
import { Background, ImageWrapper, InnerBox, OutterBox } from './splash.style';
import character from '@assets/images/character.png';
import slogan from '@assets/images/splash-text.png';

const Splash = () => {
  return (
    <Background>
      <OutterBox>
        <InnerBox />
      </OutterBox>
      <ImageWrapper>
        <img src={character} alt='charactor' />
        <img src={slogan} alt='slogan' />
      </ImageWrapper>
    </Background>
  );
};

export default Splash;
