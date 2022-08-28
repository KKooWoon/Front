import React from 'react';
import { Wrapper, ImageSection, InviteCodeWrapper } from './complete-race.style';
import character from '@assets/images/character.png';

const CompleteRace = () => {
  return (
    <Wrapper>
      <h1>
        <span style={{ color: '#6732ff' }}>레이스 생성</span>이 완료되었습니다!
      </h1>
      <h1>레이스에 참여할 친구를 초대해보세요.</h1>
      <ImageSection>
        <div>
          <img src={character} />
        </div>
      </ImageSection>
      <InviteCodeWrapper>
        <div>초대코드</div>
        <h1>6ee4yajsldfj</h1>
      </InviteCodeWrapper>
    </Wrapper>
  );
};

export default CompleteRace;
