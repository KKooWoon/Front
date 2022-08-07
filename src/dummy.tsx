import { raceType } from '@typings/race';
import { User } from '@typings/user';
import WorkoutSample from '@assets/images/workout-sample.png';
import { WorkOut } from '@typings/workout';

export const userDummy:Array<Partial<User>> = [
  {
    id: 1,
    nick_name: '나',
    profile_img: null,
  },
  {
    id: 2,
    nick_name: 'user1',
    profile_img: null,
  },
  {
    id: 3,
    nick_name: 'user2',
    profile_img: null,
  },
  {
    id: 4,
    nick_name: 'user3',
    profile_img: null,
  },
  {
    id: 5,
    nick_name: 'user4',
    profile_img: null,
  },
  {
    id: 6,
    nick_name: 'user5',
    profile_img: null,
  },
  {
    id: 7,
    nick_name: 'user6',
    profile_img: null,
  },
  {
    id: 8,
    nick_name: 'user7',
    profile_img: null,
  },
  {
    id: 9,
    nick_name: 'user8',
    profile_img: null,
  },
  {
    id: 10, 
    nick_name: 'user9',
    profile_img: null,
  },
];

export const RaceListDummy:Array<raceType> = [
  { raceId: 1, raceName: '레이스A', Dday: 134, hashTag: '다이어트' },
  { raceId: 2, raceName: '레이스B', Dday: 134, hashTag: '다이어트' },
  { raceId: 3, raceName: '레이스C', Dday: 134, hashTag: '다이어트' },
  { raceId: 4, raceName: '레이스D', Dday: 134, hashTag: '다이어트' },
  { raceId: 5, raceName: '레이스E', Dday: 134, hashTag: '다이어트' },
];
export const WorkOutListDummy: Array<WorkOut> = [
  {workOutId: 1, message: "운동 완료 동해물과 백두산이 마르고 닳도록", nick_name:'사용자1',img_Url:WorkoutSample},
  {workOutId: 1, message: "운동 완료 동해물과 백두산이 마르고 닳도록", nick_name:'사용자2',img_Url:WorkoutSample},
  {workOutId: 1, message: "운동 완료 동해물과 백두산이 마르고 닳도록", nick_name:'사용자3',img_Url:WorkoutSample},
  {workOutId: 1, message: "운동 완료 동해물과 백두산이 마르고 닳도록", nick_name:'사용자4',img_Url:WorkoutSample},
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
  status_message:'오늘부터 식단 시작 가나다라마바사아자차카타파하 가나다라마바사알아자',
  exp:50,
  profile_img:null,
}