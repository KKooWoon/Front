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
  foodList: Array<{
    name: string;
    calorie?: number;
    weight?: number;
  }>;
};

export type weight = {
  body?: string;
  name: string;
  weightSetList: Array<{
    reps: number;
    setWeight: number;
    sett: number;
  }>;
};

export type WorkOutList = {
  weightList: Array<weight>;
  cardioList: Array<cardio>;
  dietList: Array<diet>;
};
