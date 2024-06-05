
import { useEffect, useRef } from "react"
import { init, togglePause } from "../ex4/libs/rainbowLib"


const Hook1 = () => {
  const rainbow = useRef<any>(null)
  useEffect(() => {
    console.log("start rainbow")
    init(rainbow.current)
    //call this function when unmount destroyed()
  }, [])

  return <div>
    <h2>Rainbow</h2>
    <div ref={rainbow}></div>
    <button onClick={togglePause}>Pause</button>
  </div>
}

export default Hook1
