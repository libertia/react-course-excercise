import React, { useState } from 'react'
import { Section1 } from '../components/ex5/section1'
import { Section2 } from '../components/ex5/section2'

const information = { "name": "John", "age": 30, "city": "New York", car: ["Saab", "Volvo", "BMW"] }
const information2 = { "name": "Bob", "age": 12, "city": "Bangkok", car: ["Toyota", "Mitsubishi"] }
//TODO now use redux
const Excercise5 = () => {
  const [info, setInfo] = useState(information)
  function handleClick() {
    if (info === information) {
      setInfo(information2)
    }else {
      setInfo(information)
    }

  }
  return (
    <>

      <Section1 data={info} />
      <Section2 data={info} />
      <button onClick={handleClick}>Update data</button>
    </>

  )
}

export default Excercise5