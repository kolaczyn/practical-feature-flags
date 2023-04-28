import { flags } from "./flags";
import { Counter } from "./Counter";

import "./App.css";
import { About } from "./About";
import { CounterOld } from "./CounterOld";

export default function App() {
  return (
    <>
      <About />
      <hr />
      <p>The flag is {flags.improvedCounter ? "enabled" : "disabled"}</p>
      {flags.improvedCounter ? <Counter /> : <CounterOld />}
    </>
  );
}
