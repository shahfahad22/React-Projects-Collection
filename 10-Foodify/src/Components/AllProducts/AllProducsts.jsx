import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgAll from "../../assets/images/all-banner.jpg"

const AllProducsts = () => {
  return (
    <div>
      <CategoryPage  title="All Products" bgImage={bgAll} categories={['All']} />
    </div>
  )
}
 
export default AllProducsts