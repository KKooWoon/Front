import React, { useState } from 'react';
import { Wrapper, MyRaceWrapper, SearchWrapper } from './search-race.style';
import RaceList from '@components/race-list';
import { raceType } from '@typings/race';
import { RaceListDummy } from 'dummy';
import ImageSlider from '@components/image-slider/inedx';
import { ReactComponent as SearchIcon } from '@assets/icons/search.svg';
import { ReactComponent as LockIcon } from '@assets/icons/lock.svg';
import { useNavigate } from 'react-router-dom';

const SearchRace = () => {
  const navigate= useNavigate();
  const RaceData: Array<raceType> = RaceListDummy;
  const [name, setName] = useState('name');
  //레이스 리스트 백엔드에서 요청
  //사용자의 이름 ( OOO 님) 요청

  const [search, setSearch] = useState('');
  const result = RaceData.filter((v, i) => v.raceName.includes(search)).length;
  //코드 검색은 이후에 추가할 예정
  const navigateHandler = (isPrivate: boolean, v: raceType) => {
    if (isPrivate) {
      navigate('/join', {
        state: {
          ...v,
        } as raceType,
      });
    } else {
      navigate(`/race/${v.raceId}`, { state: { ...v } });
    }
  };
  return (
    <Wrapper>
      <SearchWrapper>
        <SearchIcon />
        <input placeholder='초대 코드 및 레이스 명을 검색해보세요' onChange={e => setSearch(e.target.value)} />
      </SearchWrapper>

      <div>
        <span>#다이어트</span>
        <span style={{ padding: '4px' }}> 관련 레이스입니다.</span>
        <ImageSlider SliderHeight={172}>
          {RaceData.filter((v, i) => v.hashTag == '다이어트').map((v, i) => (
            <MyRaceWrapper key={i} onClick={() => navigateHandler(v.isPrivate, v)}>
              <p>D-{v.Dday}</p>
              <section className='wrapper'>
                <h3>
                  {v.isPrivate && (
                    <span>
                      <LockIcon />
                    </span>
                  )}
                  {v.raceName}
                </h3>
                <div>#{v.hashTag}</div>
              </section>
            </MyRaceWrapper>
          ))}
        </ImageSlider>
        <span>{name} 님</span>
        <span>이 참여하시는 레이스입니다.</span>
        <ImageSlider SliderHeight={172}>
          {RaceData.filter((v, i) => v.hashTag == '다이어트').map((v, i) => (
            <MyRaceWrapper key={i} onClick={() => navigateHandler(v.isPrivate, v)}>
              <p>D-{v.Dday}</p>
              <section className='wrapper'>
                <h3>
                  {v.isPrivate && (
                    <span>
                      <LockIcon />
                    </span>
                  )}
                  {v.raceName}
                </h3>
                <div>#{v.hashTag}</div>
              </section>
            </MyRaceWrapper>
          ))}
        </ImageSlider>
      </div>
    </Wrapper>
  );
};

export default SearchRace;
