import React, { Dispatch, SetStateAction, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperWrapper, Wrapper } from './carousel.style';
import CarouselItem from './carousel-item';
import { ReactComponent as RightArrow } from '@assets/icons/right-arrow.svg';
import { ReactComponent as LeftArrow } from '@assets/icons/left-arrow.svg';
import { User, UserType } from '@typings/user';
import { follow } from '@typings/follow';
interface Props {
  myData: UserType;
  data: Array<follow>;
  now?: number;
  setNow?: Dispatch<SetStateAction<number>>;
}
const UserCarousel = ({ data, now, setNow, myData }: Props) => {
  const [swiper, setSwiper] = useState<any>();
  const [reachingEnd, setReachingEnd] = useState<boolean>(false);
  const [reachingFirst, setReachingFirst] = useState<boolean>(true);
  const screenSize = screen.width;
  /* 캐러셀 안에 데이터가  */
  return (
    <Wrapper>
      <h2>운동 현황보기</h2>
      <SwiperWrapper style={{ maxWidth: screenSize }}>
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
          <SwiperSlide onClick={() => setNow && setNow(myData.accountId)}>
            <CarouselItem nickname={myData.nickname} url={myData.profileImageUrl ? myData.profileImageUrl: null } isActive={now === myData.accountId} />
          </SwiperSlide>
          {data.map(v => (
            <SwiperSlide key={v.id} onClick={() => setNow && setNow(v.id as number)}>
              <CarouselItem nickname={v.nickName} url={v.profileImageUrl} isActive={now === (v.id as number)} />
            </SwiperSlide>
          ))}
          {data.length < 4 &&
            Array(4 - data.length)
              .fill(null)
              .map((v, i) => <SwiperSlide key={i}></SwiperSlide>)}
        </Swiper>
        <button onClick={() => swiper?.slideNext()} disabled={reachingEnd || data.length < 4}>
          <RightArrow stroke={reachingEnd || data.length < 4 ? '#D4D2D9' : '#6732FF'} />
        </button>
      </SwiperWrapper>
    </Wrapper>
  );
};

export default UserCarousel;
