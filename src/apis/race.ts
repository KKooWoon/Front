import { follow } from '@typings/follow';
import { AxiosError } from 'axios';
import { race, RaceListType, Ranking } from '@typings/race';
import { useQuery } from 'react-query';
import request from './client';
import dayjs from 'dayjs';

const allRaceListAPI = async (id: string) => {
  return await request({
    method: 'get',
    url: '/race/participate/info/all',
    params: {
      accountId: id,
      date: dayjs().format('YYYY-MM-DD'),
    },
  }).then(res => {
    console.log('raceList :', res);
    const { currentRaceWithConfirmListDto, pastRaceListDto } = res;
    const returnNowList: Array<race> = currentRaceWithConfirmListDto.currentRaceInfoWithConfirmDto.map(v => {
      const { complete } = v;
      const { endedAt, memberCount, name, raceCode, raceId, raceTag, startedAt, description, privateOrNot } =
        v.raceInfoDto;
      const endTime = dayjs(endedAt);
      const startTime = dayjs(startedAt);
      return {
        raceId,
        raceName: name,
        raceTag,
        raceCode,
        memberCount,
        Dday: endTime.diff(startTime, 'd'),
        isPrivate: privateOrNot,
        isComplete: complete,
        description,
      };
    });
    const returnPastList: Array<race> = pastRaceListDto.pastInfoDtoList.map(v => {
      const { endedAt, memberCount, name, raceCode, raceId, raceTag, startedAt, privateOrNot, description } = v;
      const endTime = dayjs(endedAt);
      const startTime = dayjs(startedAt);
      return {
        raceId,
        raceName: name,
        raceTag,
        raceCode,
        memberCount,
        Dday: endTime.diff(startTime, 'd'),
        startedAt: startTime.format('YYYY-MM-DD'),
        endedAt: endTime.format('YYYY-MM-DD'),
        isPrivate: privateOrNot,
        description,
      };
    });
    return {
      allList: [...returnNowList, ...returnPastList],
      nowList: returnNowList, // 진행 중인 레이스
      completeList: returnPastList, // 완료한 레이스
    };
  });
};

export const getRaceList = (id: string) => {
  return useQuery<RaceListType, AxiosError>(['raceList', id], () => allRaceListAPI(id));
};

const tagRaceListAPI = async (tag: string | undefined) => {
  return await request({
    method: 'get',
    url: '/race/tag-search',
    params: {
      tag,
    },
  }).then(res => {
    const { currentInfoDtoList } = res;
    const returnArray: Array<race> = currentInfoDtoList.map(v => {
      const { endedAt, memberCount, name, raceCode, raceId, raceTag, startedAt, privateOrNot, description } = v;
      const endTime = dayjs(endedAt);
      const startTime = dayjs(startedAt);
      return {
        raceId,
        raceName: name,
        raceTag,
        raceCode,
        memberCount,
        Dday: endTime.diff(startTime, 'd'),
        startedAt: startTime.format('YYYY-MM-DD'),
        endedAt: endTime.format('YYYY-MM-DD'),
        isPrivate: privateOrNot,
        description,
      };
    });
    return returnArray;
  });
};

export const getTagRaceList = (tag: string | undefined) => {
  return useQuery<Array<race>>(['tagList', tag], () => tagRaceListAPI(tag), {
    enabled: !!tag,
  });
};

export const raceSearchAPI = async (name: string) => {
  return await request({
    method: 'get',
    url: '/race/name-search',
    params: {
      name,
    },
  }).then(res => {
    const { currentInfoDtoList } = res;
    const returnArray: Array<race> = currentInfoDtoList.map(v => {
      const { endedAt, memberCount, name, raceCode, raceId, raceTag, startedAt, privateOrNot, description } = v;
      const endTime = dayjs(endedAt);
      const startTime = dayjs(startedAt);
      return {
        raceId,
        raceName: name,
        raceTag,
        raceCode,
        memberCount,
        Dday: endTime.diff(startTime, 'd'),
        startedAt: startTime.format('YYYY-MM-DD'),
        endedAt: endTime.format('YYYY-MM-DD'),
        isPrivate: privateOrNot,
        description,
      };
    });
    return returnArray;
  });
};

const raceRankingAPI = async (raceId: number) => {
  return await request({
    method: 'get',
    url: '/race/ranking',
    params: {
      raceId,
    },
  }).then(res => {
    const { userInfoWithScoreDtoList } = res;

    return userInfoWithScoreDtoList.map(v => {
      const { accountId, consecutiveDays, nickname, photoUrl, score } = v;
      return {
        id: accountId,
        nickName: nickname,
        accDay: consecutiveDays,
        score,
        profileImgaeUrl: photoUrl,
      } as Ranking;
    }) as Array<Ranking>;
  });
};

export const getRankingList = (raceId: number) => {
  return useQuery<Array<Ranking>>(['ranking', raceId], () => raceRankingAPI(raceId));
};

const raceUserListAPI =async (raceId:string) => {
  return await request({
    method:'get',
    url:'/race/user-list',
    params:{
      raceId,
    }
  }).then(res =>{
    const returnArray:Array<follow> = res.userInfoDtoList.map(v =>{
      const {accountId, description, photoUrl, nickname} = v;
      return {
        id:accountId,
        description,
        profileImageUrl:photoUrl,
        nickName:nickname,
      }
    })
    return returnArray;
  })
}

export const getRaceUserList = (raceId:string) => {
  return useQuery<Array<follow>>(['raceUserList',raceId], ()=> raceUserListAPI(raceId));
}