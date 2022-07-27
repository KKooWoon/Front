import MainProfile from '@components/main-profile';
import RaceList from '@components/race-list';
import UserCarousel from '@components/user-carousel';
import WorkOutList from '@components/WorkoutList';
import React from 'react';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <Wrapper>
      {/*MainProfile 에서는 MyProfile 정보만 필요 */}
      <MainProfile />
      {/*UserCarousel 에서는 selected Item 변경, MyProfileData(fllowerList) 필요*/}
      <UserCarousel />
      {/*RaceList에서도 Selected Item 필요, 레이스 클릭 시 WorkOutList 바꿔서 보여 줌 */}
      <UserInfoWrapper>
        <RaceList />
      </UserInfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  display:flex;
  flex-direction:column;
`;

const UserInfoWrapper = styled.section`
  margin-top: 12px;
  width: 100%;
  flex:1;
  background-color: #fff;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding :20px;
`;

export default MainPage;
