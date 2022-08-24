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
  const RankingData = dummyRankingList;
  const GalleryData = dummyGallery;
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
          now === '랭킹' ? <RankingList  data={RankingData}/> : <GalleryList data={GalleryData}/>
        }
      </TabLayout>
    </div>
  );
};

export default RaceDetailPage;
