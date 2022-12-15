import { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoInput from "./components/TodoInput/TodoInput";

function App() {
  const [todos, setTodos] = useState([]);

  const saveLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (todo) => {
    setTodos(todos.concat(todo));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoList todos={todos} removeTodo={removeTodo} />
      <TodoInput addTodo={addTodo} />
    </>
  );
}

export default App;
