export default interface IMeal {
  id: string;
  name: string;
  category: string;
  region: string;
  thumbnail: string;
  tags: string[];
  ingredients: string[];
  price: number;
}
