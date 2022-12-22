import React, { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { imageUpload } from "../api/cloudinary";
import { addProduct } from "../api/firebase";

export default function NewProduct() {
  const [product, setProduct] = useState({});

  const handleInput = async (e) => {
    const { name, files, value } = e.target;
    if (name === "image") {
      const image = await imageUpload(files[0]);
      setProduct({ ...product, image });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addProduct(product);
    console.log(result);
  };

  return (
    <div className="flex flex-col items-center p-10">
      <h2 className="text-2xl text-center font-semibold my-3">
        새로운 제품 등록
      </h2>
      {product?.image && (
        <img className="w-80 mb-4" src={product.image} alt="" />
      )}
      <form
        className="flex flex-col gap-2 w-full"
        action="submit"
        onSubmit={handleSubmit}
      >
        <Input type="file" name="image" onChange={handleInput} />
        <Input
          type="text"
          name="name"
          placeholder="제품명"
          onChange={handleInput}
        />
        <Input
          type="number"
          name="price"
          placeholder="가격"
          onChange={handleInput}
        />
        <Input
          type="text"
          name="category"
          placeholder="카테고리"
          onChange={handleInput}
        />
        <Input
          type="text"
          name="description"
          placeholder="제품 설명"
          onChange={handleInput}
        />
        <Input
          type="text"
          name="options"
          placeholder="옵션들(콤마(,)로 구분)"
          onChange={handleInput}
        />
        <Button text="제품 등록하기" />
      </form>
    </div>
  );
}
