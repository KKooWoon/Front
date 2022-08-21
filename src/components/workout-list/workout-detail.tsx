import { DetailItem, WorkoutItem, Wrapper } from '@components/race-list/race-list.style';
import { cardio, diet, weight, WorkOutList } from '@typings/workout';
import React, { ReactNode } from 'react';
import { ReactComponent as EditIcon } from '@assets/icons/edit.svg';
interface Props {
  data: WorkOutList;
  isMe: boolean;
}

const ItemContainer = ({
  children,
  type,
  title,
  isMe,
}: {
  children: ReactNode;
  type: 'weight' | 'cardio' | 'diet';
  title: string;
  isMe: boolean;
}) => {
  return (
    <WorkoutItem type={type}>
      <section className='title-section'>
        <h3>{title}</h3>
        {isMe && <EditIcon />}
      </section>
      <section className='list-section'>{children}</section>
    </WorkoutItem>
  );
};

const WeightItem = ({ data, isMe }: { data: weight; isMe: boolean }) => {
  return (
    <ItemContainer type='weight' isMe={isMe} title={data.name}>
      {data.weightSetDtoList.map((v, i) => (
        <DetailItem key={i}>
          <span>
            {v.sett} <span>세트</span>
          </span>
          <span>
            {v.setWeight} <span>kg</span>
          </span>
          <span>
            {v.reps} <span>회</span>
          </span>
        </DetailItem>
      ))}
    </ItemContainer>
  );
};

const DietItem = ({ data, isMe }: { data: diet; isMe: boolean }) => {
  return (
    <ItemContainer type='diet' isMe={isMe} title={data.name}>
      {data.foodDtoList.map((v, i) => (
        <DetailItem key={i}>
          <span>{v.name}</span>
          {v.weight && (
            <span>
              {v.weight} <span>g</span>
            </span>
          )}
          {v.calorie && (
            <span>
              {v.calorie} <span>kcal</span>
            </span>
          )}
        </DetailItem>
      ))}
    </ItemContainer>
  );
};

const CardioItem = ({ data, isMe }: { data: cardio; isMe: boolean }) => {
  return (
    <ItemContainer type='cardio' isMe={isMe} title={data.name}>
      <DetailItem >
        <span>{data.name}</span>
        {data.duration && (
          <span>
            {data.duration} <span>시간</span>
          </span>
        )}
        {data.calorie && (
          <span>
            {data.calorie} <span>kcal</span>
          </span>
        )}
      </DetailItem>
    </ItemContainer>
  );
};

const WorkOutDetailList = ({ data, isMe }: Props) => {
  const { weightList, cardioList, dietList } = data;
  return (
    <Wrapper>
      {weightList.length !== 0 && (
        <div style={{ marginBottom: 20 }}>
          <h4>웨이트 운동</h4>
          {weightList.map((v, i) => (
            <WeightItem key={i} data={v} isMe={isMe} />
          ))}
        </div>
      )}
      {cardioList.length !== 0 && (
        <div style={{ marginBottom: 20 }}>
          <h4>유산소 운동</h4>
          {cardioList.map((v, i) => (
            <CardioItem key={i} data={v} isMe={isMe} />
          ))}
        </div>
      )}
      {dietList.length !== 0 && (
        <div style={{ marginBottom: 20 }}>
          <h4>식단 운동</h4>
          {dietList.map((v, i) => (
            <DietItem key={i} data={v} isMe={isMe} />
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default WorkOutDetailList;
