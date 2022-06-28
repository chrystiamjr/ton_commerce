import {atom} from 'recoil';
import IMeal from "../interfaces/meal.interface";

export const mealsState = atom({
  key: 'mealsState',
  default: [] as IMeal[],
});
