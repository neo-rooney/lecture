import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import style from "./TodoList.module.css";

const List = ({ todos, onRemove, onUpdate, filter }) => {
  return (
    <>
      {filter === "all" && (
        <ul className={style.list}>
          {todos.map((todo) => (
            <TodoListItem
              todo={todo}
              key={todo.id}
              onRemove={onRemove}
              onUpdate={onUpdate}
            />
          ))}
        </ul>
      )}
      {filter === "active" && (
        <ul className={style.list}>
          {todos.map(
            (todo) =>
              !todo.done && (
                <TodoListItem
                  todo={todo}
                  key={todo.id}
                  onRemove={onRemove}
                  onUpdate={onUpdate}
                />
              )
          )}
        </ul>
      )}
      {filter === "completed" && (
        <ul className={style.list}>
          {todos.map(
            (todo) =>
              todo.done && (
                <TodoListItem
                  todo={todo}
                  key={todo.id}
                  onRemove={onRemove}
                  onUpdate={onUpdate}
                />
              )
          )}
        </ul>
      )}
    </>
  );
};

export default List;
