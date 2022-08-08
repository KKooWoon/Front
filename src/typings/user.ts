export type User= {
  id:number,
  nick_name:string;
  age:number;
  weight:number;
  height:number;
  exp:number;
  bodyfat_pct?:number;
  skeletal_muscle_mass?:number;
  interest:string;
  status_message?:string;
  level:number;
  follower_list:Array<{id: number}>;
  following_list:Array<{id: number}>;
  profile_img:string|null;
}

export type OnBoading ={
  nickname:string;
  age:number;
  body_spec:{
    height:number | string;
    weight:number | string;
    fat?:number | string;
    muscle?:number | string;
  };
  interest:string;
  isActive:boolean;
  inputFocus:boolean;
}

export type raceUser = {
  profileImageUrl:string |null;
  nickName:string;
  description:string|null;
}