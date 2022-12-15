import { useEffect, useRef, useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import styles from "./App.module.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const loadLocalStorage = () => {
    return JSON.parse(localStorage.getItem("todos"));
  };
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

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      setTodos(loadLocalStorage());
    } else {
      saveLocalStorage(todos);
    }
  }, [todos]);

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={styles.layout}>
      <section className={styles.section}>
        <TodoHeader onUpdateFilter={setFilter} />
        <TodoList
          todos={todos}
          onRemove={removeTodo}
          onUpdate={updateTodo}
          filter={filter}
        />
        <TodoInput addTodo={addTodo} />
      </section>
    </div>
  );
}

export default App;
