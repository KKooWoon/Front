import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AddPeople } from '@assets/icons/add-people.svg';
import { useNavigate } from 'react-router-dom';
import { MyInfo, RaceListDummy, WorkOutListDummy } from 'dummy';
import { GridWrapper, PageWrapper, SlideSection, UserInfoSection } from './profile.style';
import { BodySpec, MyProfile } from '@components/profile';
import RaceList from '@components/race-list';
import { PreViewWorkOut } from '@components/workout-list';
import { getMyInfo } from '@apis/user';

const ProfilePage = () => {
  const myId = localStorage.getItem('myId');
  const { data: userInfo, isLoading: infoLoading } = getMyInfo(myId!);
  const navigate = useNavigate();
  /* 벡엔드에서 불러와야 하는 데이터 */
  const UserData = MyInfo;
  const RaceData = RaceListDummy;
  const WorkOutData = WorkOutListDummy;
  
  if(infoLoading || !userInfo) return null;
  return (
    <PageWrapper>
      <AddPeople className='icon' onClick={() => navigate('/search')} />
      <UserInfoSection>
        <MyProfile
          nickname={userInfo.nickname}
          imgUrl={null}
          message={userInfo.description}
          tag={"다이어트"}
        />
        <GridWrapper onClick={()=> navigate('/follow')}>
          <h3>캐릭터</h3>
          <h3>팔로워</h3>
          <h3>팔로잉</h3>
          <span>LV.{userInfo.level}</span>
          <span>{UserData.follower_list.length}</span>
          <span>{UserData.following_list.length}</span>
        </GridWrapper>
        <BodySpec
          age={userInfo.age}
          fat={userInfo.bodyFat}
          height={userInfo.height}
          weight={userInfo.weight}
          muscle={userInfo.skeletalMuscleMass}
        />
      </UserInfoSection>
      <SlideSection>
        <h2>최근 운동 기록</h2>
        <PreViewWorkOut data={WorkOutData} />
        <h2 style={{marginTop:"18px"}}>참여 중인 챌린지</h2>
        <RaceList data={RaceData} height={115} styleType='profile'/>
      </SlideSection>
    </PageWrapper>
  );
};

export default ProfilePage;
