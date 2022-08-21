import { WorkOutList } from '@typings/workout';
import { cardio, diet, weight } from './workout';

export type calendar = {
  date: string;
  data: WorkOutList;
};

export type calendarData = {
  cardio?: cardio;
  diet?: diet;
  weight?: weight;
};
