import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")
  
  return (
    <div className='w-full h-screen duration-200 '
    style={{backgroundColor: color}}
    >
      <div className=' fixed flex flex-wrap justify-center top-12 inset-x-0 px-2'>
        <div className=' flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className=' outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer' onClick={()=> setColor("Red")} style={{backgroundColor: "Red"}}>Red</button>
          <button className=' outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer' onClick={()=> setColor("Blue")} style={{backgroundColor: "Blue"}}>Blue</button>
          <button className=' outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer' onClick={()=> setColor("Crimson")} style={{backgroundColor: "Crimson"}}>Crimson</button>
          <button className=' outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer' onClick={()=> setColor("Turquoise")} style={{backgroundColor: "Turquoise"}}>Turquoise</button>
          <button className=' outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer' onClick={()=> setColor("Coral")} style={{backgroundColor: "Coral"}}>Coral</button>
          <button className=' outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer' onClick={()=> setColor("Plum")} style={{backgroundColor: "Plum"}}>Plum</button>
          <button className=' outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer' onClick={()=> setColor("Black")} style={{backgroundColor: "Black"}}>Black</button>
        </div>
      </div>
    </div>
  )
}
export default App
