import Register from '@components/register';
import React from 'react';
import styled from 'styled-components';
import RaceList from '@components/race-list';

const RegisterPage = () => {
  return (
    <Wrapper>
      <span>챌린지에서 진행할 운동을 등록해보세요.</span>
      <Register />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #f9f9f9;
  padding-top: 46px;
  overflow-x: hidden;
  overflow-y: auto;
  & span {
    font-family: 'SpoqaHanSansNeo';
    font-weight: 500;
    font-size: 16px;
    color: #101010;
    margin-left: 20px;
  }
`;

const UserInfoWrapper = styled.section`
  margin-top: 12px;
  width: 100%;
  flex: 1;
  background-color: #fff;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
`;

export default RegisterPage;
