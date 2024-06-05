import { useEffect, useRef } from "react"
import { destroyed, init, togglePause } from "./libs/rainbowLib"

const Hook1 = () => {

  //Call init when component already render to start rainbow and only once
  // init()
  //call destroyed() to remove rainbow 
  //!!!!! only 1 rainbow can be active if another rainbow is already active calling init will cause error


  return <div>
    <h2>Rainbow</h2>
    <div id="rainbow"></div>
    <button onClick={togglePause}>Pause</button>
  </div>
}

export default Hook1