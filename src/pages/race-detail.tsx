import { getRankingList } from '@apis/race';
import { getGalleryList } from '@apis/workout';
import { Spinner } from '@components/loading';
import { GalleryList, RaceHeader, RankingList } from '@components/race-detail';
import TabLayout from '@components/tab-layout';
import { raceType } from '@typings/race';
import { dummyGallery, dummyRankingList } from 'dummy';
import React, { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';

const RaceDetailPage = () => {
  const { state } = useLocation();
  const { Dday, hashTag, isPrivate, memberCount, raceId, raceName } = state as raceType;
  const [now, setNow] = useState<string>('랭킹');
  const nowHandler = useCallback((v:string)=> {
    setNow(v);
  },[now]);
  console.log(state);

  /* 벡엔드 에서 데이터 받아옴 */
  const {data:rankingList, isLoading:rankLoading} = getRankingList(raceId);
  const {data:galleryList, isLoading:galleryLoading} = getGalleryList(raceId);

  if(rankLoading || galleryLoading || !rankingList || !galleryList) return <Spinner />

  return (
    <div>
      <RaceHeader
        Dday={Dday}
        tag={hashTag}
        raceName={raceName}
        raceId={raceId}
        description='오늘은 어깨운동 하는 날'
      />
      <TabLayout items={['랭킹', '갤러리']} now={now} onClickHandler={nowHandler}>
        {
          now === '랭킹' ? <RankingList  data={rankingList}/> : <GalleryList data={galleryList}/>
        }
      </TabLayout>
    </div>
  );
};

export default RaceDetailPage;
