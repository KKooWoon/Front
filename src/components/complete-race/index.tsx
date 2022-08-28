import React from 'react';
import { Wrapper, ImageSection, InviteCodeWrapper } from './complete-race.style';
import character from '@assets/images/character.png';

interface RaceProps {
  raceResponse: {
    raceCode: string;
    racePassword: string;
  };
}

const CompleteRace: React.FunctionComponent<RaceProps> = ({ raceResponse }) => {
  return (
    <Wrapper>
      <h1>
        <span style={{ color: '#433f4b' }}>레이스 생성</span>이 완료되었습니다!
      </h1>
      <h1>레이스에 참여할 친구를 초대해보세요.</h1>
      <ImageSection>
        <div>
          <img src={character} />
        </div>
      </ImageSection>
      {raceResponse.racePassword ? (
        <div>
          <InviteCodeWrapper style={{ marginBottom: '0px' }}>
            <div>초대코드</div>
            <h1>{raceResponse.raceCode}</h1>
          </InviteCodeWrapper>
          <InviteCodeWrapper style={{ marginTop: '6px' }}>
            <div>비밀번호</div>
            <h1>{raceResponse.racePassword}</h1>
          </InviteCodeWrapper>
        </div>
      ) : (
        <InviteCodeWrapper>
          <div>초대코드</div>
          <h1>{raceResponse.raceCode}</h1>
        </InviteCodeWrapper>
      )}
    </Wrapper>
  );
};

export default CompleteRace;
