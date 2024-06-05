import { useRef } from "react";

const Hook3 = () => {
  const inputE = useRef<HTMLInputElement>(null)
  const focusInput = () => {
    inputE?.current?.focus()
  };
  return (
    <div>
      <h3>Focus This Input</h3>
      <input type="text" ref={inputE} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default Hook3