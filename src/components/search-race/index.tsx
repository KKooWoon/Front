import React, { useState } from 'react';
import { Wrapper, MyRaceWrapper, SearchWrapper } from './search-race.style';
import RaceList from '@components/race-list';
import { race, raceType } from '@typings/race';
import { RaceListDummy } from 'dummy';
import ImageSlider from '@components/image-slider/inedx';
import { ReactComponent as SearchIcon } from '@assets/icons/search.svg';
import { ReactComponent as LockIcon } from '@assets/icons/lock.svg';
import { useNavigate } from 'react-router-dom';
import { getRaceList, getTagRaceList } from '@apis/race';
import { getMyInfo } from '@apis/user';
import { Spinner } from '@components/loading';

const SearchRace = () => {
  const myId = localStorage.getItem('myId');
  const navigate= useNavigate();
  const RaceData: Array<raceType> = RaceListDummy;
  const [name, setName] = useState('name');

  //사용자 정보 요청
  const { data: userInfo, isLoading: infoLoading } = getMyInfo(myId!);
  //레이스 리스트 백엔드에서 요청
  const { data: raceList, isLoading: raceLoading } = getRaceList(myId!);
  // 태그에 관련된 레이스 요청
  const {data:tagList, isLoading: tagLoading} = getTagRaceList(userInfo!.keyword);

  const [search, setSearch] = useState('');
  const result = RaceData.filter((v, i) => v.raceName.includes(search)).length;
  //코드 검색은 이후에 추가할 예정
  const navigateHandler = (isPrivate: boolean, v: race) => {
    if (isPrivate) {
      navigate('/join', {
        state: {
          ...v,
        } as race,
      });
    } else {
      navigate(`/race/${v.raceId}`, { state: { ...v } });
    }
  };
  if(infoLoading || raceLoading || tagLoading || !userInfo || !raceList || !tagList) return <Spinner />
  return (
    <Wrapper>
      <SearchWrapper>
        <SearchIcon />
        <input placeholder='초대 코드 및 레이스 명을 검색해보세요' onChange={e => setSearch(e.target.value)} />
      </SearchWrapper>
      <div>
        <span>#{userInfo.keyword}</span>
        <span style={{ padding: '4px' }}> 관련 레이스입니다.</span>
        <ImageSlider SliderHeight={172}>
          {tagList.map((v, i) => (
            <MyRaceWrapper key={v.raceId} onClick={() => navigateHandler(v.isPrivate, v)}>
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
                <div>#{v.raceTag}</div>
              </section>
            </MyRaceWrapper>
          ))}
        </ImageSlider>
        <span>{name} 님</span>
        <span>이 참여하시는 레이스입니다.</span>
        <ImageSlider SliderHeight={172}>
          {raceList.allList.map((v, i) => (
            <MyRaceWrapper key={v.raceId} onClick={() => navigateHandler(v.isPrivate, v)}>
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
                <div>#{v.raceTag}</div>
              </section>
            </MyRaceWrapper>
          ))}
        </ImageSlider>
      </div>
    </Wrapper>
  );
};

export default SearchRace;
