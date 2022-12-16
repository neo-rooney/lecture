import React from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import style from "./TodoHeader.module.css";

const TodoHeader = ({ onUpdateFilter, onUpdateMode, mode }) => {
  const handlerFilter = (filter) => {
    onUpdateFilter(filter);
  };

  const handleMode = () => {
    const updateValue = mode === "dark" ? "light" : "dark";
    onUpdateMode(updateValue);
  };

  return (
    <div className={mode === "dark" ? style.darkContainer : style.container}>
      {mode === "dark" ? (
        <BsFillSunFill
          className={mode === "dark" ? style.darkToggle : style.toggle}
          onClick={handleMode}
        />
      ) : (
        <BsFillMoonFill
          className={mode === "dark" ? style.darkToggle : style.toggle}
          onClick={handleMode}
        />
      )}
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
