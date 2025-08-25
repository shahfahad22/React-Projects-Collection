  import React, { useRef } from 'react'
  import { useState } from 'react';
  import "./Home.css"


  import Cheese from "../../assets/Cheese-Burger.webp";
  import Creamy from "../../assets/Creamy-Pasta.webp";
  import italian from "../../assets/italian-Pizza.webp";

  function Home({setCurentPage}){
    const productRef = useRef(null)
  
  const scrollToProducts = () => {
    productRef.current.scrollIntoView({behavior : "smooth"})
  }

  
    return ( <div>
      <header className='hero'>
        <div className='overly'>
          <h1>Welcome to Foodies Hub</h1>
              <p>
            Taste the best dishes crafted with love and passion. From fresh
            ingredients to delightful recipes, we bring you the perfect food
            experience every day.
          </p>
          
          <button className='order-btn' onClick={scrollToProducts}>Order Now</button>
        </div>
      </header>

      <section className='product-preview' ref={productRef}>
        <h1>Popular Food</h1>
        <div className='products-grid'>
          <div className="product-card">
            <img src={Cheese} alt="Cheese" />
            <h3>Cheese Burger</h3>
            <p>$5.99</p>
          </div>
          <div className='product-card'>
            <img src={Creamy} alt="Creamy" />
            <h3>Italian Pizza</h3>
            <p>$8.99</p>
          </div>
            <div className='product-card'>
            <img src={italian} alt="itailan" />
            <h3>Creamy Pasta</h3>
            <p>$6.99</p>
          </div>
        </div>
        <button className='btn-seeall' onClick={()=> setCurentPage("products")}>See All Products</button>
      </section>

      <footer className='footer'> <p>© 2025 Food Store. All rights reserved.</p></footer>
      </div>
    )
  }

  export default Home
