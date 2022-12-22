import React from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function NewProduct() {
  const handleInput = (e) => {
    const { name } = e.target;
    console.log(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2 class="text-2xl text-center font-semibold my-3">새로운 제품 등록</h2>
      <form
        className="flex flex-col gap-2"
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
