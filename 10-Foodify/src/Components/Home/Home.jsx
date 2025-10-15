import React from 'react'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Values from '../Values/Values'
import Products from '../Products/Products'
import Discount from '../Discount/Discount'
import OurProcess from '../OurProcess/OurProcess'
import Testimonials from '../Testimonials/Testimonials'


function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <Values />
      <Products />
      <Discount />
      <OurProcess />
      <Testimonials />
    </div>
  )
}

export default Home