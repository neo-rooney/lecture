import React from "react";
import { BsFillMoonFill } from "react-icons/bs";
import style from "./TodoHeader.module.css";

const TodoHeader = ({ onUpdateFilter }) => {
  const handlerFilter = (filter) => {
    onUpdateFilter(filter);
  };
  return (
    <div className={style.container}>
      <BsFillMoonFill className={style.toggle} />
      <div className={style.filterWrapper}>
        <button
          className={style.filter}
          onClick={() => {
            handlerFilter("all");
          }}
        >
          All
        </button>
        <button
          className={style.filter}
          onClick={() => {
            handlerFilter("active");
          }}
        >
          Active
        </button>
        <button
          className={style.filter}
          onClick={() => {
            handlerFilter("completed");
          }}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default TodoHeader;
