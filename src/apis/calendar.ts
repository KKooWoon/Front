import { AxiosError } from 'axios';
import { calendar } from '@typings/calendar';
import { useQuery } from 'react-query';
import request from './client';

const allCalendarAPI = async (accountId: string, year: number, month: number) => {
  return await request({
    method: 'get',
    url: '/record/month/all',
    params: {
      accountId,
      year,
      month,
    },
  }).then(res => {
    const returnArray: Array<calendar> = res.oneMonthRecordDtoList.map(v => {
      const { recordDate, recordWithRaceDtoList } = v;
      const { cardioDtoList, weightDtoList, dietDtoList } = recordWithRaceDtoList.reduce(
        (acc, cur) => {
          const { cardioDtoList, weightDtoList, dietDtoList } = cur;
          return {
            cardioDtoList:[...acc.cardioDtoList, ...cardioDtoList],
            weightDtoList:[...acc.weightDtoList, ...weightDtoList],
            dietDtoList:[...acc.dietDtoList, ...dietDtoList],
          };
        },
        {
          cardioDtoList: [],
          weightDtoList: [],
          dietDtoList: [],
        }
      );
      return {
        date: recordDate,
        data: {
          weightList: weightDtoList,
          cardioList: cardioDtoList,
          dietList: dietDtoList,
        },
      };
    });
    return returnArray;
  });
};
const raceCalendarAPI = async (accountId: string, year: number, month: number, raceId: number) => {
  return await request({
    method: 'get',
    url: '/record/month/one',
    params: {
      accountId,
      year,
      month,
      raceId,
    },
  }).then(res => {
    const returnArray: Array<calendar> = res.oneMonthRecordList.map(v => {
      const { recordDate, cardioDtoList, dietDtoList, weightDtoList } = v;
      return {
        date: recordDate,
        data: {
          weightList: weightDtoList,
          cardioList: cardioDtoList,
          dietList: dietDtoList,
        },
      };
    });
    return returnArray;
  });
};
export const getCalendarData = (accountId: string, year: number, month: number, raceId: number | 'ALL') => {
  if (raceId === 'ALL') {
    return useQuery<Array<calendar>, AxiosError>(['calendar', month, 'all'], () =>
      allCalendarAPI(accountId, year, month)
    );
  } else {
    return useQuery<Array<calendar>, AxiosError>(['calendar', month, raceId], () =>
      raceCalendarAPI(accountId, year, month, raceId)
    );
  }
};
