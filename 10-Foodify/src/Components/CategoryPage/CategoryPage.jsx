import React from 'react'
import Banner from '../Banner/Banner'
import ProductsList from '../ProductsList/ProductsList'
import Cards from "../Cards/Cards"

const CategoryPage = ({title, bgImage, categories=[] }) => {


    const filterItems = categories.includes('All')? ProductsList : 
    ProductsList.filter(item => categories.includes(item.category))

    const renderList = ProductsList.map(product =>{
        return(
            <Cards key={product.id} image={product.image} name={product.name} price={product.price} />
        )
    })
  return (
    <div>
        <Banner title={title} bgImage={bgImage} />
        <div  className='grid grid-cols-1 md:grid-cols-4 gap-10 py-20 max-w-[1250px] mx-auto px-10' >
            {renderList}
        </div>
    </div>
  )
}

export default CategoryPage