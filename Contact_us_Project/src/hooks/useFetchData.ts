import { useQuery } from "@tanstack/react-query";
import APIClient, { setAuthToken } from "../services/APIClient";
import CustomError from "../entities/customeError";
import { useNavigate } from "react-router-dom";
import response from "../entities/response";

const useFetchData = <T>(endPoint: string) => {
  const apiClient = new APIClient<response<T>>(`/${endPoint}`);
  const navigate = useNavigate();
  setAuthToken();
  const query = useQuery<response<T>, Error>({
    queryKey: [endPoint],
    queryFn: apiClient.get,
    staleTime: 10 * 1000,
    refetchOnWindowFocus: true,
  });
  if (query.error) {
    const err = query.error as CustomError;
    if (err.response) {
      const statusCode = err.response.status;
      if (statusCode === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  }
  return query;
};

export default useFetchData;
