import { AxiosError } from 'axios';
import { race, RaceListType } from '@typings/race';
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
      const { endedAt, memberCount, name, raceCode, raceId, raceTag, startedAt,description, isPrivate } = v.raceInfoDto;
      const endTime = dayjs(endedAt);
      const startTime = dayjs(startedAt);
      return {
        raceId,
        raceName: name,
        raceTag,
        raceCode,
        memberCount,
        Dday: endTime.diff(startTime, 'd'),
        isPrivate,
        isComplete:complete,
        description,
      };
    });
    const returnPastList: Array<race> = pastRaceListDto.pastInfoDtoList.map(v => {
      const { endedAt, memberCount, name, raceCode, raceId, raceTag, startedAt, isPrivate,description } = v;
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
        isPrivate,
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


