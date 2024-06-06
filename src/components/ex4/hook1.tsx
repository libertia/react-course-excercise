import { useEffect, useRef } from "react"
import { destroyed, init, togglePause } from "./libs/rainbowLib"

const Hook1 = () => {
  const rainbowRef = useRef<any>(null)
  //Call init when component already render to start rainbow and only once
  useEffect(() => {
    init(rainbowRef.current)
    return () => {
      destroyed()
    }
  }, [])

 
  return <div>
    <h2>Rainbow</h2>
    <div id="rainbow" ref={rainbowRef}></div>
    <button onClick={togglePause}>Pause</button>
  </div>
}

export default Hook1