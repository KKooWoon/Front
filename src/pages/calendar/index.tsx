import ImageSlider from '@components/image-slider/inedx';
import { PageWrapper, SlideSection as CalendarSection } from '@pages/profile/profile.style';
import React, { useState } from 'react';
import { RaceTitle } from './calendar.style';

const CalendarPage = () => {
  const [nowSelected, setNowSelected] = useState('ALL');
  const titleList = ['레이스A', '레이스B', '레이스B', '레이스B', '레이스B', '레이스B'];

  return (
    <PageWrapper>
      <div style={{padding:"20px 0px 5px 20px"}}>
        <ImageSlider SliderHeight={40}>
          <RaceTitle className={nowSelected === 'ALL' ? 'active':''}>ALL</RaceTitle>
          {titleList.map((v, i) => (
            <RaceTitle className={nowSelected === v ? 'active':''} key={i}>#{v}</RaceTitle>
          ))}
        </ImageSlider>
      </div>
      <CalendarSection>d</CalendarSection>
    </PageWrapper>
  );
};

export default CalendarPage;
