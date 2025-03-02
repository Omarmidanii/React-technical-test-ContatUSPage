import product from "../entities/product";
import useFetchData from "./useFetchData";

const useFetchProducts = () => {
  return useFetchData<product[]>("products");
};
export default useFetchProducts;
