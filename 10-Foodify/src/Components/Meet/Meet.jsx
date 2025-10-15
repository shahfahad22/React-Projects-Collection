import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgSeaFood from "../../assets/images/seafood-banner.jpg"

const Meet = () => {
  return (
    <div>
        <CategoryPage  title="Meat & SeaFood" bgImage={BgSeaFood} categories={['Meet']} />
    </div>
  )
}

export default Meet