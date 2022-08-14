import { calendarData } from '@typings/calendar';
import { cardio, diet, weight } from '@typings/workout';
import React from 'react';
interface Props {
  data:calendarData
}
const DatedWorkOut = ({data}:Props) => {
  console.log('data : ', data);
  return (
    <div>
      운동리스트
    </div>
  )
}

export default DatedWorkOut;