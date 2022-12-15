import { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoHeader from "./components/TodoHeader/TodoHeader";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const saveLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (todo) => {
    setTodos(todos.concat(todo));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : { ...todo }
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filterTodos = (type) => {};

  return (
    <>
      <TodoHeader onUpdateFilter={setFilter} />
      <TodoList
        todos={todos}
        onRemove={removeTodo}
        onUpdate={updateTodo}
        filter={filter}
      />
      <TodoInput addTodo={addTodo} />
    </>
  );
}

export default App;
