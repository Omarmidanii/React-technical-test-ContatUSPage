import Ads from "../entities/ads";
import useFetchData from "./useFetchData";

const useFetchAds = () => {
  return useFetchData<Ads[]>("ads");
};
export default useFetchAds;
