import {atom, selector} from 'recoil';
import IMeal from "../interfaces/meal.interface";

export const cartState = atom({
  key: 'cartState',
  default: [] as IMeal[],
});

export const totalPriceSelector = selector({
  key: 'totalPriceSelector',
  get: ({ get }): number => {
    const allItems = get(cartState);
    let value = 0;
    for (const item of allItems) {
      value += item.price;
    }

    return value;
  }
})
