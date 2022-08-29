export type WorkOut = {
  workOutId: number;
  message: string;
  nick_name: string;
  img_Url: string;
};

export type cardio = {
  cardioId: number;
  calorie?: number;
  duration?: number;
  name: string;
};

export type diet = {
  dietId: number;
  name: string;
  foodDtoList: Array<{
    name: string;
    calorie?: number;
    weight?: number;
  }>;
};

export type weight = {
  body?: string;
  name: string;
  weightSetDtoList: Array<{
    reps: number;
    setWeight: number;
    sett: number;
    setId?:number;
  }>;
};

export type WorkOutList = {
  recordId?:number;
  weightList: Array<weight>;
  cardioList: Array<cardio>;
  dietList: Array<diet>;
};
