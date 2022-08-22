import React, { useState } from 'react';
import { Wrapper, MyRaceWrapper, SearchWrapper } from './search-race.style';
import RaceList from '@components/race-list';
import { raceType } from '@typings/race';
import { RaceListDummy } from 'dummy';
import ImageSlider from '@components/image-slider/inedx';
import { ReactComponent as SearchIcon } from '@assets/icons/search.svg';

const SearchRace = () => {
  const RaceData: Array<raceType> = RaceListDummy;
  const [name, setName] = useState('name');
  //레이스 리스트 백엔드에서 요청
  //사용자의 이름 ( OOO 님) 요청

  const [search, setSearch] = useState('');
  const result = RaceData.filter((v, i) => v.raceName.includes(search)).length;
  //코드 검색은 이후에 추가할 예정

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchIcon />
        <input placeholder='초대 코드 및 레이스 명을 검색해보세요' onChange={e => setSearch(e.target.value)} />
      </SearchWrapper>
      {search ? (
        <div>
          <span></span>
          <span>검색결과({result})</span>
          <ImageSlider SliderHeight={224}>
            {RaceData.filter((v, i) => v.raceName.includes(search)).map((v, i) => (
              <MyRaceWrapper key={i}>
                <p>D-{v.Dday}</p>
                <h3>{v.raceName}</h3>
                <div>#{v.hashTag}</div>
              </MyRaceWrapper>
            ))}
          </ImageSlider>
        </div>
      ) : (
        <div>
          <span>#다이어트</span>
          <span style={{ padding: '4px' }}> 관련 레이스입니다.</span>
          <ImageSlider SliderHeight={224}>
            {RaceData.filter((v, i) => v.hashTag == '다이어트').map((v, i) => (
              <MyRaceWrapper key={i}>
                <p>D-{v.Dday}</p>
                <h3>{v.raceName}</h3>
                <div>#{v.hashTag}</div>
              </MyRaceWrapper>
            ))}
          </ImageSlider>

          <span>{name} 님</span>
          <span>이 참여하시는 레이스입니다.</span>
          <RaceList data={RaceData} height={224} styleType='myrace' />
        </div>
      )}
    </Wrapper>
  );
};

export default SearchRace;
