import NameSearch from "../components/ans/NameSearch"
import Square from "../components/ans/Square"


function StateExcercise () {
  return (
    <>

    {/* TODO: Refactor this using map */}
      <div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
      </div>

      <div><NameSearch/></div>
    </>
  )
}

export default StateExcercise 