import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";

const List = ({ todos, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

export default List;
