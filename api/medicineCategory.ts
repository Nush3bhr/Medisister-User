import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import config from "../utils/config";

export const useMedicineCategories = () => {
  const getTodos = async (query) => {
    const { data } = await axios.get(config.baseUrl + "/medicineCategory", {
      params: query,
    });
    return data;
  };
  return useQuery({ queryKey: ["todos"], queryFn: getTodos });
};
