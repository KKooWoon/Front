import React, { useCallback, useState } from 'react';
import { Wrapper, MyRaceWrapper, SearchWrapper } from './search-race.style';
import RaceList from '@components/race-list';
import { race, raceType } from '@typings/race';
import { RaceListDummy } from 'dummy';
import ImageSlider from '@components/image-slider/inedx';
import { ReactComponent as SearchIcon } from '@assets/icons/search.svg';
import { ReactComponent as LockIcon } from '@assets/icons/lock.svg';
import { useNavigate } from 'react-router-dom';
import { getRaceList, getTagRaceList, raceSearchAPI } from '@apis/race';
import { getMyInfo } from '@apis/user';
import { Spinner } from '@components/loading';
import useInput from '@hooks/use-input';
import useModal from '@hooks/use-modal';
import { AlertModal } from '@components/modal';

const SearchRace = () => {
  const myId = localStorage.getItem('myId');
  const navigate = useNavigate();
  const {isOpen, onClose, setIsOpen} = useModal();
  const [modalMessage, setModalMessage] = useState('')
  const [searchTitle, setSearchTitle] = useState('');


  //사용자 정보 요청
  const { data: userInfo, isLoading: infoLoading } = getMyInfo(myId!);
  //레이스 리스트 백엔드에서 요청
  const { data: raceList, isLoading: raceLoading } = getRaceList(myId!);
  // 태그에 관련된 레이스 요청
  const { data: tagList, isLoading: tagLoading } = getTagRaceList(userInfo!.keyword);

  const [search, onChangeSearch,setSearch] = useInput('');
  const [searchResult, setSearchResult] = useState<Array<race>>([]);
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

  const raceSearchHandler = useCallback(async () => {
    const rst = await raceSearchAPI(search);
    if(rst.length === 0 ) {
      setIsOpen(true);
      setSearchResult([]);
      setModalMessage(`${search} 레이스의 검색결과가 없습니다.`)
    }else{
      setSearchResult(rst);
    }
    setSearchTitle(search);
    setSearch('');
  },[search]);
  if (infoLoading || raceLoading || tagLoading || !userInfo || !raceList || !tagList) return <Spinner />;
  return (
    <Wrapper>
      <SearchWrapper>
        <SearchIcon onClick={raceSearchHandler}/>
        <input placeholder='초대 코드 및 레이스 명을 검색해보세요' value={search} onChange={onChangeSearch} />
      </SearchWrapper>
      <div>
        {searchResult.length !== 0 && (
          <>
            <span>#{searchTitle}</span>
            <span style={{ padding: '4px' }}> 검색결과 입니다.</span>
            <ImageSlider SliderHeight={172}>
              {searchResult.map((v, i) => (
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
          </>
        )}
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
        <span>{userInfo.nickname} 님</span>
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
      <AlertModal show={isOpen} close={onClose} message={modalMessage}/>
    </Wrapper>
  );
};

export default SearchRace;
