import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navItems = ["Home", "About Us", "Vision & Mission", "IBDP", "ADS School", "School Calendar", "Contact"];

  return (
    <header className="bg-white shadow-md fixed w-full z-10 left-0 top-0 ">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto p-4">
        {/* Logo */}
        <div className="logo">
          <img width={60} src={logo} alt="logo" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center xl:space-x-8 md:space-x-6">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => setActive(item)}
              className={`relative cursor-pointer transition-colors duration-300 ${
                active === item ? "text-[#00247D]" : "text-gray-800"
              }`}
            >
              {item}
              {/* Animated Underline */}
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#FFD700] transition-transform duration-300 ${
                  active === item ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow-md">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => {
                setActive(item);
                setIsOpen(false);
              }}
              className={`cursor-pointer transition-colors duration-300 ${
                active === item ? "text-[#00247D]" : "text-gray-800"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
