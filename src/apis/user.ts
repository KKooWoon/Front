import { AxiosError } from 'axios';
import { UserType } from '@typings/user';
import { useQuery } from 'react-query';
import request, { client } from './client';
import { resultType } from '@typings/search';

export function signUpAPI(userData: {
  age: number;
  bodyFat: number;
  height: number;
  kakaoId: string;
  nickname: string;
  skeletalMuscleMass: number;
  weight: number;
  keyword: string;
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
  }).then(res => {
    res.profileImageUrl = res.photoUrl;
    delete res.photoUrl;
    return res;
  });
};

export const getMyInfo = (id: string) => {
  return useQuery<UserType, AxiosError>('my-info', () => myinfoAPI(id), {
    staleTime: Infinity,
  });
};

const userSearchAPI = async (nickname: string) => {
  return await request({
    method: 'get',
    url: '/user/user-list',
    params: {
      nickname,
    },
  }).then(res => {
    const returnArray: Array<resultType> = res.userInfoWithFollowList.map(v => ({
      accountId: v.accountId,
      profileImg: v.photoUrl,
      nickName: v.nickname,
      isFollow: v.follow,
    }));
    return returnArray;
  });
};

export const getUserSearch = (nickname:string) => {
  return useQuery<Array<resultType>>(['search', nickname], () => userSearchAPI(nickname));
}
