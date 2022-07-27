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
    height:number;
    weight:number;
    fat:number;
    muscle:number;
  };
  interest:Array<string>;
  isActive:boolean;
}