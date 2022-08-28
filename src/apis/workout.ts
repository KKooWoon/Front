import { AxiosError } from 'axios';
import { WorkOutList, WorkOut } from '@typings/workout';
import { useQuery } from 'react-query';
import request from './client';

const workoutListAPI = async (accountId: number, raceId: number, date: string) => {
  return await request({
    method: 'get',
    url: '/record',
    params: {
      accountId,
      raceId,
      date,
    },
  }).then(res => {
    const { cardioDtoList, deitDtoList, weightDtoList } = res;
    const returnWorkoutList: WorkOutList = {
      cardioList: cardioDtoList,
      dietList: deitDtoList,
      weightList: weightDtoList,
    };
    return returnWorkoutList;
  });
};

export const getWorkoutList = (accountId: number, raceId: number, date: string) => {
  return useQuery<WorkOutList, AxiosError>('workoutList', () => workoutListAPI(accountId, raceId, date), {
    enabled: !!raceId,
  });
};

const workoutPreviewListAPI = async (accountId: string) => {
  return await request({
    method:'get',
    url:'/record/recent',
    params:{
      accountId
    }
  }).then(res => {
    const returnArray : Array<WorkOut> = res.recentRecordList.map(v => ({
      workOutId:v.workoutRecordId,
      message:v.description,
      nick_name:v.recordDate,
      img_Url:v.photoUrl,
    }));
    return returnArray;
  })
};

export const getWorkoutPreviewList = (accountId:string) => {
  return useQuery(['workout', 'preview'], () => workoutPreviewListAPI(accountId));
}

const workoutDatedListAPI = async (raceId:string) => {
  return await request({
    method:'get',
    url:'/record/race',
    params:{
      raceId,
    }
  }).then(res => {
    /* recent랑 똑같은 거 들어와야함 */
    return res;
  })
  
}