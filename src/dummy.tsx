import { raceType } from '@typings/race';
import { User } from '@typings/user';
import WorkoutSample from '@assets/images/workout-sample.png';
import { WorkOut } from '@typings/workout';
import { resultType } from '@typings/search';
import { follow } from '@typings/follow';
import { calendar } from '@typings/calendar';

export const userDummy: Array<Partial<User>> = [
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

export const RaceListDummy: Array<raceType> = [
  { raceId: 1, raceName: '레이스A', Dday: 134, hashTag: '다이어트' },
  { raceId: 2, raceName: '레이스B', Dday: 134, hashTag: '다이어트' },
  { raceId: 3, raceName: '레이스C', Dday: 134, hashTag: '다이어트' },
  { raceId: 4, raceName: '레이스D', Dday: 134, hashTag: '다이어트' },
  { raceId: 5, raceName: '레이스E', Dday: 134, hashTag: '다이어트' },
];
export const WorkOutListDummy: Array<WorkOut> = [
  { workOutId: 1, message: '운동 완료 동해물과 백두산이 마르고 닳도록', nick_name: '사용자1', img_Url: WorkoutSample },
  { workOutId: 1, message: '운동 완료 동해물과 백두산이 마르고 닳도록', nick_name: '사용자2', img_Url: WorkoutSample },
  { workOutId: 1, message: '운동 완료 동해물과 백두산이 마르고 닳도록', nick_name: '사용자3', img_Url: WorkoutSample },
  { workOutId: 1, message: '운동 완료 동해물과 백두산이 마르고 닳도록', nick_name: '사용자4', img_Url: WorkoutSample },
];

export const MyInfo: User = {
  id: 1,
  nick_name: 'my_Nick',
  age: 20,
  weight: 72,
  height: 179,
  level: 5,
  follower_list: [{ id: 2 }, { id: 3 }, { id: 4 }],
  following_list: [{ id: 6 }, { id: 7 }, { id: 8 }],
  interest: '다이어트',
  status_message: '오늘부터 식단 시작 가나다라마바사아자차카타파하 가나다라마바사알아자',
  exp: 50,
  profile_img: null,
};

export const userSearch: Array<resultType> = [
  {
    profileImg: null,
    nickName: '사용자1',
    isFollow: true,
  },
  {
    profileImg: null,
    nickName: '사용자2',
    isFollow: true,
  },
  {
    profileImg: null,
    nickName: '사용자3',
    isFollow: false,
  },
];

export const FollowerList: Array<follow> = [
  {
    id: 1,
    description: '오늘은 어깨 운동 하는 날 동해물과 백두산이 마르고 닳도록',
    profileImageUrl: null,
    nickName: 'user1',
  },
  {
    id: 3,
    description: '오늘은 어깨 운동 하는 날 동해물과 백두산이 마르고 닳도록',
    profileImageUrl: null,
    nickName: 'user2',
  },
  {
    id: 2,
    description: '오늘은 어깨 운동 하는 날 동해물과 백두산이 마르고 닳도록',
    profileImageUrl: null,
    nickName: 'user3',
  },
];

export const dummyCalendarData: Array<calendar> = [
  {
    date: '2022-07-01',
    data: {
      weight: {
        name: '운동A',
        weightList: [
          {
            sett: 3,
            setWeight: 100,
            reps: 10,
          },
          {
            sett: 2,
            setWeight: 12,
            reps: 14,
          },
          {
            sett: 1,
            setWeight: 12,
            reps: 12,
          },
        ],
      },
      cardio: {
        name: '운동B',
        cardioId: 1,
        duration: 2,
      },
      diet: {
        dietId: 1,
        name: '식단A',
        foodList: [
          {
            name: '연어샐러드',
            calorie: 1000,
            weight: 100,
          },
          {
            name: '닭가슴살',
            calorie: 1000,
            weight: 100,
          },
        ],
      },
    },
  },
  {
    date: '2022-07-04',
    data: {
      weight: {
        name: '운동A',
        weightList: [
          {
            sett: 3,
            setWeight: 100,
            reps: 10,
          },
          {
            sett: 2,
            setWeight: 12,
            reps: 4,
          },
          {
            sett: 1,
            setWeight: 12,
            reps: 12,
          },
        ],
      },
      cardio: {
        name: '운동B',
        cardioId: 1,
        duration: 2,
      },
      diet: {
        dietId: 1,
        name: '식단A',
        foodList: [
          {
            name: '연어샐러드',
            calorie: 1000,
            weight: 100,
          },
          {
            name: '닭가슴살',
            calorie: 1000,
            weight: 100,
          },
        ],
      },
    },
  },
  {
    date: '2022-07-05',
    data: {
      weight: {
        name: '운동A',
        weightList: [
          {
            sett: 3,
            setWeight: 100,
            reps: 10,
          },
          {
            sett: 2,
            setWeight: 12,
            reps: 4,
          },
          {
            sett: 1,
            setWeight: 12,
            reps: 12,
          },
        ],
      },
      cardio: {
        name: '운동B',
        cardioId: 1,
        duration: 2,
      },
      diet: {
        dietId: 1,
        name: '식단A',
        foodList: [
          {
            name: '연어샐러드',
            calorie: 1000,
            weight: 100,
          },
          {
            name: '닭가슴살',
            calorie: 1000,
            weight: 100,
          },
        ],
      },
    },
  },
  {
    date: '2022-07-06',
    data: {
      weight: {
        name: '운동A',
        weightList: [
          {
            sett: 3,
            setWeight: 100,
            reps: 10,
          },
          {
            sett: 2,
            setWeight: 12,
            reps: 4,
          },
          {
            sett: 1,
            setWeight: 12,
            reps: 12,
          },
        ],
      },
      cardio: {
        name: '운동B',
        cardioId: 1,
        duration: 2,
      },
      diet: {
        dietId: 1,
        name: '식단A',
        foodList: [
          {
            name: '연어샐러드',
            calorie: 1000,
            weight: 100,
          },
          {
            name: '닭가슴살',
            calorie: 1000,
            weight: 100,
          },
        ],
      },
    },
  },
  {
    date: '2022-07-07',
    data: {
      weight: {
        name: '운동A',
        weightList: [
          {
            sett: 3,
            setWeight: 100,
            reps: 10,
          },
          {
            sett: 2,
            setWeight: 12,
            reps: 4,
          },
          {
            sett: 1,
            setWeight: 12,
            reps: 12,
          },
        ],
      },
      cardio: {
        name: '운동B',
        cardioId: 1,
        duration: 2,
      },
      diet: {
        dietId: 1,
        name: '식단A',
        foodList: [
          {
            name: '연어샐러드',
            calorie: 1000,
            weight: 100,
          },
          {
            name: '닭가슴살',
            calorie: 1000,
            weight: 100,
          },
        ],
      },
    },
  },
  {
    date: '2022-07-25',
    data: {
      weight: {
        name: '운동A',
        weightList: [
          {
            sett: 3,
            setWeight: 100,
            reps: 10,
          },
          {
            sett: 2,
            setWeight: 12,
            reps: 4,
          },
          {
            sett: 1,
            setWeight: 12,
            reps: 12,
          },
        ],
      },
      cardio: {
        name: '운동B',
        cardioId: 1,
        duration: 2,
      },
      diet: {
        dietId: 1,
        name: '식단A',
        foodList: [
          {
            name: '연어샐러드',
            calorie: 1000,
            weight: 100,
          },
          {
            name: '닭가슴살',
            calorie: 1000,
            weight: 100,
          },
        ],
      },
    },
  },
];
