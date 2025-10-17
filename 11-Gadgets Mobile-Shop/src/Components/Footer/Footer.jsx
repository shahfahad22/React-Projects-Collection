import React from "react";
import { CiDesktopMouse2 } from "react-icons/ci";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, to: "https://facebook.com" },
    { icon: <FaTwitter />, to: "https://twitter.com" },
    { icon: <FaInstagram />, to: "https://instagram.com" },
    { icon: <FaLinkedinIn />, to: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-[#111518] text-white w-full">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Logo + Description */}
        <div className="flex flex-col gap-6 md:w-1/3">
          <div className="flex items-center gap-3 text-3xl font-bold">
            <CiDesktopMouse2 className="text-4xl" />
            Gadgets
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Discover the latest gadgets and electronics at unbeatable prices. 
            Quality, performance, and style all in one place. Shop smartphones, 
            laptops, accessories, and much more. Stay updated with our latest offers 
            and products! We bring you cutting-edge technology with reliable support.
          </p>
          {/* Social Icons */}
          <div className="flex gap-5 mt-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.to}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-red-500 transition text-lg"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Useful Information Sections */}
        <div className="flex flex-col md:flex-row gap-12 md:w-2/3 justify-between">
          {/* Column 1 */}
          <ul className="text-gray-300 text-sm space-y-3">
            <li className="font-semibold text-white text-base">Company</li>
            <li>About Gadgets</li>
            <li>Careers</li>
            <li>Press & Media</li>
            <li>Blog & News</li>
            <li>Events & Updates</li>
          </ul>

          {/* Column 2 */}
          <ul className="text-gray-300 text-sm space-y-3">
            <li className="font-semibold text-white text-base">Support</li>
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Shipping & Returns</li>
            <li>Warranty & Repairs</li>
            <li>Contact Us</li>
          </ul>

          {/* Column 3 */}
          <ul className="text-gray-300 text-sm space-y-3">
            <li className="font-semibold text-white text-base">Policies</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Security</li>
            <li>Refund Policy</li>
          </ul>
        </div>
      </div>

      {/* Separator Line */}
      <div className="border-t border-gray-700 w-full"></div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Gadgets. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
