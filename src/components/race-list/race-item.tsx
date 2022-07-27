import { raceType } from '@typings/race';
import React, { useState } from 'react';
import { ItemWrapper } from './race-list.style';

const RaceItem = ({item}:{item:raceType}) => {
  return (
    <ItemWrapper >{item.raceName}</ItemWrapper>
  )
}

export default RaceItem;