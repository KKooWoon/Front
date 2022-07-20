import MainProfile from '@components/main-profile';
import UserCarousel from '@components/user-carousel';
import React from 'react';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <Wrapper>
      <MainProfile/>
      <UserCarousel />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color:#e9e9e9;
`;

export default MainPage;
