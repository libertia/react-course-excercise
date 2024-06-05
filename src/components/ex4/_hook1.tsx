import { useEffect } from "react"
import {  init } from "./libs/rainbowLib"

const Hook1 = () => {

  useEffect(()=> {
    console.log("start rainbow")
    init('rainbow')
    //call this function when unmount destroyed()
  },[])

  return <div>
    <div id="rainbow"></div>
  </div>
}

export default Hook1