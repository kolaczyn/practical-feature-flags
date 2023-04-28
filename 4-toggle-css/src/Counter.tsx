import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button className="counter" onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
}
