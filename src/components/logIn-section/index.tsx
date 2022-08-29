import { CustomButton } from '@components/race-list/race-list.style';
import React from 'react';
import { ButtonContents } from './login.style';
import { ReactComponent as KakaoIcon } from '@assets/icons/kakao.svg';
import { ReactComponent as NaverIcon } from '@assets/icons/naver.svg';
import { useNavigate } from 'react-router-dom';

/* 로그인 성공시 user-info 페이지로 이동 */
const LoginSection = () => {
  console.log(process.env.REACT_APP_KAKAO_API_KEY);
  console.log(process.env.REACT_APP_REDIRECT_URL_LOCAL);
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL_LOCAL}&response_type=code`;
  const navigate = useNavigate();
  return (
    <div>
      <CustomButton style={{ marginBottom: 12 }}>
        <ButtonContents href={KAKAO_AUTH_URL}>
          <span>
            <KakaoIcon />
          </span>
          <p>카카오톡 으로 로그인 하기</p>
        </ButtonContents>
      </CustomButton>
      <CustomButton>
        <ButtonContents>
          <span>
            <NaverIcon />
          </span>
          <p> 네이버로 로그인 하기</p>
        </ButtonContents>
      </CustomButton>
    </div>
  );
};

export default LoginSection;
