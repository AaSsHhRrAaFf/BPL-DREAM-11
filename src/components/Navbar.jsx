

import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Navbar({ coins }) {
  const [isScrolled, setIsScrolled] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

  
    window.addEventListener("scroll", handleScroll);

    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${
          isScrolled
            ? "bg-white/15 backdrop-blur-md shadow-lg"
            : "bg-white shadow-sm"
        }
        flex items-center justify-between px-4 py-2`}
    >
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          width={40}
          height={40}
          className="mr-2 hover:rotate-12 transition-transform duration-300"
        />
        <span className={`text-lg font-bold text-blue-600 ${
          isScrolled ? "hover:text-blue-400 text-black" : ""
        }`}>
          BPL Dream 11
        </span>
      </div>
      <div className="flex items-center space-x-6">
        <a className={`hover:text-gray-900 transition-colors duration-200 ${
          isScrolled ? "text-gray-900 font-semibold hover:text-blue-600" : "text-gray-600"
        }`}>
          Home
        </a>
        <a className={`hover:text-gray-900 transition-colors duration-200 ${
          isScrolled ? "text-gray-900 font-semibold hover:text-blue-600" : "text-gray-600"
        }`}>
          Fixture
        </a>
        <a className={`hover:text-gray-900 transition-colors duration-200 ${
          isScrolled ? "text-gray-900 font-semibold hover:text-blue-600" : "text-gray-600"
        }`}>
          Teams
        </a>
        <a className={`hover:text-gray-900 transition-colors duration-200 ${
          isScrolled ? "text-gray-900 font-semibold hover:text-blue-600" : "text-gray-600"
        }`}>
          Schedules
        </a>
        <div className="flex items-center text-yellow-500">
          <button
            className={`flex items-center space-x-2 px-4 py-2 rounded-full shadow-sm transition-all duration-200 
              ${
                isScrolled
                  ? "bg-white/10 hover:bg-white/20 border-white/20"
                  : "bg-white hover:bg-gray-50 border-gray-200"
              } border`}
          >
            <span className={`font-medium flex justify-center items-center gap-2 
              ${isScrolled ? "text-gray-900 font-bold" : "text-gray-900"}`}>
              {coins} Coin
              <img
                src="https://img.icons8.com/?size=100&id=GlRpln3p4tC0&format=png&color=000000"
                alt="Coin icon"
                className="w-5 h-5 mr-1"
              />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

