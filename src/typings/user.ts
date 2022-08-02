export type User= {
  id:number,
  nick_name:string;
  age:number;
  weight:number;
  height:number;
  exp:number;
  bodyfat_pct:number;
  skeletal_muscle_mass:number;
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