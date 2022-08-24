import ProfileImage from '@components/profile-imgae';
import { WorkoutDetailWrapper } from '@components/race-detail/race-detail.style';
import { SingleWorkout } from 'dummy';
import React from 'react';
import { useParams } from 'react-router-dom';

const WorkOutDetailPage = () => {
  const { workoutId } = useParams();
  console.log(workoutId);
  /* workoutId로 단일 workout data 받아옴 */
  const workoutData = SingleWorkout;
  return (
    <WorkoutDetailWrapper>
      <section>
        <div>
          <ProfileImage url={null} alt='profile_img' />
          <h3>{workoutData.nick_name}</h3>
        </div>
        <span>3분전</span>
      </section>
      <img src={workoutData.img_Url} alt='workout_img' />
      <p>{workoutData.message}</p>
    </WorkoutDetailWrapper>
  );
};

export default WorkOutDetailPage;
