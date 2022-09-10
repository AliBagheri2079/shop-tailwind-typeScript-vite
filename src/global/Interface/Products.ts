//* Todo type interface
export interface IProducts {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
  rating?: {
    count: number;
    rate: number
  };
}
  