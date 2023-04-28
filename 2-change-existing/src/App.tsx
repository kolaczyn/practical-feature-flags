import { flags } from "./flags";
import { Counter } from "./Counter";

import "./App.css";
import { About } from "./About";

export default function App() {
  return (
    <>
      <About />
      <p>The flags is {flags.counter ? "enabled" : "disabled"}</p>
      {flags.counter && <Counter />}
    </>
  );
}
