import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import config from "../utils/config";

export const useMedicines = () => {
  const getTodos = async (query) => {
    const { data } = await axios.get(config.baseUrl + "/medicines", {
      params: query,
    });
    return data;
  };
  return useQuery({ queryKey: ["medicines"], queryFn: getTodos });
};
