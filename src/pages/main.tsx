import MainProfile from '@components/main-profile';
import React from 'react';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <Wrapper>
      <MainProfile/>
      메인 페이지 입니다.
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default MainPage;
