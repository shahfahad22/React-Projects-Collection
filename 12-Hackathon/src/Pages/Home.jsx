import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productSlice";
import ProductCard from "../Components/ProductCard";
import Header from "../Components/Header";
import home from '../assets/home.jpg';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);

  const [filterValue, setFilterValue] = useState(0); // -1 = Low, 0 = Default, 1 = High
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (products.length === 0) dispatch(fetchProducts());
  }, [dispatch, products.length]);

  useEffect(() => {
    if (products.length > 0) {
      let filtered = [...products];

      if (filterValue === 1) {
        const prices = filtered.map(p => p.price);
        const threshold = prices.sort((a,b) => b-a)[Math.floor(prices.length/2)];
        filtered = filtered.filter(p => p.price >= threshold);
        filtered.sort((a,b) => b.price - a.price);
      } else if (filterValue === -1) {
        const prices = filtered.map(p => p.price);
        const threshold = prices.sort((a,b) => a-b)[Math.floor(prices.length/2)];
        filtered = filtered.filter(p => p.price <= threshold);
        filtered.sort((a,b) => a.price - b.price);
      }
      setFilteredProducts(filtered);
    }
  }, [filterValue, products]);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 mt-4 sm:mt-6">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-700">
          <div className="flex flex-col lg:flex-row items-center justify-between p-4 sm:p-6 lg:p-8 xl:p-12 gap-6 min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]">

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left w-full lg:w-1/2">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
                Welcome to <span className="text-blue-400">MiniShop</span>
              </h1>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                Discover amazing products at great prices. Shop with confidence and enjoy fast delivery!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 active:scale-95">
                  Shop Now
                </button>
                <button className="border cursor-pointer border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 w-full lg:w-1/2 h-full flex items-center justify-center mt-6 lg:mt-0">
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full max-h-[400px] lg:max-h-none">
                <img
                  src={home}
                  alt="E-commerce Shopping"
                  className="w-full h-full object-contain lg:object-cover rounded-xl lg:rounded-2xl"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-gray-900/50 to-transparent rounded-xl lg:rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Slider */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 mt-8 sm:mt-12 lg:mt-16">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-0 text-center sm:text-left">
            Featured Products
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <label className="text-gray-300 text-sm sm:text-base font-medium">Sort by Price:</label>

            <div className="relative w-full sm:w-52">
              <input
                type="range"
                min={-1}
                max={1}
                step={1}
                value={filterValue}
                onChange={(e) => setFilterValue(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer accent-blue-500 shadow-md hover:accent-blue-400 transition-all"
              />

              <div className="absolute top-1  left-1/2 transform -translate-x-1/2 -translate-y-6 px-2 py-1 rounded-md text-sm font-semibold 
                              text-white bg-gray-800 shadow-lg">
                {filterValue === 1 ? (
                  <span className="text-red-400">High ↓ Low</span>
                ) : filterValue === -1 ? (
                  <span className="text-green-400">Low ↑ High</span>
                ) : (
                  <span className="text-blue-400">Default</span>
                )}
              </div>

              <div className="flex justify-between text-gray-400 text-xs sm:text-sm mt-1 px-1">
                <span>Low</span>
                <span>High</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {status === "loading" && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <span className="ml-3 text-lg">Loading products...</span>
          </div>
        )}

        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
          {status === "succeeded" && filteredProducts.length > 0
            ? filteredProducts.map((product) => (
                <div key={product.id} className="p-1">
                  <ProductCard product={product} small />
                </div>
              ))
            : status === "succeeded" && products.length === 0
            ? <div className="col-span-full text-center py-12 text-gray-400 text-lg">No products found.</div>
            : null}
        </div>

        {status === "failed" && (
          <div className="text-center py-12">
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-red-400 font-semibold mb-2">Failed to load products</p>
              <p className="text-gray-400 text-sm mb-4">Please check your connection and try again.</p>
              <button
                onClick={() => dispatch(fetchProducts())}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
              >
                Retry
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 mt-12 sm:mt-16 lg:mt-20 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">&copy; 2024 MiniShop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
