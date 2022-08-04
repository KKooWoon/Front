import Register from '@components/register';
import React from 'react';
import styled from 'styled-components';

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
  overflow-y: scroll hidden;
  & span {
    font-family: 'SpoqaHanSansNeo';
    font-weight: 500;
    font-size: 16px;
    color: #101010;
    margin-left: 20px;
  }
`;

export default RegisterPage;
