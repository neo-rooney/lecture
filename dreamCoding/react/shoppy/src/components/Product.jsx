import React from "react";
import { useNavigate } from "react-router-dom";

export default function Product({ product }) {
  const { id, title, price, image, category } = product;

  const navigate = useNavigate();

  return (
    <li
      className="shadow-md rounded-lg overflow-hidden cursor-pointer transition ease-in hover:scale-105"
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
    >
      <img className="w-full" src={image} alt={title} />
      <section className="p-2">
        <div className="flex justify-between">
          <h3 className="truncate">{title}</h3>
          <p>{`₩${price}`}</p>
        </div>
        <div className="text-gray-500">{category}</div>
      </section>
    </li>
  );
}
