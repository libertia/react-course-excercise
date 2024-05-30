import { useState } from "react";

export function Pitfall2() {
  const [count, setCount] = useState(0);
  const [currentCount, setCurrentCount] = useState("");
  const increment = () => {
    setCount(count + 1);
    setCurrentCount(`computed count is ${count}`);
  };
  const decrement = () => {
    setCount(count - 1);
    setCurrentCount(`computed count is ${count}`);
  };
  return (
    <div className="App">
      <h1>Pitfall 2</h1>
      <p>Count: {count}</p>
      <p>{currentCount}</p>
      <button type="button" onClick={increment}>
        Add
      </button>
      <button type="button" onClick={decrement}>
        Subtract
      </button>
    </div>
  );
}