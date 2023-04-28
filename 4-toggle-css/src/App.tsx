import { Counter } from "./Counter";

import "./App.css";
import { About } from "./About";
import { flags } from "./flags";

export default function App() {
  return (
    <div
      className={
        flags.lightCounter ? "light-counter-enabled" : "light-counter-disabled"
      }
    >
      <About />
      <Counter />
    </div>
  );
}
