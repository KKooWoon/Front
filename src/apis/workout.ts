import { AxiosError } from 'axios';
import { WorkOutList } from '@typings/workout'
import { useQuery } from 'react-query'
import request from './client'

const workoutListAPI =async (accountId: number, raceId:number, date:string ) => {
  return await request({
    method:'get',
    url:'/record',
    params:{
      accountId,
      raceId,
      date,
    }
  }).then(res => {
    const {cardioDtoList, deitDtoList, weightDtoList } = res
    const returnWorkoutList : WorkOutList = {
      cardioList: cardioDtoList,
      dietList: deitDtoList,
      weightList: weightDtoList
    };
    return returnWorkoutList;
  })
}

export const getWorkoutList = (accountId: number, raceId:number, date:string ) => {
  return useQuery<WorkOutList, AxiosError>('workoutList', ()=> workoutListAPI(accountId, raceId, date), {
    enabled:!!raceId, 
  });
}