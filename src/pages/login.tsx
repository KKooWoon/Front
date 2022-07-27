import LoginSection from '@components/logIn-section';
import React from 'react';
import character from '@assets/images/character.png';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <Wrapper>
      <ImageSection>
        <div>
          <img src={character} />
          <p>
            꾸운과 함께<br/>꾸준히 운동해 보아요!
          </p>
        </div>
      </ImageSection>
      <LoginSection />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageSection = styled.section`
  margin-bottom: 52px;
  position: relative;
  & div {
    background: var(--bg-linear03);
    width: 248px;
    height: 249px;
    border-radius:50%;
    text-align: center;
    & img {
      transform:translateY(-17px);
    }
    & p{
      color:var(--primary-purple);
      font-weight:900;
      font-size:20px;
    }
  }
`;

export default LoginPage;
