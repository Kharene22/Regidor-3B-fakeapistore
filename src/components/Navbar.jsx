import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section id="navbar">
      <nav className="bg-gray-900 text-white p-4 shadow-lg">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold tracking-wider text-white">Clothora</h1>

          <div className="flex items-center space-x-6 text-lg font-medium">
            <Link to="/" className="hover:text-yellow-400 transition duration-300">
              Home
            </Link>
            <Link to="/features" className="hover:text-yellow-400 transition duration-300">
              Features
            </Link>
            <Link to="/" className="hover:text-yellow-400 transition duration-300">
              Blog
            </Link>

    
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full focus:outline-none hover:ring-2 ring-yellow-400"
              >
                <img
                  src="/prof.jpg"
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg py-2">
                  <Link
                    to="/user/1"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                  >
                    View Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                  >
                    Settings
                  </Link>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                    onClick={() => alert("Logged Out!")}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
