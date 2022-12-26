import React, { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { imageUpload } from "../api/cloudinary";
import useProducts from "../hooks/useProducts";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState("");

  const { addNewProduct } = useProducts();

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
    try {
      e.preventDefault();
      setIsUploading(true);
      const image = await imageUpload(file);
      addNewProduct.mutate(
        { product, image },
        {
          onSuccess: () => {
            setSuccess("✅ 업로드 성공");
            setTimeout(() => {
              setSuccess("");
            }, 4000);
          },
        }
      );
    } catch (e) {
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="p-10  text-center">
      <h2 className="text-2xl font-bold my-3">새로운 제품 등록</h2>
      {success && <div className="mb-2">{success}</div>}
      {file && (
        <img
          className="w-96 mb-4 mx-auto"
          src={URL.createObjectURL(file)}
          alt=""
        />
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
          value={product.title || ""}
        />
        <Input
          type="number"
          name="price"
          placeholder="가격"
          onChange={handleChange}
          required
          value={product.price || ""}
        />
        <Input
          type="text"
          name="category"
          placeholder="카테고리"
          onChange={handleChange}
          required
          value={product.category || ""}
        />
        <Input
          type="text"
          name="description"
          placeholder="제품 설명"
          onChange={handleChange}
          required
          value={product.description || ""}
        />
        <Input
          type="text"
          name="options"
          placeholder="옵션들(콤마(,)로 구분)"
          onChange={handleChange}
          required
          value={product.options || ""}
        />
        <Button
          text={isUploading ? "업로드 중..." : "제품 등록하기"}
          disabled={isUploading}
        />
      </form>
    </div>
  );
}
