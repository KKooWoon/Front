import { calendarData } from '@typings/calendar';
import { cardio, diet, weight } from '@typings/workout';
import React from 'react';
import { Item, ListWrapper, WorkoutItemWrapper } from './custom-calendar.style';
interface Props {
  data: calendarData;
}
const WeightItem = ({ item }: { item: weight }) => {
  return (
    <WorkoutItemWrapper type='weight'>
      <div className='tile' />
      <h2>{item.name}</h2>
      <section>
        {item.weightSetList.map((v, i) => (
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
        {item.foodList.map((v, i) => (
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
  {/*데이터 리스트 배열형식으로 바껴야함 */}
  console.log('data : ', data);
  return (
    <ListWrapper>
      {data.weight && <WeightItem item={data.weight} />}
      {data.cardio && <CardioItem item={data.cardio} />}
      {data.diet && <DietItem item={data.diet} />}
    </ListWrapper>
  );
};

export default DatedWorkOut;
