import { AxiosError } from 'axios';
import { WorkOutList, WorkOut } from '@typings/workout';
import { useQuery } from 'react-query';
import request from './client';
import { Gallery } from '@typings/race';
import dayjs from 'dayjs';

const workoutListAPI = async (accountId: number, raceId: number, date: string) => {
  return await request({
    method: 'get',
    url: '/record',
    params: {
      accountId,
      raceId,
      date,
    },
  })
    .then(res => {
      const { cardioDtoList, dietDtoList, weightDtoList, workoutRecordId } = res;
      const returnWorkoutList: WorkOutList = {
        recordId: workoutRecordId,
        cardioList: cardioDtoList,
        dietList: dietDtoList,
        weightList: weightDtoList,
      };
      return returnWorkoutList;
    })
    .catch((e: any) => {
      return {
        cardioList: [],
        dietList: [],
        weightList: [],
      };
    });
};

export const getWorkoutList = (accountId: number, raceId: number, date: string) => {
  return useQuery<WorkOutList, AxiosError>('workoutList', () => workoutListAPI(accountId, raceId, date), {
    enabled: !!raceId,
    retry: false,
  });
};

const workoutPreviewListAPI = async (accountId: string) => {
  return await request({
    method: 'get',
    url: '/record/recent',
    params: {
      accountId,
    },
  }).then(res => {
    const returnArray: Array<WorkOut> = res.recentRecordList.map(v => ({
      workOutId: v.workoutRecordId,
      message: v.description,
      nick_name: v.recordDate,
      img_Url: v.photoUrl,
    }));
    return returnArray;
  });
};

export const getWorkoutPreviewList = (accountId: string) => {
  return useQuery<Array<WorkOut>>(['workout', 'preview', accountId], () => workoutPreviewListAPI(accountId));
};

const workoutDatedListAPI = async (raceId: number) => {
  return await request({
    method: 'get',
    url: '/record/race',
    params: {
      raceId,
    },
  }).then(res => {
    const { oneDayRecords } = res;
    if (oneDayRecords === null) return [];
    const returnArray: Array<Gallery> = oneDayRecords.map(v => {
      return {
        date: v.date,
        workoutList: v.oneDayRaceRecordList.map(val => {
          const { description, photoUrl, recordDate, workoutRecordId } = val;
          return {
            workOutId: workoutRecordId,
            message: description,
            nick_name: dayjs(recordDate).format('YYYY-MM-DD'),
            img_Url: photoUrl,
          };
        }),
      };
    });
    return returnArray;
  });
};

export const getGalleryList = (raceId: number) => {
  return useQuery<Array<Gallery>>(['gallery', raceId], () => workoutDatedListAPI(raceId));
};

export const confirmAPI = async (data: FormData) => {
  return await request({
    method: 'post',
    url: '/confirm',
    body: data,
    header: {
      'content-type': 'multipart/form-data',
    },
  });
};
