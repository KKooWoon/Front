import { raceType } from '@typings/race';
import React, { useState } from 'react';
import { ItemWrapper, ProfileWrapper, RegisterWrapper } from './race-list.style';

const RaceItem = ({
  item,
  isActive,
  styleType,
}: {
  item: raceType;
  isActive?: boolean;
  styleType: 'main' | 'register' | 'profile';
}) => {
  if (styleType === 'register') {
    return (
      <RegisterWrapper active={isActive}>
        <p>D-{item.Dday}</p>
        <h3>{item.raceName}</h3>
        <div>#{item.hashTag}</div>
      </RegisterWrapper>
    );
  }else if(styleType === 'profile'){
    return (
      <ProfileWrapper>
        <p>D-{item.Dday}</p>
        <h3>{item.raceName}</h3>
        <div>#{item.hashTag}</div>
      </ProfileWrapper>
    )
  }

  return (
    <ItemWrapper active={isActive}>
      <p>D-{item.Dday}</p>
      <h3>{item.raceName}</h3>
      <div>#{item.hashTag}</div>
    </ItemWrapper>
  );
};

export default RaceItem;
