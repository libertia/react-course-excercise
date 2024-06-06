import { useRef } from "react";

const Hook3 = () => {
  const textInput = useRef<HTMLInputElement>(null)
  const focusInput = () => {
    if(!textInput.current) return
    
    textInput.current.focus()
    textInput.current!.style.backgroundColor = "red"
  };
  return (
    <div>
      <h3>Focus This Input</h3>
      <input type="text"  ref={textInput}/>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default Hook3