import { calendarData } from '@typings/calendar';
import { cardio, diet, weight, WorkOutList } from '@typings/workout';
import React from 'react';
import { Item, ListWrapper, WorkoutItemWrapper } from './custom-calendar.style';
interface Props {
  data: WorkOutList;
}
const WeightItem = ({ item }: { item: weight }) => {
  return (
    <WorkoutItemWrapper type='weight'>
      <div className='tile' />
      <h2>{item.name}</h2>
      <section>
        {item.weightSetDtoList.map((v, i) => (
          <div key={i}>
            <Item>
              <h4>{v.sett}</h4>
              <span>세트</span>
            </Item>
            <Item>
              <h4>{v.setWeight}</h4>
              <span>kg</span>
            </Item>
            <Item>
              <h4>{v.reps}</h4>
              <span>회</span>
            </Item>
          </div>
        ))}
      </section>
    </WorkoutItemWrapper>
  );
};
const CardioItem = ({ item }: { item: cardio }) => {
  return (
    <WorkoutItemWrapper type='cardio'>
      <div className='tile' />
      <h2>{item.name}</h2>
      <section>
        {item.duration && (
          <div>
            <Item>
              <h4>{item.duration}</h4>
              <span>시간</span>
            </Item>
          </div>
        )}
      </section>
    </WorkoutItemWrapper>
  );
};
const DietItem = ({ item }: { item: diet }) => {
  return (
    <WorkoutItemWrapper type='diet'>
      <div className='tile' />
      <h2>{item.name}</h2>
      <section>
        {item.foodDtoList.map((v, i) => (
          <div key={i}>
            <Item>
              <h4>{v.name}</h4>
            </Item>
            {v.weight && (
              <Item>
                <h4>{v.weight}</h4> <span>g</span>
              </Item>
            )}
            {v.calorie && (
              <Item>
                <h4>{v.calorie}</h4> <span>kcal</span>
              </Item>
            )}
          </div>
        ))}
      </section>
    </WorkoutItemWrapper>
  );
};
const DatedWorkOut = ({ data }: Props) => {
  return (
    <ListWrapper>
      {data.weightList.length !== 0 && data.weightList.map((v,i)=> <WeightItem key={i} item={v} />) }
      {data.cardioList.length !== 0 && data.cardioList.map((v,i)=> <CardioItem key={i} item={v} />)}
      {data.dietList.length !== 0 && data.dietList.map((v,i)=> <DietItem key={i} item={v} />)}
    </ListWrapper>
  );
};

export default DatedWorkOut;
