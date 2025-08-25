import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpeg";

function Navbar({ setCurentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (page) => {
    setCurentPage(page);
    setIsOpen(false); // Mobile pe menu close ho jaye
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={handleToggle}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>

      {/* Navigation Links */}
      <ul className={`ul-list ${isOpen ? "active" : ""}`}>
        <li onClick={() => handleClick("home")}>Home</li>
        <li onClick={() => handleClick("products")}>Products</li>
        <li onClick={() => handleClick("about")}>About</li>
        <li onClick={() => handleClick("contact")}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
