import MainProfile from '@components/main-profile';
import RaceList from '@components/race-list';
import { CustomButton, NoResult, NoResultWrapper } from '@components/race-list/race-list.style';
import UserCarousel from '@components/user-carousel';
import { raceType } from '@typings/race';
import dayjs from 'dayjs';
import { MyInfo, RaceListDummy, userDummy, WorkoutData, WorkOutListDummy } from 'dummy';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as PlusIcon } from '@assets/icons/plus.svg';
import { DetailWorkOut } from '@components/workout-list';
import { UserType } from '@typings/user';
import { getMainPage, getMyInfo } from '@apis/user';
import { getFollowList } from '@apis/follow';
import { follow } from '@typings/follow';
import { getRaceList } from '@apis/race';
import { getWorkoutList } from '@apis/workout';
import { Spinner } from '@components/loading';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  const myId = localStorage.getItem('myId');
  const today = dayjs().format('YYYY-MM-DD');
  console.log('data객체 : ', today);
  const [carouselSelected, setCarouselSelected] = useState(parseInt(myId!));
  const [raceSelected, setRaceSelected] = useState<number | undefined>(undefined);

  /* 벡엔드에서 레이스 데이터 가져옴 */
  const { data: raceList, isLoading: raceLoading } = getRaceList(carouselSelected.toString()); // 캐러셀 selected
  /* 벡엔드에서 follow data 가져옴 */
  const { data: followList, isLoading: followLoading } = getFollowList(myId!);
  /* 벡엔드에서 my-info 가져옴 */
  const { data: userInfo, isLoading: infoLoading } = getMyInfo(myId!);
  /* workout data -> raceselected 가 undefined가 아닐 때 가져와야함 */
  const { data: workoutList, isLoading: workoutLoading } = getWorkoutList(carouselSelected, raceSelected!, today);
  console.log('my: ', userInfo);
  console.log('follow : ', followList);
  console.log('race:', raceList?.allList);
  console.log('workout: ', workoutList);
  useEffect(() => {
    if (raceList && raceList?.allList.length !== 0) {
      console.log('여기 실행');
      setRaceSelected(raceList?.allList[0].raceId);
    }
  }, [carouselSelected, raceList]);
  const raceHandler = (v: number) => {
    setRaceSelected(v);
  };

  if (infoLoading || followLoading || raceLoading || workoutLoading || !userInfo || !followList || !raceList)
    return <Spinner />;
  return (
    <Wrapper>
      {/*MainProfile 에서는 MyProfile 정보만 필요 */}
      <MainProfile nickname={userInfo.nickname} level={userInfo.level} exp={userInfo.exp} />
      {/*UserCarousel 에서는 selected Item 변경, MyProfileData(fllowerList) 필요*/}
      <UserCarousel myData={userInfo!} data={followList!} now={carouselSelected} setNow={setCarouselSelected} />
      {/*RaceList에서도 Selected Item 필요, 레이스 클릭 시 WorkOutList 바꿔서 보여 줌 */}
      <UserInfoWrapper>
        {raceList.allList.length !== 0 ? (
          <RaceList data={raceList.allList} height={130} now={raceSelected} setNow={raceHandler} styleType='main' />
        ) : (
          <NoResultWrapper>
            <NoResult>{`참여 중인 레이스가 없습니다.\n\n레이스탭에서 새로운 레이스를 생성하거나\n참여해 보세요`}</NoResult>
          </NoResultWrapper>
        )}
        {raceList.allList.length !== 0 && carouselSelected === userInfo.accountId && !!workoutList?.recordId && (
          <CustomButton
            onClick={() => navigate('/workout-auth', { state: workoutList })}
          >
            <span>이 레이스에 운동 인증하기</span>
          </CustomButton>
        )}
        {raceList.allList.length !== 0 && (
          <>
            <hr style={{ margin: '30px 0px' }} />
            <DateSection>
              <h3>{today}</h3>
              {carouselSelected === userInfo.accountId && (
                <button onClick={() => navigate('/register')}>
                  <PlusIcon />
                  <span>운동 등록하기</span>
                </button>
              )}
            </DateSection>
          </>
        )}
        {raceList.allList.length !== 0 && !!workoutList && (
          <WorkOutSection>
            <DetailWorkOut data={workoutList!} isMe={carouselSelected === userInfo.accountId} />
          </WorkOutSection>
        )}
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
