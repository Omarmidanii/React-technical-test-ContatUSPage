import category from "./category";

export default interface product {
  id: number;
  name: string;
  description: string;
  price: string;
  quantity: number;
  created_at: Date;
  updated_at: Date;
  category_id: number;
  categories: category;
}
