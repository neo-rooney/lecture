import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";

const List = ({ todos, onRemove, onUpdate }) => {
  return (
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
  );
};

export default List;
