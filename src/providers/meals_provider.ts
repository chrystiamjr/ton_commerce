import IMeal from "../interfaces/meal.interface";
import ApiProvider from "./api_provider";
import IRequest from "../interfaces/request.interface";

export default class MealsProvider extends ApiProvider {
  static SEARCH_URL = '/search.php?s=';

  static async fetchMeals(filter: string = ''): Promise<IMeal[]> {
    const {data} = await this.fetch(this.SEARCH_URL + filter);
    const response: IRequest = data;

    return response.meals?.map((item) => {
      const ingredients = [];
      for (let i = 1; i < 21; i++) {
        const key = 'strIngredient'+i;
        const copy: any = Object.create(item);

        if(copy[key]?.length > 0) ingredients.push(copy[key]);
      }

      return {
        id: item.idMeal,
        name: item.strMeal,
        category: item.strCategory,
        region: item.strArea,
        thumbnail: item.strMealThumb,
        tags: item.strTags?.split(',').map(e => e.trim()) ?? [],
        price: 15.90,
        ingredients
      } as IMeal;
    }) ?? [];
  }
}
