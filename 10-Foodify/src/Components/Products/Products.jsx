import React, { useState, useEffect, useRef } from 'react';
import Heading from '../Heading/Heading';
import ProductsList from '../ProductsList/ProductsList';
import Cards from '../Cards/Cards';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood'];
  const [activeTab, setActiveTab] = useState('All');
  const cardsRef = useRef([]);

  const filterItems =
    activeTab === 'All'
      ? ProductsList
      : ProductsList.filter((item) => item.category === activeTab);

  const renderCards = filterItems.slice(0, 8).map((product, index) => (
    <div
      key={product.id}
      ref={(el) => (cardsRef.current[index] = el)}
      className="opacity-0 scale-75" // initial state for animation
    >
      <Cards image={product.image} name={product.name} price={product.price} />
    </div>
  ));

  useEffect(() => {
    // Animate cards when they come into view
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, scale: 0.75 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15, // delay between each card
        scrollTrigger: {
          trigger: cardsRef.current[0], // trigger when first card hits viewport
          start: 'top 85%',
        },
      }
    );
  }, [activeTab]);

  return (
    <section>
      <div className="max-w-[1250px] mx-auto px-10 py-20 overflow-x-hidden">
        <Heading highlight="Our" heading="Products" />

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mt-10">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 text-lg rounded-lg cursor-pointer ${
                activeTab === category
                  ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white'
                  : 'bg-zinc-200'
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Listing */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
          {renderCards}
        </div>

        {/* View All Button */}
        <div className="mt-15 mx-auto w-fit">
          <Link
            to="/allproducts"
            className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-7 py-2 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
