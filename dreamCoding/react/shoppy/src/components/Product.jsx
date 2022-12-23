import React from "react";

export default function Product({ product }) {
  const { id, title, price, image, category } = product;
  return (
    <li className="shadow-lg rounded-md overflow-hidden">
      <img className="w-full" src={image} alt={title} />
      <section className="p-2">
        <div className="flex justify-between">
          <span>{title}</span>
          <span>{price}</span>
        </div>
        <div className="text-gray-500">{category}</div>
      </section>
    </li>
  );
}
