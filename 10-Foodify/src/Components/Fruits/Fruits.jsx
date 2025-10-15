import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgFruits from "../../assets//images/fruits-banner.jpg"

const Fruits = () => {
  return (
    <div>
      <CategoryPage title="Fruits & Veggies" bgImage={bgFruits} categories={['Fruits', 'Vegetables']} />
    </div>
  )
}

export default Fruits   
