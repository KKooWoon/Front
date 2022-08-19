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
