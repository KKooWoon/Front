import { CustomButton } from '@components/race-list/race-list.style';
import React from 'react';
import { ButtonContents } from './login.style';
import { ReactComponent as KakaoIcon } from '@assets/icons/kakao.svg';
import { ReactComponent as NaverIcon } from '@assets/icons/naver.svg';
import { useNavigate } from 'react-router-dom';

/* 로그인 성공시 user-info 페이지로 이동 */
const LoginSection = () => {
  const navigate = useNavigate();
  return (
    <div>
      <CustomButton style={{ marginBottom: 12 }}>
        <ButtonContents onClick={()=> navigate('user-info')}>
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
