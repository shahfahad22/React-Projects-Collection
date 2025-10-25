import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
import { HiMenu, HiX, HiShoppingCart } from "react-icons/hi";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);
  const cartItems = useSelector((state) => state.cart?.items || []);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    setMenuOpen(false);
  };

  if (!isLoggedIn) return null;

  return (
    <header className="bg-gray-900 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">MiniShop</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-white hover:text-blue-400 transition-colors duration-200"
          >
            Home
          </Link>

          {/* Cart Icon Only */}
          <Link
            to="/cart"
            className="relative text-white hover:text-blue-400 transition-colors duration-200"
          >
            <HiShoppingCart size={28} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>

          <Link
            to="/checkout"
            className="text-white hover:text-blue-400 transition-colors duration-200"
          >
            Checkout
          </Link>

          {/* Gradient Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 active:scale-95"
          >
            Logout
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none z-50 relative"
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full bg-gray-900 z-40 transform transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-end px-4 pt-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white focus:outline-none"
          >
            <HiX size={28} />
          </button>
        </div>

        <div className="px-4 py-8 flex flex-col items-center space-y-4">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-white text-lg hover:text-blue-400 transition-colors duration-200"
          >
            Home
          </Link>

          {/* Mobile Cart Icon Only */}
          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="relative text-white text-lg hover:text-blue-400 transition-colors duration-200"
          >
            <HiShoppingCart size={28} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>

          <Link
            to="/checkout"
            onClick={() => setMenuOpen(false)}
            className="text-white text-lg hover:text-blue-400 transition-colors duration-200"
          >
            Checkout
          </Link>

          {/* Mobile Logout Button Gradient */}
          <button
            onClick={handleLogout}
            className=" from-red-500 cursor-pointer to-red-700 hover:from-red-600 hover:to-red-800 text-white font-semibold px-2 py-1 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 active:scale-95"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
