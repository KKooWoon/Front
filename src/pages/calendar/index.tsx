import { CustomCalendar } from '@components/calendar';
import ImageSlider from '@components/image-slider/inedx';
import { PageWrapper, SlideSection as CalendarSection } from '@pages/profile/profile.style';
import React, { useCallback, useState } from 'react';
import { RaceTitle } from './calendar.style';

const CalendarPage = () => {
  const [nowSelected, setNowSelected] = useState('ALL');
  const titleList = ['레이스A', '레이스B', '레이스B', '레이스B', '레이스B', '레이스B'];
  const nowRaceHandler = useCallback((v:string)=>{
    /* 벡엔드 api 설계되는 것 보고 id 값으로 바뀔 수 도 있음 */
    if(nowSelected === v) return;
    setNowSelected(v)
  },[nowSelected]);
  return (
    <PageWrapper>
      <div style={{padding:"20px 0px 5px 20px"}}>
        <ImageSlider SliderHeight={40}>
          <RaceTitle onClick={()=> nowRaceHandler('ALL')} className={nowSelected === 'ALL' ? 'active':''}>ALL</RaceTitle>
          {titleList.map((v, i) => (
            <RaceTitle onClick={()=> nowRaceHandler(v)} className={nowSelected === v ? 'active':''} key={i}>#{v}</RaceTitle>
          ))}
        </ImageSlider>
      </div>
      <CalendarSection>
        <CustomCalendar />
      </CalendarSection>
    </PageWrapper>
  );
};

export default CalendarPage;
