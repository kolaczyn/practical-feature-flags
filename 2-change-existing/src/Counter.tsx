import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
      <b> {count} </b>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
    </div>
  );
}
