import React, { useEffect, useState, useRef } from 'react';
import logo from "../../assets/images/logo.png";
import { IoMdHeart } from "react-icons/io";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { TbMenu2 } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';
import { gsap } from "gsap";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const iconsRef = useRef([]);
  const mobileLinksRef = useRef([]);

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Logo animation
    gsap.fromTo(logoRef.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" });

    // Desktop Links animation
    gsap.fromTo(
      linksRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
    );

    // Icons animation
    gsap.fromTo(
      iconsRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    if (showMenu) {
      // Animate mobile links one by one
      gsap.fromTo(
        mobileLinksRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.2, ease: "power3.out" }
      );
    }
  }, [showMenu]);

  const mobileMenuClasses = `flex flex-col shadow-xl gap-y-6 bg-orange-500/15 backdrop-blur-xl p-10 md:hidden items-center gap-x-8 absolute h-[50vh] top-[70px] -right-full transform translate-x-0 rounded-2xl transition-all duration-500 max-w-[260px] w-full ${showMenu ? 'left-1/2' : ''}`;

  return (
    <header className={`bg-white fixed top-0 right-0 left-0 z-50 shadow-lg ${isScrolled ? 'drop-shadow-[0-4px_25px_rgba(0,0,0,.7)]' : ''}`}>
      <nav className="max-w-[1250px] mx-auto px-10 flex md:h-[14vh] h-[14vh] items-center justify-between">
        {/* Logo */}
        <Link href="" ref={logoRef}>
          <img className="h-[80px]" src={logo} alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="flex items-center gap-x-8">
          <ul className="md:flex hidden items-center gap-x-8">
            {["Home", "About Us", "Contact Us"].map((text, i) => (
              <li key={i} ref={el => linksRef.current[i] = el}>
                <Link
                  to={text === "Home" ? "/" : text === "About Us" ? "/about" : "/contact"}
                  className={`font-semibold tracking-wider text-[20px] ${text === "Home" ? "text-orange-500" : "text-zinc-800 hover:text-orange-500"}`}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-x-5">
            {[IoMdHeart, RiShoppingBag4Fill, TbMenu2].map((IconComp, i) => (
              <span key={i} ref={el => iconsRef.current[i] = el} onClick={i === 2 ? toggleMenu : undefined}>
                <IconComp className={`text-zinc-800  cursor-pointer text-2xl hover:text-orange-500 ${i === 2 ? 'text-3xl md:hidden' : ''}`} />
              </span>
            ))}

            {/* Close icon for mobile menu */}
            {showMenu && (
              <MdClose className='text-zinc-800 text-3xl md:hidden cursor-pointer' onClick={toggleMenu} />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <ul className={mobileMenuClasses}>
          {["Home", "About Us", "Contact Us"].map((text, i) => (
            <li key={i} ref={el => mobileLinksRef.current[i] = el}>
              <Link
                to={text === "Home" ? "/" : text === "About Us" ? "/about" : "/contact"}
                className={`font-semibold tracking-wider text-[20px] ${text === "Home" ? "text-orange-500" : "text-zinc-800 "}`}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
