import { WorkOut } from '@typings/workout';
export type raceType = {
  raceId:number;
  raceName:string;
  Dday:number;
  hashTag:string;
  isPrivate:boolean;
  memberCount:number;
} // 옛날꺼(지워야함)

export type race = {
  raceId:number;
  raceName:string;
  Dday:number;
  raceTag:string;
  raceCode:string;
  memberCount:number;
  startedAt:string;
  endedAt:string;
  isPrivate:boolean
}
export type RaceListType = {
  allList:Array<race>;
  nowList:Array<race>;
  completeList:Array<race>;
  
}

export type Ranking = {
  profileImgaeUrl:string |null;
  nickName:string;
  id:number;
  score:number;
  accDay:number;
}

export type Gallery = {
  date:string;
  workoutList:Array<WorkOut>;
}