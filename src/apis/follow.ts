import { AxiosError } from 'axios';
import { follow } from '@typings/follow';
import { useQuery } from 'react-query';
import request from './client';

const followListAPI = async (id: string) => {
  return await request({
    method: 'get',
    url: '/follow/followingList',
    params: {
      accountId: id,
    },
  }).then(res => {
    if (res.followerList.length !== 0) {
      const returnArray: Array<follow> = res.followerList.map(v => {
        const { description, profileImageUrl, targetId, targetNickname } = v;
        return {
          id: targetId,
          nickName: targetNickname,
          profileImageUrl,
          description,
        };
      });
      return returnArray;
    } else {
      return res.followerList;
    }
  });
};

export const getFollowList = (id: string) => {
  return useQuery<Array<follow>, AxiosError>('followingList', () => followListAPI(id));
};

const followerListAPI = async (id: string) => {
  return await request({
    method: 'get',
    url: '/follow/followerList',
    params: {
      accountId: id,
    },
  }).then(res => {
    if (res.followerList.length !== 0) {
      const returnArray: Array<follow> = res.followerList.map(v => {
        const { description, profileImageUrl, targetId, targetNickname } = v;
        return {
          id: targetId,
          nickName: targetNickname,
          profileImageUrl,
          description,
        };
      });
      return returnArray;
    } else {
      return res.followerList;
    }
  });
};

export const getFollowerList = (id:string) => {
  return useQuery<Array<follow>, AxiosError>('followerList', () => followerListAPI(id));
}


export const isFollowAPI =async (sourceId:string, targetId:string) => {
    return await request({
      method:'get',
      url:'/follow',
      params:{
        sourceId,
        targetId,
      }
    }).then(res =>{
      return res.following;
    })
}