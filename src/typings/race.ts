export type raceType = {
  raceId:number;
  raceName:string;
  Dday:number;
  hashTag:string;
  isPrivate:boolean;
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