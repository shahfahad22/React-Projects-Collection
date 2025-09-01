import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User from './Components/User/User'
import UserDetails from './Components/UserDetails/UserDetails'
import "./App.css"

function App() {
  const [users, setUsers] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [selectUsers, setSelectUsers] = useState(null)

  useEffect(()=>{
    const getUsers =  async () =>{
      try{
        const response  = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response?.data)
      }catch(error){
        setError(true)
      }finally{
        setLoading(false)
      }
    }
    getUsers();
  },[])

  if(error) return <h1>Something wrong !</h1>
  if(loading) return <h1>Loading...</h1>


  return(
    <div className='app-container'>
      <User user={users} onSelectUser={setSelectUsers} /> 
      <UserDetails user={selectUsers} />
    </div>
  )
}

export default App