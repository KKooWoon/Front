import { raceType } from '@typings/race';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ItemWrapper, HashTag } from './register-race.style';

const RaceItem = ({ item }: { item: raceType }) => {
  return (
    <ItemWrapper>
      <p>D-{item.Dday}</p>
      <h1>{item.raceName}</h1>
      <HashTag>#{item.hashTag}</HashTag>
    </ItemWrapper>
  );
};

export default RaceItem;
