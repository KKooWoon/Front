import React, { useState, useCallback, Dispatch, SetStateAction } from 'react';
import {
  Wrapper,
  RaceInput,
  RaceInputWrapper,
  DetailInputWrapper,
  DetailInput,
  PurposeBtn,
  PeriodWrapper,
  OpenWrapper,
  PeriodInput,
} from './create-race.style';
import useModal from '@hooks/use-modal';
import { InterestModal } from '@components/modal';
import CreatePwd from '@components/create-pwd';

interface RaceProps {
  raceInput: {
    description: string;
    endedAt: string;
    ownerNickname: string;
    raceName: string;
    racePassword: string;
    raceTag: string;
    startedAt: string;
  };
  setRaceInput: Dispatch<
    SetStateAction<{
      description: string;
      endedAt: string;
      ownerNickname: string;
      raceName: string;
      racePassword: string;
      raceTag: string;
      startedAt: string;
    }>
  >;
  tab: boolean;
  setTab: Dispatch<React.SetStateAction<boolean>>;
}

const CreateRace: React.FunctionComponent<RaceProps> = ({ raceInput, setRaceInput, tab, setTab }) => {
  const [raceName, setRaceName] = useState('');
  const [raceDetail, setRaceDetail] = useState('');
  const [raceDetailLine, setRaceDetaiLine] = useState(0);

  const HandleInput = e => {
    setRaceDetaiLine(e.target.value.split('\n').length - 1);
    setRaceDetail(e.target.value);
    setRaceInput({ ...raceInput, description: e.target.value });
  };

  const { isOpen: interestOpen, onClose: interestClose, setIsOpen: setInterestOpen } = useModal();
  const goalHandler = useCallback(
    (v: string) => {
      setRaceInput({ ...raceInput, raceTag: v });
      interestClose();
    },
    [raceInput]
  );

  const pwdHandleCallback = childData => {
    setRaceInput({ ...raceInput, racePassword: childData });
  };

  return (
    <Wrapper>
      <h1>제목</h1>
      <RaceInputWrapper>
        <RaceInput
          placeholder='레이스의 이름을 입력해 주세요.'
          maxLength={25}
          onChange={e => {
            setRaceName(e.target.value);
            setRaceInput({ ...raceInput, raceName: e.target.value });
          }}
        />
        <span> {raceName.length} / 25</span>
      </RaceInputWrapper>
      <h1>한줄 설명</h1>
      <DetailInputWrapper>
        <p> {raceDetail.length} / 50</p>
        <DetailInput placeholder='50자 제한' maxLength={50} onChange={e => HandleInput(e)} />
      </DetailInputWrapper>
      <h1>레이스 목적</h1>
      <PurposeBtn onClick={() => setInterestOpen(true)} style={{ color: raceInput.raceTag ? '#6732ff' : '#adacb1' }}>
        {raceInput.raceTag ? `#${raceInput.raceTag}` : '운동 목적을 선택해 주세요'}
      </PurposeBtn>
      <h1>기간</h1>
      <PeriodWrapper>
        <PeriodInput placeholder='YY.MM.DD' onChange={e => setRaceInput({ ...raceInput, startedAt: e.target.value })} />
        <p>~</p>
        <PeriodInput placeholder='YY.MM.DD' onChange={e => setRaceInput({ ...raceInput, endedAt: e.target.value })} />
      </PeriodWrapper>
      <h1>공개범위</h1>
      <OpenWrapper>
        <button
          className='public'
          onClick={() => setTab(true)}
          style={tab ? { backgroundColor: '#6732ff', color: '#ffffff' } : {}}
        >
          전체 공개
        </button>
        <button
          className='private'
          onClick={() => setTab(false)}
          style={!tab ? { backgroundColor: '#6732ff', color: '#ffffff' } : {}}
        >
          일부 공개
        </button>
      </OpenWrapper>
      {!tab ? <CreatePwd parentCallback={pwdHandleCallback} /> : <div></div>}
      <InterestModal show={interestOpen} close={interestClose} buttonHandler={goalHandler} />
    </Wrapper>
  );
};

export default CreateRace;
