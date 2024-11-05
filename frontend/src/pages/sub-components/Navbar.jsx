import { useState } from "react";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <nav className="sticky top-0 z-[1] bg-gradient-to-r from-gray-900 via-purple-800 to-blue-900 text-white px-6 py-4 shadow-lg">
      <div className="flex justify-between items-center max-w-[1050px] mx-auto">
        <h1 className="text-3xl font-bold tracking-wide">
          <Link
            onClick={() => setShowPortfolio(true)}
            to={"#portfolio"}
            className="hover:text-gray-300 transition-colors duration-200"
          >
            MyPortfolio
          </Link>

          {/* {showPortfolio && <Portfolio />} */}
        </h1>

        {/* Hamburger Icon */}
        <button
          className="text-white sm:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex sm:items-center sm:space-x-4 w-full sm:w-auto mt-4 sm:mt-0 transition-all duration-300 ease-in-out`}
        >
          {/* Login and Sign Up */}
          <Link
            to="http://localhost:5173/login"
            target="_blank"
            className="block sm:inline text-center px-4 py-2 mt-2 sm:mt-0 text-lg font-medium bg-blue-700 rounded-lg hover:bg-blue-800 text-white shadow-lg transition-transform transform hover:scale-105"
          >
            Login
          </Link>
          <Link
            to="http://localhost:5173/register"
            target="_blank"
            className="block sm:inline  text-center px-4 py-2 mt-2 sm:mt-0 text-lg font-medium bg-green-700 rounded-lg hover:bg-green-800 text-white shadow-lg transition-transform transform hover:scale-105"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
