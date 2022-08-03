import { raceType } from '@typings/race';
import { User } from '@typings/user';
import WorkoutSample from '@assets/images/workout-sample.png';

export const userDummy = [
  {
    id: 0,
    nickname: '나',
    imageUrl: null,
  },
  {
    id: 1,
    nickname: 'user1',
    imageUrl: null,
  },
  {
    id: 2,
    nickname: 'user2',
    imageUrl: null,
  },
  {
    id: 3,
    nickname: 'user3',
    imageUrl: null,
  },
  {
    id: 4,
    nickname: 'user4',
    imageUrl: null,
  },
  {
    id: 5,
    nickname: 'user5',
    imageUrl: null,
  },
  {
    id: 6,
    nickname: 'user6',
    imageUrl: null,
  },
  {
    id: 7,
    nickname: 'user7',
    imageUrl: null,
  },
  {
    id: 8,
    nickname: 'user8',
    imageUrl: null,
  },
  {
    id: 9,
    nickname: 'user9',
    imageUrl: null,
  },
];

export const RaceListDummy:Array<raceType> = [
  { raceId: 1, raceName: '레이스A', Dday: 134, hashTag: '다이어트' },
  { raceId: 2, raceName: '레이스B', Dday: 134, hashTag: '다이어트' },
  { raceId: 3, raceName: '레이스C', Dday: 134, hashTag: '다이어트' },
  { raceId: 4, raceName: '레이스D', Dday: 134, hashTag: '다이어트' },
  { raceId: 5, raceName: '레이스E', Dday: 134, hashTag: '다이어트' },
];
export const WorkOutListDummy = [
  {workOutId: 1, message: "운동 완료", createdAt:'2022.07.10',img_Url:WorkoutSample},
  {workOutId: 1, message: "운동 완료", createdAt:'2022.07.10',img_Url:WorkoutSample},
  {workOutId: 1, message: "운동 완료", createdAt:'2022.07.10',img_Url:WorkoutSample},
  {workOutId: 1, message: "운동 완료", createdAt:'2022.07.10',img_Url:WorkoutSample},
]

export const MyInfo :User = {
  id:1,
  nick_name: 'my_Nick',
  age:20,
  weight:72,
  height:179,
  level:5,
  follower_list:[{id:2}, {id:3}, {id:4}],
  following_list:[{id:6}, {id:7}, {id:8}],
  interest:'다이어트',
  status_message:'오늘부터 식단 시작',
  exp:50,
  profile_img:null,
}