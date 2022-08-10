import { raceType } from '@typings/race';
import React, { useState } from 'react';
import { ItemWrapper, ProfileWrapper, DetailWrapper } from './race-list.style';
import { ReactComponent as CompleteIcon } from '@assets/icons/complete.svg';

const RaceItem = ({
  item,
  isActive,
  styleType,
}: {
  item: raceType;
  isActive?: boolean;
  styleType: 'main' | 'detail' | 'profile';
}) => {
  if (styleType === 'detail') {
    return (
      <DetailWrapper active={isActive}>
        <p>D-{item.Dday}</p>
        <h3>{item.raceName}</h3>
        <div>#{item.hashTag}</div>
      </DetailWrapper>
    );
  } else if (styleType === 'profile') {
    return (
      <ProfileWrapper>
        <p>D-{item.Dday}</p>
        <h3>{item.raceName}</h3>
        <div>#{item.hashTag}</div>
      </ProfileWrapper>
    );
  }

  return (
    <ItemWrapper active={isActive}>
      <CompleteIcon />
      <p>D-{item.Dday}</p>
      <h3>{item.raceName}</h3>
      <div>#{item.hashTag}</div>
    </ItemWrapper>
  );
};

export default RaceItem;
