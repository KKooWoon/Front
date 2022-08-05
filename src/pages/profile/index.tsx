import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AddPeople } from '@assets/icons/add-people.svg';
import { useNavigate } from 'react-router-dom';
import { MyInfo, RaceListDummy, WorkOutListDummy } from 'dummy';
import { GridWrapper, PageWrapper, SlideSection, UserInfoSection } from './profile.style';
import { BodySpec, MyProfile } from '@components/profile';
import RaceList from '@components/race-list';

const ProfilePage = () => {
  const navigate = useNavigate();
  /* 벡엔드에서 불러와야 하는 데이터 */
  const UserData = MyInfo;
  const RaceData = RaceListDummy;
  const WorkOutData = WorkOutListDummy;

  return (
    <PageWrapper>
      <AddPeople className='icon' onClick={() => navigate('/search')} />
      <UserInfoSection>
        <MyProfile
          nickname={UserData.nick_name}
          imgUrl={UserData.profile_img}
          message={UserData.status_message}
          tag={UserData.interest}
        />
        <GridWrapper>
          <h3>캐릭터</h3>
          <h3>팔로워</h3>
          <h3>팔로잉</h3>
          <span>LV.{UserData.level}</span>
          <span>{UserData.follower_list.length}</span>
          <span>{UserData.following_list.length}</span>
        </GridWrapper>
        <BodySpec
          age={UserData.age}
          fat={UserData.bodyfat_pct}
          height={UserData.height}
          weight={UserData.weight}
          muscle={UserData.skeletal_muscle_mass}
        />
      </UserInfoSection>
      <SlideSection>
        <h2>최근 운동 기록</h2>
        <h2>참영 중인 챌린지</h2>
        <RaceList data={RaceData} height={115} />
      </SlideSection>
    </PageWrapper>
  );
};

export default ProfilePage;
