import React from 'react'

const Cars = ({ data }: any) => {
  return (
    <div>
      Cars: 
      <ul>
        {data.car.map((x: any, index: number) => {
          return (<li key={index}>{x}</li>)
        })}
      </ul>

    </div>
  )
}

export default Cars