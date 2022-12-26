import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct, getProducts as fetchProduct } from "../api/firebase";

export default function useProducts() {
  const queryClient = useQueryClient();
  const getProducts = useQuery(["products"], fetchProduct, {
    staleTime: 1000 * 60,
  });
  const addNewProduct = useMutation(
    ({ product, image }) => addProduct(product, image),
    {
      onSuccess: () => queryClient.invalidateQueries(["products"]),
    }
  );

  return { getProducts, addNewProduct };
}
