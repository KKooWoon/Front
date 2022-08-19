import { client } from '@apis/client';
import axios, { AxiosError } from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ServerError {
  code: string;
  kakaoId: string;
  message: string;
  status: number;
}

const KaKaoRedirect = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();
  console.log('code :', code);
  useEffect(() => {
    const getLogin = async () => {
      try {
        const rst = await client.get('/user/oauth/kakao', { params: { code } }).then(res => {
          return res.data;
        });
        const {refreshToken} =rst;
        localStorage.setItem('token', refreshToken);
        navigate('/main');
      } catch (e) {
        const err = e as AxiosError<ServerError>;
        if (err.response) {
          const { kakaoId } = err.response.data;
          navigate('/user-info', { state: kakaoId });
        }
      }
    };
    getLogin();
  }, []);

  return <div>로그인 로딩 중...</div>;
};

export default KaKaoRedirect;
