import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import config from "../utils/config";

export const useGetCart = () => {
  const getTodos = async () => {
    const { data } = await axios.get(config.baseUrl + "cart", {});
    return data;
  };
  return useQuery({ queryKey: ["cart"], queryFn: getTodos });
};

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  const addMedicine = async ({ medicine, quantity, action }) => {
    const { data } = await axios.post(config.baseUrl + "cart", {
      medicineId: medicine.id,
      quantity: quantity,
      action,
    });

    queryClient.refetchQueries(["cart"]);
    return data;
  };
  return useMutation(addMedicine);
};
