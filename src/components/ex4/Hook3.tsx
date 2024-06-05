import { useEffect, useRef } from "react"

const Hook3 = () => {
  const focusInput = () => {

  };
  return (
    <div>
      <h3>Focus This Input</h3>
      <input type="text"  />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default Hook3