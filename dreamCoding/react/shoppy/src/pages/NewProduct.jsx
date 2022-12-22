import React, { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { imageUpload } from "../api/cloudinary";
import { addProduct } from "../api/firebase";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

  const handleChange = async (e) => {
    const { name, files, value } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
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
      {file && (
        <img className="w-80 mb-4" src={URL.createObjectURL(file)} alt="" />
      )}
      <form
        className="flex flex-col gap-2 w-full"
        action="submit"
        onSubmit={handleSubmit}
      >
        <Input type="file" name="file" onChange={handleChange} required />
        <Input
          type="text"
          name="title"
          placeholder="제품명"
          onChange={handleChange}
          required
          value={product?.title}
        />
        <Input
          type="number"
          name="price"
          placeholder="가격"
          onChange={handleChange}
          required
          value={product?.price}
        />
        <Input
          type="text"
          name="category"
          placeholder="카테고리"
          onChange={handleChange}
          required
          value={product?.category}
        />
        <Input
          type="text"
          name="description"
          placeholder="제품 설명"
          onChange={handleChange}
          required
          value={product?.description}
        />
        <Input
          type="text"
          name="options"
          placeholder="옵션들(콤마(,)로 구분)"
          onChange={handleChange}
          required
          value={product?.options}
        />
        <Button text="제품 등록하기" />
      </form>
    </div>
  );
}
