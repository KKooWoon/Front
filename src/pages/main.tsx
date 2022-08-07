import MainProfile from '@components/main-profile';
import RaceList from '@components/race-list';
import { CustomButton } from '@components/race-list/race-list.style';
import UserCarousel from '@components/user-carousel';
import { raceType } from '@typings/race';
import { MyInfo, RaceListDummy, userDummy } from 'dummy';
import React, { useState } from 'react';
import styled from 'styled-components';

const MainPage = () => {
  /* 벡엔드에서 레이스 데이터 가져옴 */
  const RaceData: Array<raceType> = RaceListDummy;
  /* 벡엔드에서 user data 가져옴 */
  const userData = userDummy;
  /* 벡엔드에서 my-info 가져옴 */
  const myInfo = MyInfo;

  const [carouselSelected, setCarouselSelected] = useState(myInfo.id);
  const [raceSelected, setRaceSelected] = useState(RaceData[0].raceId);

  return (
    <Wrapper>
      {/*MainProfile 에서는 MyProfile 정보만 필요 */}
      <MainProfile />
      {/*UserCarousel 에서는 selected Item 변경, MyProfileData(fllowerList) 필요*/}
      <UserCarousel data={userData} now={carouselSelected} setNow={setCarouselSelected} />
      {/*RaceList에서도 Selected Item 필요, 레이스 클릭 시 WorkOutList 바꿔서 보여 줌 */}
      <UserInfoWrapper>
        <RaceList data={RaceData} height={115} now={raceSelected} setNow={setRaceSelected} styleType='main' />
        <CustomButton>
          {RaceData.length === 0 ? <span>레이스 참여 하러가기</span> : <span>이 레이스에 운동 인증하기</span>}
        </CustomButton>
      </UserInfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
`;

const UserInfoWrapper = styled.section`
  margin-top: 12px;
  width: 100%;
  flex: 1;
  background-color: #fff;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
`;

export default MainPage;
