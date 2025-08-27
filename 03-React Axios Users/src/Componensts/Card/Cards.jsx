import React from 'react'
import './Card.css' 

function Cards({children}) {
  return (
    <div className='card-container'>{children}</div>
  )
}

export default Cards