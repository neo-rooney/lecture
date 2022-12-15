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
      <div className={style.left}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={handleCheck}
          className={style.checkbox}
        />
        <div className={style.text}>{todo.todo}</div>
      </div>

      <div onClick={handleRemove} className={style.delete}>
        <RiDeleteBin6Fill />
      </div>
    </li>
  );
};

export default TodoListItem;
