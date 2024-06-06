import { useMemo, useState } from "react"
import { expensiveCalculation } from "./libs/expensiveCalc";


const Hook2 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<any[]>([]);


  // const calculation = useMemo(() => { return expensiveCalculation(count) }, [count])


  const calculation = useMemo(() => expensiveCalculation(count), [count])

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        <div>
          Count: {count}
        </div>

        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
}

export default Hook2