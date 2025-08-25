import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from "./Components/Home/Home"
import Products from "./Components/Products/Products"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"



function App() {
  const [curentPage, setCurentPage] = useState("home")
  return (
    <div>
     
      <Navbar setCurentPage={setCurentPage}/>
      <div className='content-page'>
        {curentPage === "home" && <Home setCurentPage={setCurentPage}/>}
        {curentPage === "products" && <Products />}
        {curentPage === "about" && <About/>}
        {curentPage === "contact" && <Contact/>}
      </div>
    </div>
  )
}

export default App
