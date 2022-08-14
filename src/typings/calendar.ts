import { cardio, diet, weight } from './workout';

export type calendar = {
  date: string;
  data: calendarData
};

export type calendarData = {
  cardio?: cardio;
  diet?: diet;
  weight?: weight;
};
