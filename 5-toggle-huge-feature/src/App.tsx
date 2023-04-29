import { flags } from "./flags";
import { TodoList } from "./todos/TodoList";

import "./App.css";
import { About } from "./About";

export default function App() {
  return (
    <>
      <About />
      <TodoList />
    </>
  );
}
