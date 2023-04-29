import { flags } from "./flags";
import { TodoList as TodoListOld } from "./todosOld/TodoList";
import { TodoList } from "./todos/TodoList";

import "./App.css";
import { About } from "./About";

export default function App() {
  return (
    <>
      <About />
      {flags.todoPersist ? <TodoList /> : <TodoListOld />}
    </>
  );
}
