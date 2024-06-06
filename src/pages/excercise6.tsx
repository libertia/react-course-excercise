import React from 'react'
import { Section1 } from '../components/ex5/section1'
import { Section2 } from '../components/ex5/section2'

const information = { "name": "John", "age": 30, "city": "New York" , car: ["Saab", "Volvo", "BMW"]}

//TODO now use redux
const Excercise5 = () => {
  return (
    <>
    
      <Section1 data={information}/>
      <Section2 data={information}/>
    </>

  )
}

export default Excercise5