import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoInput = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim().length === 0) {
      alert("할일을 입력해주세요!");
      return;
    }
    addTodo({ id: uuidv4(), todo: value, done: false });
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={value} />
      <button>Add</button>
    </form>
  );
};

export default TodoInput;
