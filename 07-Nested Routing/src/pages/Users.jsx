import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function Users() {
    const [users, setUsers] = useState(null)
    const [isLoading, setisLoading] = useState(true)
    const [isError, setisError] = useState(false)
    const { id } = useParams();

    useEffect(()=>{
        
             const getUsers = async ()=>{
                try {
            const response  = await axios.get(`https://jsonplaceholder.typicode.com/users`);
            setUsers(response?.data)
        
        } catch (err) {
           setisError(true)
        }finally{
            setisLoading(false)
        }
        
        }
        getUsers()
    },[])

    if(isLoading) return <h2>Loading...</h2>
    if(isError) return <h2>Something Wrong ?</h2>

     if (id) {
    return <Outlet />
  }

  return(
        <div>
            <h1>Users Data</h1>
            {users?.map((user)=>(
                <div key={user.id}>
                 <h2>{`User Id : ${user.id}`}</h2>
                 <h3>{`Name : ${user.name}`}</h3>
                 <p>{`Email : ${user.email}`}</p>
                 <Link to={`/users/${user.id}`}>View Details</Link>
                 <br />
                 <Link to="/">⬅ Go to Home</Link>
                </div>
            ))}
            
        </div>
  )
}

export default Users;



