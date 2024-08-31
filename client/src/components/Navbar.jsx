import React, { useState, useRef, useEffect } from "react";
import SricityLogo from "../assets/sricityLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const menuButtonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && menuButtonRef.current) {
      const rect = menuButtonRef.current.getBoundingClientRect();
      setPopupPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, [isOpen]);

  return (
    <nav className="bg-gray-900/25 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2 text-xl font-bold">
        <img
          src={SricityLogo}
          alt="Workshop Logo"
          className="h-8 w-8 object-cover rounded-full"
        />
        <span>IoT ML Workshop</span>
      </div>

      <div className="md:hidden">
        <button
          ref={menuButtonRef}
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Popup Menu Below the Icon */}
      {isOpen && (
        <div
          style={{
            top: `${popupPosition.top}px`,
            left: `${popupPosition.left - 170}px`,
            backdropFilter: "blur(10px)", // Apply blur to background
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Light, translucent background
            border: "1px solid rgba(255, 255, 255, 0.3)", // Light border for extra glass effect
          }}
          className="absolute text-white p-4 rounded-lg shadow-lg z-50"
        >
          <div className="flex flex-col space-y-4">
            <a
              href="#news"
              className="font-semibold"
              onClick={() => setIsOpen(false)}
            >
              News
            </a>
            <a
              href="#organizing-committee"
              className="font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Organizing Committee
            </a>
            <a
              href="#speakers"
              className="font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Speakers
            </a>
            <a
              href="#schedule"
              className="font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Schedule
            </a>
            <a
              href="#about"
              className="font-semibold"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="https://forms.gle/vpuyXKPCjuxbd9DS6"
              className="font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Register
            </a>
          </div>
        </div>
      )}

      <div className="hidden md:flex md:items-center md:space-x-4">
        <a href="#news" className="relative group font-semibold">
          News
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </a>
        <span>|</span>
        <a
          href="#organizing-committee"
          className="relative group font-semibold"
        >
          Organizing Committee
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </a>
        <span>|</span>
        <a href="#speakers" className="relative group font-semibold">
          Speakers
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </a>
        <span>|</span>
        <a href="#schedule" className="relative group font-semibold">
          Schedule
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </a>
        <span>|</span>
        <a href="#about" className="relative group font-semibold">
          About
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </a>
        <span>|</span>
        <a href="https://forms.gle/vpuyXKPCjuxbd9DS6" className="relative group font-semibold">
          Register
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
