import { Counter } from "./Counter";

import "./App.css";
import { About } from "./About";
import { isAboutEnabled, isCounterEnabled } from "./flags";
import { FlagsInfo } from "./FlagsInfo";

export default function App() {
  return (
    <>
      {isAboutEnabled && <About />}
      <FlagsInfo />
      {/* <p>The flags is {flags.counter ? "enabled" : "disabled"}</p> */}
      {isCounterEnabled && <Counter />}
    </>
  );
}
