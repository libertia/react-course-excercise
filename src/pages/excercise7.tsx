import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ex7Slice, fetchUserList, userListSelector } from "../stores/excercise7"
import { AppDispatch } from "../stores"

// fetch data from https://666014725425580055b20ff8.mockapi.io/api/user


// using redux async trunk
const Excercise7 = () => {
  // const [userList, setUserList] = useState<any[]>([])
  const userList = useSelector(userListSelector.list); //userList is now come directly from slicer
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    //dispach getData for redux slicer to fetch user List
    dispatch(fetchUserList())
  }, [dispatch])
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', padding: '10px', }}>
        {userList.map((x: any, index: number) => {
          return (
            <div key={index}>
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


// async function getData() {
//   const response = await fetch("https://666014725425580055b20ff8.mockapi.io/api/user");
//   return await response.json();
// }


export default Excercise7