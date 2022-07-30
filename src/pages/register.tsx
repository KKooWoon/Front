import Register from '@components/register';
import React from 'react';
import styled from 'styled-components';

const RegisterPage = () => {
  return (
    <Wrapper>
      <Register />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
`;

export default RegisterPage;
