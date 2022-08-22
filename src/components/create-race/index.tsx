import React, { useState, useCallback } from 'react';
import {
  Wrapper,
  RaceInput,
  RaceInputWrapper,
  DetailInputWrapper,
  DetailInput,
  PurposeBtn,
  PeriodWrapper,
  OpenWrapper,
} from './create-race.style';
import useModal from '@hooks/use-modal';
import { InterestModal } from '@components/modal';

const CreateRace = () => {
  const [raceTitle, setRaceTitle] = useState('');

  const [raceDetail, setRaceDetail] = useState('');
  const [raceDetailLine, setRaceDetaiLine] = useState(0);

  const HandleInput = e => {
    setRaceDetaiLine(e.target.value.split('\n').length - 1);
    setRaceDetail(e.target.value);
  };

  const { isOpen: interestOpen, onClose: interestClose, setIsOpen: setInterestOpen } = useModal();
  const [goal, setGoal] = useState('');
  const goalHandler = useCallback(
    (v: string) => {
      setGoal(v);
      interestClose();
    },
    [goal]
  );

  return (
    <Wrapper>
      <h1>제목</h1>
      <RaceInputWrapper>
        <RaceInput
          placeholder='레이스의 이름을 입력해 주세요.'
          maxLength={25}
          onChange={e => setRaceTitle(e.target.value)}
        />
        <span> {raceTitle.length} / 25</span>
      </RaceInputWrapper>
      <h1>한줄 설명</h1>
      <DetailInputWrapper>
        <p> {raceDetail.length} / 50</p>
        <DetailInput placeholder='50자 제한' maxLength={50} onChange={e => HandleInput(e)} />
      </DetailInputWrapper>
      <h1>레이스 목적</h1>
      <PurposeBtn onClick={() => setInterestOpen(true)} style={{ color: goal ? '#6732ff' : '#adacb1' }}>
        {goal ? `#${goal}` : '운동 목적을 선택해 주세요'}
      </PurposeBtn>
      <h1>기간</h1>
      <PeriodWrapper>
        <button>시작일</button>
        <p>~</p>
        <button>완료일</button>
      </PeriodWrapper>
      <h1>공개범위</h1>
      <OpenWrapper>
        <button>전체 공개</button>
        <button>일부 공개</button>
      </OpenWrapper>
      <InterestModal show={interestOpen} close={interestClose} buttonHandler={goalHandler} />
    </Wrapper>
  );
};

export default CreateRace;
