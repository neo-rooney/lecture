import React from "react";
import { getProducts } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import Product from "./Product";

export default function Products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], getProducts);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error : {error} </p>}
      {products && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ul>
      )}
    </>
  );
}
