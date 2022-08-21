import { AxiosError } from 'axios';
import { UserType } from '@typings/user';
import { useQuery } from 'react-query';
import request, { client } from './client';

export function signUpAPI(userData: {
  age: number;
  bodyFat: number;
  height: number;
  kakaoId: string;
  nickname: string;
  skeletalMuscleMass: number;
  weight: number;
}) {
  return request({
    method: 'post',
    url: '/user/sign-up',
    body: userData,
  });
}

function mainAPI(id: string) {
  return request({
    method: 'get',
    url: '/user/main-page',
    params: { accountId: id },
  });
}
export const getMainPage = (id: string) => {
  const { data } = useQuery('main-page', () => mainAPI(id));
  return data;
};

const myinfoAPI = async (id: string) => {
  return await request({
    method: 'get',
    url: '/user/info',
    params: { accountId: id },
  });
};

export const getMyInfo = (id: string) => {
  return  useQuery<UserType, AxiosError>('my-info', () => myinfoAPI(id), {
    staleTime: Infinity,
  });
};
