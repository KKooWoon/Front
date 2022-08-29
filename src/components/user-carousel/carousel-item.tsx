import ProfileImage from '@components/profile-imgae';
import React from 'react';
import { ItemWrapper } from './carousel.style';

const CarouselItem = ({ nickname, url, isActive }: { nickname: string; url: string | null; isActive: boolean }) => {
  return (
    <ItemWrapper active={isActive}>
      <ProfileImage url={url} alt='user_profile' />
      <div>{nickname}</div>
    </ItemWrapper>
  );
};

export default CarouselItem;
