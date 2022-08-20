import { useQuery } from 'react-query';
import request from './client';


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
    return {
      allList: [...currentRaceListDto.currentInfoDtoList, ...pastRaceListDto.pastInfoDtoList],
      nowList: currentRaceListDto.currentInfoDtoList,
      completeList: pastRaceListDto.pastInfoDtoList,
    };
  });
};

export const getRaceList = (id: string) => {
  return useQuery('raceList', () => allRaceListAPI(id));
};
