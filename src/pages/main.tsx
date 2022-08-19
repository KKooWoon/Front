import MainProfile from '@components/main-profile';
import RaceList from '@components/race-list';
import { CustomButton, NoResult, NoResultWrapper } from '@components/race-list/race-list.style';
import UserCarousel from '@components/user-carousel';
import { raceType } from '@typings/race';
import dayjs from 'dayjs';
import { MyInfo, RaceListDummy, userDummy, WorkoutData, WorkOutListDummy } from 'dummy';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as PlusIcon } from '@assets/icons/plus.svg';
import { DetailWorkOut } from '@components/workout-list';

const MainPage = () => {
  /* 벡엔드에서 레이스 데이터 가져옴 */
  const RaceData: Array<raceType> = RaceListDummy;
  /* 벡엔드에서 user data 가져옴 */
  const userData = userDummy;
  /* 벡엔드에서 my-info 가져옴 */
  const myInfo = MyInfo;
  /* workout data */
  const workOutData = WorkoutData;

  const [carouselSelected, setCarouselSelected] = useState(myInfo.id);
  const [raceSelected, setRaceSelected] = useState<number | undefined>(
    RaceData.length !== 0 ? RaceData[0].raceId : undefined
  );
  const raceHandler = (v: number) => {
    setRaceSelected(v);
  };
  return (
    <Wrapper>
      {/*MainProfile 에서는 MyProfile 정보만 필요 */}
      <MainProfile />
      {/*UserCarousel 에서는 selected Item 변경, MyProfileData(fllowerList) 필요*/}
      <UserCarousel data={userData} now={carouselSelected} setNow={setCarouselSelected} />
      {/*RaceList에서도 Selected Item 필요, 레이스 클릭 시 WorkOutList 바꿔서 보여 줌 */}
      <UserInfoWrapper>
        {RaceData.length !== 0 ? (
          <RaceList data={RaceData} height={115} now={raceSelected} setNow={raceHandler} styleType='main' />
        ) : (
          <NoResultWrapper>
            <NoResult>{`참여 중인 레이스가 없습니다.\n\n레이스탭에서 새로운 레이스를 생성하거나\n참여해 보세요`}</NoResult>
          </NoResultWrapper>
        )}
        {RaceData.length !== 0 && carouselSelected === myInfo.id && (
          <CustomButton>
            <span>이 레이스에 운동 인증하기</span>
          </CustomButton>
        )}
        {RaceData.length !== 0 && (
          <>
            <hr style={{ margin: '30px 0px' }} />
            <DateSection>
              <h3>{dayjs().format('YYYY-MM-DD')}</h3>
              {carouselSelected === myInfo.id && (
                <button>
                  <PlusIcon />
                  <span>운동 등록하기</span>
                </button>
              )}
            </DateSection>
          </>
        )}
        {RaceData.length !== 0 && 
        <WorkOutSection>
          <DetailWorkOut data={WorkoutData} isMe={carouselSelected === myInfo.id}/>
        </WorkOutSection>}
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

const DateSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h3 {
    font-weight: 700;
    font-size: 18px;
    color: var(--black);
  }
  & button {
    padding: 12px 8px;
    font-size: 14px;
    color: var(--primary-purple);
    font-weight: 500;
    border-radius: 10px;
    & span {
      vertical-align: middle;
    }
    & svg {
      margin-right: 6px;
      vertical-align: middle;
    }
  }
`;

const WorkOutSection = styled.section``;
export default MainPage;
