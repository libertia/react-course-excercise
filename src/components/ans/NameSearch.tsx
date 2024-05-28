import { useState } from "react"

const nameList = ['Jone Doe', 'Tom Cruise', 'Terry Crew', 'Adam Sandler', 'Shah Rukh Khan', 'Hrithik Roshan']

const NameSearch = () => {
  const [filter, setFilter] = useState("")
  const [filterList, setFilterList] = useState(nameList)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFilter(e.target.value)

    let newList = nameList.filter((x:any)=> {
      return x.toLowerCase().match(e.target.value.toLowerCase());
    })

    setFilterList(newList)
  }
  return (<>
    <div>Filter <input name="filterName" value={filter} onChange={handleChange}></input></div>
    {filter && (<span>Search value : {filter}</span>)}
    <ul>
      {filterList.map((x: string, key: number) => {
        return (<li key={key}>{x}</li>)
      })}
    </ul>
  </>)
}

export default NameSearch