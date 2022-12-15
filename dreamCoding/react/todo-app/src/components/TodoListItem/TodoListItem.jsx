import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import style from "./TodoListItem.module.css";

const TodoListItem = ({ todo, removeTodo }) => {
  const handleDelete = () => {
    removeTodo(todo.id);
  };

  return (
    <li className={style.container}>
      <input type="checkbox" />
      <div>{todo.todo}</div>
      <RiDeleteBin6Fill onClick={handleDelete} />
    </li>
  );
};

export default TodoListItem;
