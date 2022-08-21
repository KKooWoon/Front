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
  return useQuery<Array<follow>, AxiosError>('followList', () => followListAPI(id));
};
