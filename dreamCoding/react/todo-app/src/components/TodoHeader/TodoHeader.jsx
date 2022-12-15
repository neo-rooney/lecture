import React from "react";
import { BsFillMoonFill } from "react-icons/bs";

const TodoHeader = ({ onUpdateFilter }) => {
  const handlerFilter = (filter) => {
    onUpdateFilter(filter);
  };
  return (
    <div>
      <BsFillMoonFill />
      <div>
        <button
          onClick={() => {
            handlerFilter("all");
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            handlerFilter("active");
          }}
        >
          Active
        </button>
        <button
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
