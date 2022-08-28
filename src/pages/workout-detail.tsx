import ProfileImage from '@components/profile-imgae';
import { WorkoutDetailWrapper } from '@components/race-detail/race-detail.style';
import { WorkOut } from '@typings/workout';
import { SingleWorkout } from 'dummy';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const WorkOutDetailPage = () => {
  const { workoutId } = useParams();
  const {state} = useLocation();
  const {workout} = state as unknown as {date:string, workout:WorkOut};
  console.log(workoutId);
  return (
    <WorkoutDetailWrapper>
      <section>
        <div>
          <ProfileImage url={null} alt='profile_img' />
          <h3>{workout.nick_name}</h3>
        </div>
        <span>3분전</span>
      </section>
      <img src={workout.img_Url} alt='workout_img' />
      <p>{workout.message}</p>
    </WorkoutDetailWrapper>
  );
};

export default WorkOutDetailPage;
