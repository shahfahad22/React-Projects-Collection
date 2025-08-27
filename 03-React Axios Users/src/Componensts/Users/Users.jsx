import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from '../Card/Cards'
import "./Users.css"

function Users() {
    const [isLoading, setIsLoading] = useState(true)
    const [users, setUser] = useState(null)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");setUser(response?.data)
            } catch (error) {
                setIsError(true)
            } finally {
                setIsLoading(false)
            }
        }
        getUser();
    }, [])

    if (isLoading) return <h1>Loading....</h1>
    if (isError) return <h1>Something Wrong</h1>

    return (
        <div className='main-Container'>
            {users?.map((user) => {
                return (
                    <Cards key={`Users ${user?.id}`}>
                        <p><strong>UserName : </strong>{user?.username}</p>
                        <p><strong>UserId : </strong>{user?.userid}</p>
                        <p><strong>Email:</strong> {user?.email}</p>
                        <p><strong>Phone:</strong> {user?.phone}</p>
                        <p><strong>Company:</strong> {user?.company?.name}</p>
                    </Cards>
                )
            })}
        </div>
    )
}

export default Users