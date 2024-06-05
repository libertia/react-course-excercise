import { useEffect } from "react"
import {  init, togglePause } from "./libs/rainbowLib"

const Hook1 = () => {

  useEffect(()=> {
    console.log("start rainbow")
    init('rainbow')
    //call this function when unmount destroyed()
  },[])

  return <div>
    <h2>Rainbow</h2>
    <div id="rainbow"></div>
    <button onClick={togglePause}>Pause</button>
  </div>
}

export default Hook1