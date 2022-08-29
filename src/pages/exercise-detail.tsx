import React from 'react';
import styled from 'styled-components';
import ExerciseDetail from '@components/exercise-detail';

const ExerciseDetailPage = () => {
  return (
    <Wrapper>
      <ExerciseDetail />
      <NextBtn>다음으로</NextBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  padding-top: 40px;
  overflow-y: scroll hidden;
  & span {
    font-family: 'SpoqaHanSansNeo';
    font-weight: 500;
    font-size: 16px;
    color: #101010;
    margin-left: 20px;
  }
`;

export const NextBtn = styled.button`
  width: 100%;
  height: 93px;
  background-color: #d4d2d9;
  font-family: 'SpoqaHanSansNeo';
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  margin-top: 90px;
  padding-top: 19px;
  padding-bottom: 51px;
`;

export default ExerciseDetailPage;
