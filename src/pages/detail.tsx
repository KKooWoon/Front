import FollowButton from '@components/follow-button/inex';
import { BodySpec, MyProfile } from '@components/profile';
import RaceList from '@components/race-list';
import PreviewWorkOut from '@components/workout-list/workout-preview';
import { MyInfo, RaceListDummy, WorkOutListDummy } from 'dummy';
import React, { useCallback, useState } from 'react';
import { PageWrapper, SlideSection, UserInfoSection } from './profile/profile.style';

const ProfileDetail = () => {
  /* 벡엔드에서 불러와야 하는 데이터 */
  const UserData = MyInfo;
  const RaceData = RaceListDummy;
  const WorkOutData = WorkOutListDummy;

  /* 팔로우 상태를 어떻게 알아낼지 논의 해봐야함 */
  const [isFollow, setIsFollow] = useState(false);
  const followHandler = useCallback(() => {
    setIsFollow(prev => !prev);
  }, []);

  return (
    <PageWrapper>
      <UserInfoSection>
        <MyProfile
          nickname={UserData.nick_name}
          imgUrl={UserData.profile_img}
          message={UserData.status_message}
          tag={UserData.interest}
        />
        <div style={{ marginTop: '20px' }} />
        <BodySpec
          age={UserData.age}
          fat={UserData.bodyfat_pct}
          height={UserData.height}
          weight={UserData.weight}
          muscle={UserData.skeletal_muscle_mass}
        />
        <FollowButton width='100%' padding='15px 0px' isFollow={isFollow} onClickHandler={followHandler} />
      </UserInfoSection>
      <SlideSection>
        <h2>최근 운동 기록</h2>
        <PreviewWorkOut data={WorkOutData} />
        <h2 style={{ marginTop: '18px' }}>참영 중인 챌린지</h2>
        <RaceList data={RaceData} height={115} styleType='profile' />
      </SlideSection>
    </PageWrapper>
  );
};

export default ProfileDetail;
