import { raceType } from '@typings/race';
import React, { useState } from 'react';
import { ItemWrapper, ProfileWrapper, DetailWrapper, MyRaceWrapper } from './race-list.style';
import { ReactComponent as CompleteIcon } from '@assets/icons/complete.svg';

const RaceItem = ({
  item,
  isActive,
  styleType,
}: {
  item: raceType;
  isActive?: boolean;
  styleType: 'main' | 'detail' | 'profile' | 'myrace';
}) => {
  if (styleType === 'detail') {
    return (
      <DetailWrapper active={isActive}>
        <p>D-{item.Dday}</p>
        <section className='wrapper'>
          <h3>{item.raceName}</h3>
          <div>#{item.hashTag}</div>
        </section>
      </DetailWrapper>
    );
  } else if (styleType === 'profile') {
    return (
      <ProfileWrapper>
        <p>D-{item.Dday}</p>
        <section className='wrapper'>
          <h3>{item.raceName}</h3>
          <div>#{item.hashTag}</div>
        </section>
      </ProfileWrapper>
    );
  } else if (styleType === 'myrace') {
    return (
      <MyRaceWrapper>
        <p>D-{item.Dday}</p>
        <h3>{item.raceName}</h3>
        <div>#{item.hashTag}</div>
      </MyRaceWrapper>
    );
  }

  return (
    <ItemWrapper active={isActive}>
      <CompleteIcon />
      <p>D-{item.Dday}</p>
      <section className='wrapper'>
        <h3>{item.raceName}</h3>
        <div>#{item.hashTag}</div>
      </section>
    </ItemWrapper>
  );
};

export default RaceItem;
