export interface Product {
  id: number;
  type: string;
  name: string;
  image: Array<string>;
  attributes: {
    material: string;
    size: string;
    price: number;
    description: string;
    style: string;
    shape: string;
  };
}
