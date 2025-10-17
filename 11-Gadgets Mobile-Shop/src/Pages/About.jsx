import React from "react";
 import AboutBanner from "../assets/AboutBanner.jpg"; 
import TeamImage from "../assets/TeamImage.jpg";

const About = () => {
  return (
    <div className="text-white bg-[#111518] mt-18  min-h-screen">
      {/* Banner */}
      <div
        className="w-full h-64 md:h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${AboutBanner})` }}
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-black/40 p-4 rounded">
          About Gadgets
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-10">
        {/* Text */}
        <div className="md:w-2/3 space-y-6">
          <h2 className="text-3xl font-bold text-red-500">Who We Are</h2>
          <p className="text-gray-300 text-lg">
            Gadgets is your ultimate destination for the latest in technology.
            We provide smartphones, laptops, accessories, and more. Our mission
            is to deliver quality products with excellent service.
          </p>
          <p className="text-gray-300 text-lg">
            Our team of experts ensures that every product meets top standards.
            From innovation to customer satisfaction, we are committed to
            providing the best experience for tech enthusiasts.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/3">
          <img
            src={TeamImage}
            alt="Our Team"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
