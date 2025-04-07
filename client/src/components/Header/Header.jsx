import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";
import { GoChevronDown } from "react-icons/go";

const Header = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage(); // Using global language state
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [openSubNav, setOpenSubNav] = useState(null); // Track which subNav is open

  // const navItems = [
  //   { key: "home", path: "/" },
  //   { key: "about_us", path: "/about-us" },
  //   { key: "vision_mission", path: "/vision-&-mission" },
  //   { key: "ibdp", path: "/ibdp" },
  //   { key: "ads_school", path: "/ads-school" },
  //   { key: "school_calendar", path: "/school-calendar" },
  //   { key: "contact", path: "/contact" }
  // ];

  const navItems = [
    {
      key: "Home",
      path: "/",
      subNavs: [
        { key: "Latest Announcements", path: "/latest-announcement" },
        { key: "Upcoming Events", path: "/upcoming-events" },
      ],
    },
    {
      key: "About Us",
      path: "/about-us",
      subNavs: [
        { key: "School History", path: "/about-us/school-history" },
        {
          key: "School Organizational Chart",
          path: "/about-us/school-organizational-chart",
        },
        {
          key: "National Education Philosophy",
          path: "/about-us/national-education-philosophy",
        },
        { key: "School Identity", path: "/about-us/school-identity" },
        { key: "School Song", path: "/about-us/school-song" },
        {key: "Maps & Directions", path: "/about-us/maps&directions"},
      ],
    },
    {
      key: "News",
      path: "/news",
      subNavs: [
        { key: "School Highlights", path: "/school-highlights" },
        { key: "Program Documentation", path: "/program-documentation" },
      ],
    },
    {
      key: "Administration",
      path: "/administration",
      subNavs: [
        { key: "Principal", path: "/principal" },
        { key: "School Management", path: "school-management" },
        { key: "Teachers & Staff Directory", path: "teachers&staff-directory" },
        { key: "Student Affairs Unit", path: "student-affairs-unit" },
        { key: "Curriculum Management", path: "curriculum-management" },
        { key: "Co-Curriculum Management", path: "co-curriculum-management" },
        {
          key: "Special Education Integration Program (SEIP) Management",
          path: "special-education-integration-program-manaagement",
        },
      ],
    },
    {
      key: "School Cooperative",
      path: "/school-cooperative",
      subNavs: [
        {
          key: "Parent-Teacher Association (PTA)",
          path: "/parent-teacher-association",
        },
        {
          key: "Parent and Community Involvement",
          path: "/parent&community-involvement",
        },
        { key: "Bonding & Networking", path: "/bonding&networking" },
        { key: "PTA Payments", path: "/pta-payments" },
      ],
    },
    { key: "Achievements", path: "/achievements" },
    {
      key: "Contact Us",
      path: "/contact-us",
      subNavs: [
        { key: "School Location", path: "/school-location" },
        { key: "Office Operating Hours", path: "/office-operating-hours" },
        { key: "Official Email Address", path: "/official-email-address" },
        { key: "Phone & Fax Number", path: "/phone&fax-number" },
      ],
    },
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
          {navItems.map(({ key, path, subNavs }) => (
            <li
              key={key}
              className="relative group cursor-pointer transition-colors duration-300"
            >
              <Link
                to={path || "#"}
                onClick={() => setActive(key)}
                className={`flex items-center ${
                  active === key ? "text-[#00247D]" : "text-gray-800"
                }`}
              >
                {t(key)}
                {subNavs && (
                  <GoChevronDown className="ml-2 text-gray-600" />
                )}{" "}
                {/* Add Chevron Down Icon */}
              </Link>
              {subNavs && (
                <div className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md border hidden group-hover:block">
                  <ul className="w-[15rem]">
                    {subNavs.map(({ key: subKey, path: subPath }) => (
                      <li
                        key={subKey}
                        className="px-4 py-3 border-b border-gray-200 hover:bg-gray-100"
                      >
                        <Link
                          to={subPath}
                          onClick={() => setActive(subKey)}
                          className="text-gray-600"
                        >
                          {t(subKey)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
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
        <ul className="xl:hidden h-screen absolute top-full left-0 w-1/2 sm:w-1/3 bg-white shadow-md flex flex-col items-center py-4">
          {navItems.map(({ key, path, subNavs }) => (
            <li key={key} className="w-full">
              <div
                className="block border-b cursor-pointer border-gray-200 w-full p-4 hover:bg-gray-100 duration-500 flex justify-between items-center"
                onClick={() => setOpenSubNav(openSubNav === key ? null : key)} // Toggle subNav visibility
              >
                <span className="text-gray-800 text-lg">{t(key)}</span>
                {subNavs && <GoChevronDown className="text-gray-600" />}{" "}
                {/* Add Chevron Down Icon */}
              </div>
              {subNavs &&
                openSubNav === key && ( // Show subNavs only if the current item is active
                  <ul className="pl-4 bg-gray-50">
                    {subNavs.map(({ key: subKey, path: subPath }) => (
                      <li
                        key={subKey}
                        className="py-2 border-b border-gray-200"
                      >
                        <Link
                          to={subPath}
                          className="text-gray-800 text-sm block hover:bg-gray-100 p-2"
                          onClick={() => setIsOpen(false)} // Close the menu on subNav click
                        >
                          {t(subKey)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
            </li>
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
