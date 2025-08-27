import React, { useState } from 'react'
import Users from './Componensts/Users/Users'

function App() {
  const [count, setCount] = useState(0)

  const userCount = ()=>setCount(count + 1)
  return (
    <>
    <button onClick={userCount} className='User'>{count}</button>
     <Users/>
    </>
   
  )
}

export default App