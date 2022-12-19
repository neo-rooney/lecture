import { useState } from "react";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

const filters = ["all", "active", "completed"];

function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <>
      <Header filters={filters} onChangeFilter={setFilter} filter={filter} />
      <TodoList filter={filter} />
    </>
  );
}

export default App;
