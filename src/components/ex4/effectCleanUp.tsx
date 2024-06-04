import { useEffect } from "react"
import { destroyed, init } from "./rainbowLib"

const EffectCleanup = () => {

  useEffect(()=> {
    console.log("start rainbow")
    init('rainbow')

  },[])

  return <div>
    <div id="rainbow"></div>
  </div>
}

export default EffectCleanup