import axios from "axios";

export default class ApiProvider {
  static BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

  static async fetch(path: string): Promise<any> {
    const url = this.BASE_URL + path;
    return await axios.get(url);
  }
}
