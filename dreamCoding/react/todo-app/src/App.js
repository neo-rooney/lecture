import { useEffect, useRef, useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import styles from "./App.module.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [mode, setMode] = useState("light");

  const loadLocalStorage = (name) => {
    return JSON.parse(localStorage.getItem(name));
  };
  const saveLocalStorage = (name, todos) => {
    localStorage.setItem(name, JSON.stringify(todos));
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
      setTodos(loadLocalStorage("todos"));
      setMode(loadLocalStorage("mode"));
    } else {
      saveLocalStorage("todos", todos);
      saveLocalStorage("mode", mode);
    }
  }, [todos, mode]);

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={styles.layout}>
      <section
        className={mode === "dark" ? styles.darkSection : styles.section}
      >
        <TodoHeader
          onUpdateFilter={setFilter}
          onUpdateMode={setMode}
          mode={mode}
        />
        <TodoList
          todos={todos}
          onRemove={removeTodo}
          onUpdate={updateTodo}
          filter={filter}
          mode={mode}
        />
        <TodoInput addTodo={addTodo} />
      </section>
    </div>
  );
}

export default App;
