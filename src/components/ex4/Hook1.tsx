import { useEffect } from "react"
import { destroyed, init } from "./libs/rainbowLib"

const Hook1 = () => {

  useEffect(()=> {
    console.log("start rainbow")
    init('rainbow')

  },[])

  return <div>
    <div id="rainbow"></div>
  </div>
}

export default Hook1