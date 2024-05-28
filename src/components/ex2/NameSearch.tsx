
const nameList = ['Jone Doe', 'Tom Cruise', 'Terry Crew', 'Adam Sandler', 'Shah Rukh Khan', 'Hrithik Roshan']

const NameSearch = () => {


  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {

  }
  return (<>
    <div>Filter <input name="filterName" onChange={handleChange}></input></div>
    <ul>
      {nameList.map((x: string, key: number) => {
        return (<li key={key}>{x}</li>)
      })}
    </ul>
  </>)
}

export default NameSearch