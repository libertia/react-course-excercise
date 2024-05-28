//Fix this code
const Square = () => {
  let value = ""

  function handleClick() {
    //TODO: change value to 'X' when user click
    value = 'X'
  }

  return <button onClick={handleClick()} className="square">{value}</button>
}

export default Square