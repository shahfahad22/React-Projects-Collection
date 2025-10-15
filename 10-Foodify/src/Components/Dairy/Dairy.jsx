import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgDairy from "../../assets/images/dairy-banner.jpg"

const Dairy = () => {
  return (
    <div>
        <CategoryPage title="Dairy & Eggs" bgImage={bgDairy} categories={['Dairy']} />
    </div>
  )
}

export default Dairy