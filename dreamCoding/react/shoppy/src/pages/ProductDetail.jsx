import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import useCart from "../hooks/useCart";

export default function ProductDetail() {
  const { addOrUpdateItem } = useCart();
  const {
    state: { product },
  } = useLocation();

  const { id, title, price, description, category, options, image } = product;
  const [selected, setSelected] = useState(options && options[0]);
  const handleChange = (e) => setSelected(e.target.value);
  const handleClick = () => {
    const product = { id, image, title, price, options: selected, quantity: 1 };
    addOrUpdateItem.mutate(product);
  };
  return (
    <>
      <p className="mx-12 mt-4 text-gray-700">{category}</p>
      <section className="flex flex-col md:flex-row p-4">
        <img src={image} alt={title} className="basis-7/12 w-full px-4" />
        <article className="basis-5/12 flex flex-col p-4">
          <h3 className="text-3xl font-bold py-2">{title}</h3>
          <p className="text-2xl font-bold py-2 border-b border-gray-400">{`₩${price}`}</p>
          <p className="py-4 text-lg">{description}</p>
          <div className="flex items-center">
            <label htmlFor="select" className="text-brand font-bold">
              옵션:
            </label>
            <select
              name="options"
              id="select"
              className="p-2 m-4 flex-1 border-2 border-dashed border-brand outline-none"
              value={selected}
              onChange={handleChange}
            >
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <Button text="장바구니에 추가" onClick={handleClick} />
        </article>
      </section>
    </>
  );
}
