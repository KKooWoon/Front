import React from 'react';
import JoinButton from './join-button';
import { RaceHeaderWrapper, TitleSection } from './race-detail.style';
interface Props {
  raceId: number;
  raceName: string;
  description?: string;
  Dday: number;
  tag: string;
  isJoin?: boolean;
  isParticipate?: boolean;
}
const RaceHeader = ({ raceId, raceName, Dday, tag, description, isParticipate=false, isJoin = false }: Props) => {
  return (
    <RaceHeaderWrapper>
      {!isJoin && <JoinButton isParticipate={isParticipate} raceId={raceId} />}
      <TitleSection>
        <h4>{raceName}</h4>
        <p>{description}</p>
        <span>D-{Dday}</span>
        <span>{tag}</span>
      </TitleSection>
    </RaceHeaderWrapper>
  );
};

export default RaceHeader;
