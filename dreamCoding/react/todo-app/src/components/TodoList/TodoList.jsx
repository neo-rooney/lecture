import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";

const List = ({ todos, onRemove, onUpdate, filter }) => {
  return (
    <>
      {filter === "all" && (
        <ul>
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
        <ul>
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
        <ul>
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
