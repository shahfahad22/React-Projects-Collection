import React from "react";
import logo from "../../assets/images/logo.png";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20">
      <div className="flex flex-wrap max-w-[1250px] gap-y-10 mx-auto px-13 gap-x-20">
        <div className="flex-1 basis-[300px]">
          <a href="">
            <img className="h-[80px]" src={logo} alt="logo" />
          </a>
          <p className="text-zinc-600 mt-6 max-w-[340px] ">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy
          </p>
          <p className="text-zinc-800 mt-6">
            2025 &copy; all right reserved
          </p>
        </div>
        {/* Company */}
        <ul className="flex-1"> 
            <li>
                <h5 className="text-zinc-800 text-2xl font-bold">Company</h5>
            </li>
            <li className="mt-6">
                <a href="#" className="hover:text-orange-500 text-zinc-500 ">About</a>
            </li>
            <li className="mt-6">
                <a href="#"  className="hover:text-orange-500 text-zinc-500 ">FAQ'S</a>
            </li>
        </ul>
        
  {/* Support */}
         <ul className="flex-1"> 
            <li>
                <h5 className="text-zinc-800 text-2xl font-bold">Support</h5>
            </li>
            <li className="mt-6">
                <a href="#" className="hover:text-orange-500 text-zinc-500 ">Support center</a>
            </li>
            <li className="mt-6">
                <a href="#"  className="hover:text-orange-500 text-zinc-500 ">Feedback</a>
            </li>
            <li className="mt-6">
                <a href="#"  className="hover:text-orange-500 text-zinc-500 ">Contact Us</a>
            </li>
        </ul>
        <div className="flex-1">
            <h5 className="hover:text-orange-500 text-zinc-500 font-black">Stay Connected</h5>
            <p className="mt-6 text-zinc-600">
                Questions or Feedback? <br />
                We'd love to hear from 0
            </p>
            <div className="bg-white p-1 rounded- mt-6 flex ">
                <input type="email" name="email" id="email" placeholder="Email Address" autoComplete="off" className="h[5vh] pl-4 flex-1 focus:outline-none" />
                <button className="bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer">
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
