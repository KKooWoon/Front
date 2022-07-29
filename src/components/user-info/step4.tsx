import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import { KEYWORDS } from '@utils/constants';
import React, { SyntheticEvent, useEffect } from 'react';
import onBoadingSlice from 'reducer/onboading';
import styled from 'styled-components';
import { Container, KeywordItem } from './user-info.style';

const Step4 = () => {
  const keywords = KEYWORDS;
  const isActive = useAppSelector(state => state.onboading.isActive);
  const interest = useAppSelector(state => state.onboading.interest);
  const dispatch = useAppDispatch();
  const handler = (e: SyntheticEvent) => {
    if ((e.target as HTMLDivElement | HTMLSpanElement).localName === 'div') return;
    const keyword = (e.target as HTMLDivElement | HTMLSpanElement).innerHTML.substring(2);
    dispatch(onBoadingSlice.actions.setInterest(keyword));
  };

  useEffect(() => {
    if (interest.length !== 0 && !isActive) {
      dispatch(onBoadingSlice.actions.setActive(true));
    } else if (interest.length === 0 && isActive) {
      dispatch(onBoadingSlice.actions.setActive(false));
    }
  }, [interest]);
  
  return (
    <KeyWordsWrapper onClick={handler}>
      <Container>
        <KeywordItem className={interest.includes(keywords[0]) ? 'active' : ''}># {keywords[0]}</KeywordItem>
        <KeywordItem className={interest.includes(keywords[1]) ? 'active' : ''}># {keywords[1]}</KeywordItem>
      </Container>
      <Container>
        <KeywordItem className={interest.includes(keywords[2]) ? 'active' : ''}># {keywords[2]}</KeywordItem>
        <KeywordItem className={interest.includes(keywords[3]) ? 'active' : ''}># {keywords[3]}</KeywordItem>
        <KeywordItem className={interest.includes(keywords[4]) ? 'active' : ''}># {keywords[4]}</KeywordItem>
      </Container>
      <Container>
        <KeywordItem className={interest.includes(keywords[5]) ? 'active' : ''}># {keywords[5]}</KeywordItem>
        <KeywordItem className={interest.includes(keywords[6]) ? 'active' : ''}># {keywords[6]}</KeywordItem>
      </Container>
    </KeyWordsWrapper>
  );
};
const KeyWordsWrapper = styled.div`
  width: 100%;
  text-align: center;
  height: 300px;
`;
export default Step4;
