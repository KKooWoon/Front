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
  })
}

export const getWorkoutList = (accountId: number, raceId:number, date:string ) => {
  return useQuery('workoutList', ()=> workoutListAPI(accountId, raceId, date), {
    enabled:!!raceId, 
  });
}