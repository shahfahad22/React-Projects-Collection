import React from "react";
import LaptopImg from "../assets/laptop.jpg";
import DroneImg from "../assets/Drone.jpg";
import SmartphoneImg from "../assets/Smartphones.jpg";
import GamingImg from "../assets/Gaming.jpg";

const HomeGrid = () => {
  const products = [
    {
      id: 1,
      title: "Laptops",
      count: 245,
      image: LaptopImg,
      large: true,
    },
    {
      id: 2,
      title: "Drones",
      count: 28,
      image: DroneImg,
    },
    {
      id: 3,
      title: "Smartphones",
      count: 273,
      image: SmartphoneImg,
    },
    {
      id: 4,
      title: "Gaming",
      count: 25,
      image: GamingImg,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-6">
      {/* Left Large Card */}
      <div
        className="relative overflow-hidden rounded-lg cursor-pointer group"
        style={{ gridRow: "span 2" }}
      >
        <img
          src={products[0].image}
          alt={products[0].title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white transition-colors duration-300 group-hover:bg-red-500/60">
          <h2 className="text-3xl font-bold">{products[0].title}</h2>
          <p className="mt-2 text-lg">{products[0].count} Products</p>
        </div>
      </div>

      {/* Right Top Card */}
      <div className="relative overflow-hidden rounded-lg cursor-pointer group">
        <img
          src={products[1].image}
          alt={products[1].title}
          className="w-full h-80 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white transition-colors duration-300 group-hover:bg-red-500/60">
          <h2 className="text-2xl font-bold">{products[1].title}</h2>
          <p className="mt-1 text-base">{products[1].count} Products</p>
        </div>
      </div>

      {/* Right Bottom Cards */}
      <div className="grid grid-cols-2 gap-6 mt-6 md:mt-0">
        {products.slice(2).map((product) => (
          <div
            key={product.id}
            className="relative overflow-hidden rounded-lg cursor-pointer group"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white transition-colors duration-300 group-hover:bg-red-500/60">
              <h2 className="text-lg font-bold">{product.title}</h2>
              <p className="mt-1 text-sm">{product.count} Products</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeGrid;
