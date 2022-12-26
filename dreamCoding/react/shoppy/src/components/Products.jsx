import React from "react";
import Product from "./Product";
import useProducts from "../hooks/useProducts";

export default function Products() {
  const {
    getProducts: { isLoading, error, data: products },
  } = useProducts();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error : {error} </p>}
      {products && (
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ul>
      )}
    </>
  );
}
