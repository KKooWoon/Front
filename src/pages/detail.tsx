import { isFollowAPI, setFollowAPI, setUnFollowAPI } from '@apis/follow';
import { getRaceList } from '@apis/race';
import { getMyInfo } from '@apis/user';
import { getWorkoutPreviewList } from '@apis/workout';
import FollowButton from '@components/follow-button';
import { Spinner } from '@components/loading';
import { BodySpec, MyProfile } from '@components/profile';
import RaceList from '@components/race-list';
import PreviewWorkOut from '@components/workout-list/workout-preview';
import { MyInfo, RaceListDummy, WorkOutListDummy } from 'dummy';
import React, { useCallback, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import { PageWrapper, SlideSection, UserInfoSection } from './profile/profile.style';

const ProfileDetail = () => {
  const myId = localStorage.getItem('myId');
  const queryClient = useQueryClient();
  const { id } = useParams();
  const [isFollow, setIsFollow] = useState(false);

  /* 벡엔드에서 불러와야 하는 데이터 */
  const { data: userInfo, isLoading: infoLoading } = getMyInfo(id!);
  const { data: raceList, isLoading: raceLoading } = getRaceList(id!);
  const { data: workoutList, isLoading: workoutLoading } = getWorkoutPreviewList(id!);

  // isFollow 요청
  const { isLoading: isFollowLoading } = useQuery(['isFollow', id], () => isFollowAPI(myId!, id!), {
    onSuccess: data => {
      setIsFollow(data);
    },
  });

  const { mutate: postFollow } = useMutation(() => setFollowAPI(id!), {
    onMutate: () => {
      setIsFollow(true);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['isFollow', id!]);
    },
    onError: () => {
      setIsFollow(false);
    },
  });
  const { mutate: deleteFollow } = useMutation(() => setUnFollowAPI(id!), {
    onMutate: () => {
      setIsFollow(false);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['isFollow', id!]);
    },
    onError: () => {
      setIsFollow(true);
    },
  });

  const followHandler = useCallback(() => {
    if(!isFollow){
      postFollow();
    }else{
      deleteFollow();
    }
  }, [isFollow]);
  if (isFollowLoading || infoLoading || raceLoading || workoutLoading || !workoutList || !raceList || !userInfo)
    return <Spinner />;
  return (
    <PageWrapper>
      <UserInfoSection>
        <MyProfile
          nickname={userInfo.nickname}
          imgUrl={userInfo.profileImageUrl!}
          message={userInfo.description}
          tag={userInfo.keyword!}
        />
        <div style={{ marginTop: '20px' }} />
        <BodySpec
          age={userInfo.age}
          fat={userInfo.bodyFat}
          height={userInfo.height}
          weight={userInfo.weight}
          muscle={userInfo.skeletalMuscleMass}
        />
        <div style={{ marginTop: 20 }} />
        <FollowButton width='100%' padding='15px 0px' isFollow={isFollow} onClickHandler={followHandler} />
      </UserInfoSection>
      <SlideSection>
        <h2>최근 운동 기록</h2>
        <PreviewWorkOut data={workoutList} />
        <h2 style={{ marginTop: '18px' }}>참영 중인 챌린지</h2>
        <RaceList data={raceList?.nowList} height={115} styleType='profile' />
      </SlideSection>
    </PageWrapper>
  );
};

export default ProfileDetail;
