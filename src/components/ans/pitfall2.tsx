import { useState } from "react";

export function Pitfall2() {
  const [count, setCount] = useState(0);
  const [currentCount, setCurrentCount] = useState("");
  const increment = () => {
    let currentCount = count + 1
    setCount(currentCount);
    setCurrentCount(`computed count is ${currentCount}`);
  };
  const decrement = () => {
    let currentCount = count - 1
    setCount(currentCount);
    setCurrentCount(`computed count is ${currentCount}`);
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