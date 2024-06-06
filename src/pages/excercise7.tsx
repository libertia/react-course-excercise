


// fetch data from https://666014725425580055b20ff8.mockapi.io/api/user

import { useEffect, useState } from "react"
import { GeneratedIdentifierFlags } from "typescript"

// using redux async trunk
const Excercise7 = () => {
  const [userList, setUserList] = useState<any[]>([])
  useEffect(() => {
    //TODO move this code to redux
    getData().then((resp) => {
      console.log(resp)
      setUserList(resp)
    })
  }, [])
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', padding: '10px', }}>
        {userList.map((x: any, index: number) => {
          return (
            <div >
              <div style={{ display: 'flex', flexWrap: 'nowrap', padding: '4px', margin: '4px', backgroundColor: '#626c80' }}>
                <div>
                  <img src={x.avatar} alt="user avatar" key={index} />
                </div>
                <div>
                  name : {x.name} <br />
                  age: {x.age}<br />
                  city: {x.city}<br />
                </div>
              </div>


            </div>)
        })}
      </div >

    </>

  )
}

async function getData() {
  const response = await fetch("https://666014725425580055b20ff8.mockapi.io/api/user");
  return await response.json();
}

export default Excercise7