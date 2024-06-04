import PitfallState from "../components/ex3/pitfall"
import { Pitfall2 } from "../components/ex3/pitfall2"

const StateExcercisePitfall = () => {

  function goBackHome() {
    //TODO: navigate back to home with state
  }
  return (<>
    <PitfallState />
    <Pitfall2 />
    <button onClick={goBackHome}>Take me home</button>
  </>)
}

export default StateExcercisePitfall