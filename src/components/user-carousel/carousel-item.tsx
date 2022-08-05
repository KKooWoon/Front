import ProfileImage from '@components/profile-imgae';
import React from 'react';
import { ItemWrapper } from './carousel.style';

const CarouselItem = ({nickname, url}:{ nickname:string, url:string|null}) => {
  return (
    <ItemWrapper>
      <ProfileImage url={url} alt='user_profile'/>
      <div>{nickname}</div>
    </ItemWrapper>
  )
}

export default CarouselItem;