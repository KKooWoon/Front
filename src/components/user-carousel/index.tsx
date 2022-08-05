import React, { Dispatch, SetStateAction, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperWrapper, Wrapper } from './carousel.style';
import CarouselItem from './carousel-item';
import { ReactComponent as RightArrow } from '@assets/icons/right-arrow.svg';
import { ReactComponent as LeftArrow } from '@assets/icons/left-arrow.svg';
import { User } from '@typings/user';
interface Props {
  data:Array<Partial<User>>;
  now?:number;
  setNow?:Dispatch<SetStateAction<number>>;
}
const UserCarousel = ({data, now ,setNow}:Props) => {
  const [swiper, setSwiper] = useState<any>();
  const [reachingEnd, setReachingEnd] = useState<boolean>(false);
  const [reachingFirst, setReachingFirst] = useState<boolean>(true);
  const screenSize = screen.width; 
  return (
    <Wrapper>
      <h2>운동 현황보기</h2>
      <SwiperWrapper style={{maxWidth:screenSize}}>
        <button onClick={() => swiper?.slidePrev()} disabled={reachingFirst}>
          <LeftArrow stroke={reachingFirst ? '#D4D2D9' : '#6732FF'} />
        </button>
        <Swiper
          slidesPerView={4}
          slidesPerGroup={4}
          onBeforeInit={swipper => setSwiper(swipper)}
          onSlideChange={e => {
            e.isEnd ? setReachingEnd(true) : setReachingEnd(false);
            e.isBeginning ? setReachingFirst(true) : setReachingFirst(false);
          }}
        >
          {data.map(v => (
            <SwiperSlide key={v.id} onClick={()=>setNow && setNow(v.id as number)}>
              <CarouselItem nickname={v.nick_name as string} url={v.profile_img as string | null} isActive={now === v.id as number} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button onClick={() => swiper?.slideNext()} disabled={reachingEnd}>
          <RightArrow stroke={reachingEnd ? '#D4D2D9' : '#6732FF'} />
        </button>
      </SwiperWrapper>
    </Wrapper>
  );
};

export default UserCarousel;
