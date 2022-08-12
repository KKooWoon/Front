export type WorkOut = {
  workOutId: number;
  message: string;
  nick_name: string;
  img_Url: string;
};

export type cardio = {
  cardioId: number;
  calolrie?: number;
  duration?: number;
  name: string;
};

export type diet = {
  dietId: number;
  name: string;
  foodList: Array<{
    name: string;
    calorie?: number;
    weight?: number;
  }>;
};

export type weight = {
  body?:string;
  name:string;
  weightList:Array<{
    reps:number;
    setWeight:number;
    sett:number;
  }>
}
