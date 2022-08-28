import { getRaceList } from '@apis/race';
import { CustomCalendar } from '@components/calendar';
import ImageSlider from '@components/image-slider/inedx';
import { PageWrapper, SlideSection as CalendarSection } from '@pages/profile/profile.style';
import React, { useCallback, useState } from 'react';
import { RaceTitle } from './calendar.style';

const CalendarPage = () => {
  const myId = localStorage.getItem('myId');
  const [nowSelected, setNowSelected] = useState<'ALL' | number>('ALL');
  const { data: raceList, isLoading: raceLoading } = getRaceList(myId!); // 캐러셀 selected
  console.log('tttt : ',raceList)
  const nowRaceHandler = useCallback((v:'ALL' | number)=>{
    if(nowSelected === v) return;
    setNowSelected(v)
  },[nowSelected]);
  if(raceLoading || !raceList) return null
  return (
    <PageWrapper>
      <div style={{padding:"20px 0px 5px 20px"}}>
        <ImageSlider SliderHeight={40}>
          <RaceTitle onClick={()=> nowRaceHandler('ALL')} className={nowSelected === 'ALL' ? 'active':''}>ALL</RaceTitle>
          {raceList.allList.map((v) => (
            <RaceTitle onClick={()=> nowRaceHandler(v.raceId)} className={nowSelected === v.raceId ? 'active':''} key={v.raceId}>#{v.raceName}</RaceTitle>
          ))}
        </ImageSlider>
      </div>
      <CalendarSection>
        <CustomCalendar raceId={nowSelected}/>
      </CalendarSection>
    </PageWrapper>
  );
};

export default CalendarPage;
