import { AxiosError } from 'axios';
import { follow } from '@typings/follow';
import { useQuery } from 'react-query';
import request from './client';

const followListAPI = async (id: string) => {
  return await request({
    method: 'get',
    url: 'follow/followingList',
    params: {
      accountId: id,
    },
  }).then(res => {
    if (res.followerList.length !== 0) {
      const { description, profileImageUrl, targetId, targetNickname } = res.followerList;
      return {
        id: targetId,
        nickName: targetNickname,
        profileImageUrl,
        description,
      };
    } else {
      return res.followerList;
    }
  });
}

export const getFollowList = (id: string) => {
  return useQuery('followList', () => followListAPI(id));
  
};
