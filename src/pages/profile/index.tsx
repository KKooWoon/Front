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
import { getFollowerList, getFollowList } from '@apis/follow';
import { getRaceList } from '@apis/race';

const ProfilePage = () => {
  const myId = localStorage.getItem('myId');
  const { data: userInfo, isLoading: infoLoading } = getMyInfo(myId!);
  const navigate = useNavigate();
  /* 벡엔드에서 불러와야 하는 데이터 */
  const { data: followingList, isLoading: followLoading } = getFollowList(myId!);
  const { data: followerList, isLoading: followerLoading } = getFollowerList(myId!);
  const { data: raceList, isLoading: raceLoading } = getRaceList(myId!); // 캐러셀 selected
  const RaceData = RaceListDummy;
  const WorkOutData = WorkOutListDummy;

  if (
    infoLoading ||
    followLoading ||
    followerLoading ||
    raceLoading ||
    !followerList ||
    !followingList ||
    !userInfo ||
    !raceList
  )
    return null;
  return (
    <PageWrapper>
      <AddPeople className='icon' onClick={() => navigate('/search')} />
      <UserInfoSection>
        <MyProfile nickname={userInfo.nickname} imgUrl={null} message={userInfo.description} tag={userInfo.keyword!} />
        <GridWrapper onClick={() => navigate('/follow')}>
          <h3>캐릭터</h3>
          <h3>팔로워</h3>
          <h3>팔로잉</h3>
          <span>LV.{userInfo.level}</span>
          <span>{followerList.length}</span>
          <span>{followingList.length}</span>
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
        <h2 style={{ marginTop: '18px' }}>참여 중인 챌린지</h2>
        <RaceList data={raceList?.nowList} height={153} styleType='profile' />
      </SlideSection>
    </PageWrapper>
  );
};

export default ProfilePage;
