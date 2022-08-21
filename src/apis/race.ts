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
    },
  }).then(res => {
    console.log('raceList :', res);
    const { currentRaceListDto, pastRaceListDto } = res;
    const returnNowList:Array<race> = currentRaceListDto.currentInfoDtoList.map((v)=>{
      const {endedAt, memberCount, name, raceCode, raceId, raceTag, startedAt} = v;
      const endTime = dayjs(endedAt);
      const startTime = dayjs(startedAt);
      return {
        raceId,
        raceName:name,
        raceTag,
        raceCode,
        memberCount,
        Dday: endTime.diff(startTime,"d"),
      };
    });
    const returnPastList:Array<race> = pastRaceListDto.pastInfoDtoList.map((v)=>{
      const {endedAt, memberCount, name, raceCode, raceId, raceTag, startedAt} = v;
      const endTime = dayjs(endedAt);
      const startTime = dayjs(startedAt);
      return {
        raceId,
        raceName:name,
        raceTag,
        raceCode,
        memberCount,
        Dday: endTime.diff(startTime,"d"),
      };
    })
    return {
      allList: [...returnNowList, ...returnPastList],
      nowList: returnNowList,
      completeList: returnPastList
    };
  });
};

export const getRaceList = (id: string) => {
  return useQuery<RaceListType, AxiosError>('raceList', () => allRaceListAPI(id));
};
