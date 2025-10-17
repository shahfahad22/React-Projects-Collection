import React from "react";
import ContactBanner from "../assets/ContactBanner.jpg"; 
const Contact = () => {
  return (
    <div className="text-white bg-[#111518] min-h-screen">
      {/* Banner */}
      <div
        className="w-full h-64 md:h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${ContactBanner})` }}
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-black/40 p-4 rounded">
          Contact Us
        </h1>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-red-500 mb-6">Get in Touch</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>
          <button className="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full transition mt-2 w-max">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
