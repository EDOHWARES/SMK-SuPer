import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext"; // Import context

const Header = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage(); // Use global language state
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navItems = [
    { key: "home", path: "/" },
    { key: "about_us", path: "/about-us" },
    { key: "vision_mission", path: "/vision-mission" },
    { key: "ibdp", path: "/ibdp" },
    { key: "ads_school", path: "/ads-school" },
    { key: "school_calendar", path: "/school-calendar" },
    { key: "contact", path: "/contact" }
  ];

  return (
    <header className="bg-white shadow-md fixed w-full z-10 left-0 top-0">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto p-4">
        {/* Logo */}
        <div className="logo">
          <img width={50} src={logo} alt="logo" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex items-center xl:space-x-8 md:space-x-6">
          {navItems.map(({ key, path }) => (
            <Link key={key} to={path}>
              <li
                onClick={() => setActive(key)}
                className={`relative cursor-pointer transition-colors duration-300 ${
                  active === key ? "text-[#00247D]" : "text-gray-800"
                }`}
              >
                {t(key)}
                <span
                  className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#FFD700] transition-transform duration-300 ${
                    active === key ? "scale-x-100" : "scale-x-0"
                  }`}
                ></span>
              </li>
            </Link>
          ))}

          {/* Language Dropdown */}
          <div className="relative ml-6">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="border px-4 py-1 rounded-md text-gray-800 hover:bg-gray-100 transition"
            >
              {t("language")} ▼
            </button>
            {dropdownOpen && (
              <ul className="absolute mt-2 w-28 bg-white shadow-md rounded-md border">
                <li
                  onClick={() => changeLanguage("en")}
                  className={`p-2 hover:bg-gray-100 cursor-pointer ${
                    language === "en" ? "font-bold" : ""
                  }`}
                >
                  English
                </li>
                <li
                  onClick={() => changeLanguage("bm")}
                  className={`p-2 hover:bg-gray-100 cursor-pointer ${
                    language === "bm" ? "font-bold" : ""
                  }`}
                >
                  Bahasa
                </li>
              </ul>
            )}
          </div>
        </ul>

        {/* Mobile Menu Button */}
        <button className="xl:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="xl:hidden h-screen absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4">
          {navItems.map(({ key, path }) => (
            <Link className="border-b border-gray-200 w-full p-4 py-6 hover:bg-gray-100 duration-500" key={key} to={path} onClick={() => setIsOpen(false)}>
              <li className="cursor-pointer text-gray-800 text-lg">{t(key)}</li>
            </Link>
          ))}

          {/* Language Dropdown in Mobile */}
          <div className="relative mt-6">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="border px-4 py-1 rounded-md text-gray-800 hover:bg-gray-100 transition"
            >
              {t("language")} ▼
            </button>
            {dropdownOpen && (
              <ul className="absolute mt-2 w-28 bg-white shadow-md rounded-md border">
                <li
                  onClick={() => {
                    changeLanguage("en");
                    setDropdownOpen(false);
                  }}
                  className={`p-2 hover:bg-gray-100 cursor-pointer ${
                    language === "en" ? "font-bold" : ""
                  }`}
                >
                  English
                </li>
                <li
                  onClick={() => {
                    changeLanguage("bm");
                    setDropdownOpen(false);
                  }}
                  className={`p-2 hover:bg-gray-100 cursor-pointer ${
                    language === "bm" ? "font-bold" : ""
                  }`}
                >
                  Bahasa
                </li>
              </ul>
            )}
          </div>
        </ul>
      )}
    </header>
  );
};

export default Header;
