import React from 'react';
import { ItemWrapper } from './carousel.style';

const CarouselItem = ({nickname, url}:{ nickname:string, url:string}) => {
  return (
    <ItemWrapper>
      <img src={url} alt='user_profile'/>
      <div>{nickname}</div>
    </ItemWrapper>
  )
}

export default CarouselItem;