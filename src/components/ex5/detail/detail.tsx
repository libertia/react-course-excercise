import React from 'react'

const Detail = ({ data }: any) => {
  return (
    <div>
      <h1>Detail</h1>
      <div>
        <p>
          Name : {data.name}<br />
          Age : {data.age}<br />
          City : {data.city}
        </p>
      </div>
    </div>
  )
}

export default Detail