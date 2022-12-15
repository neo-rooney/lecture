import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import style from "./TodoListItem.module.css";

const TodoListItem = ({ todo, onRemove, onUpdate }) => {
  const handleRemove = () => {
    onRemove(todo.id);
  };

  const handleCheck = () => {
    onUpdate(todo.id);
  };

  return (
    <li className={style.container}>
      <input type="checkbox" checked={todo.done} onChange={handleCheck} />
      <div>{todo.todo}</div>
      <RiDeleteBin6Fill onClick={handleRemove} />
    </li>
  );
};

export default TodoListItem;
