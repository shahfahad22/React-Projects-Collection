import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiDesktopMouse2 } from "react-icons/ci";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);

  // Load current user and cart count
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(user);

    const updateCartCount = () => {
      if (!user) return setCartItemCount(0);
      const userCart = JSON.parse(localStorage.getItem(`cart_${user.email}`)) || [];
      setCartItemCount(userCart.length);
    };

    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);
    return () => window.removeEventListener("cartUpdated", updateCartCount);
  }, []);

  const handleLogout = () => {
    if (currentUser) {
      // Do not remove cart, only remove auth and currentUser
      localStorage.removeItem("auth");
      localStorage.removeItem("currentUser");
      setCurrentUser(null);
      navigate("/login");
    }
  };

  const links = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-[#111518] text-white py-5 px-8 md:px-16 flex items-center justify-between shadow-lg fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2 text-3xl font-bold hover:text-gray-200 transition"
      >
        <CiDesktopMouse2 className="text-4xl" />
        Gadgets
      </Link>

      {/* Hamburger Button (Mobile) */}
      <button
        className="md:hidden text-3xl focus:outline-none"
        onClick={() => setMenuOpen(true)}
      >
        <FaBars />
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10 text-lg font-semibold">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-gray-200 text-xl"
          >
            {link.label}
          </Link>
        ))}

        {/* Cart */}
        <Link
          to="/cart"
          className="relative flex items-center hover:text-gray-200 transition"
        >
          <FaShoppingCart className="text-3xl" />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-xs rounded-full px-1.5 py-0.5">
              {cartItemCount}
            </span>
          )}
        </Link>

        {/* Logout */}
        {currentUser && (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 cursor-pointer text-white font-semibold py-2 px-5 rounded-md text-lg transition"
          >
            Logout
          </button>
        )}
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-[72vh] w-2/4 bg-[#111518] text-white z-50 transform transition-transform duration-300 md:hidden
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-700">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <CiDesktopMouse2 className="text-3xl" />
            Gadgets
          </div>
          <button onClick={() => setMenuOpen(false)} className="text-3xl">
            <FaTimes />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col items-start gap-6 p-6 text-lg">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="text-xl hover:text-gray-300 transition"
            >
              {link.label}
            </Link>
          ))}

          {/* Cart */}
          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="relative flex items-center hover:text-gray-300 transition text-xl"
          >
            <FaShoppingCart className="text-3xl" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1.5 py-0.5">
                {cartItemCount}
              </span>
            )}
          </Link>

          {/* Logout */}
          {currentUser && (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-md text-lg transition mt-3"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
