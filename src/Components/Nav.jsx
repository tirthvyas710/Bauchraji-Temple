import React, { useState, useRef } from 'react';
import Banner from './Banner';
import Page2 from './Page2';
import Page6 from './Page6';


const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navLinks = [
    { href: "#About", label: "About" },
    { href: "#Contact", label: "Contact" },
    { href: "#Banner", label: "Services" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Custom SVG icons
  const MenuIcon = () => (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      className="animate-rotate"
    >
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );

  const CloseIcon = () => (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      className="animate-rotate"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );

  return (
    <nav className="top-0 w-full bg-white backdrop-blur-lg text-black z-50">
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes rotate {
            from {
              transform: rotate(-180deg);
            }
            to {
              transform: rotate(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }

          .animate-slideDown {
            animation: slideDown 0.8s ease-out forwards;
          }

          .animate-slideIn {
            animation: slideIn 0.5s ease-out forwards;
          }

          .animate-rotate {
            animation: rotate 0.3s ease-out forwards;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo with animation */}
          <div className="flex-shrink-0 animate-fadeIn">
            <h1 className="text-xl text-orange-500 font-semibold md:text-2xl lg:text-3xl">
              Jay Mataji
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium transform transition-all duration-300 hover:text-blue-400 hover:scale-110 animate-slideDown"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-black p-2 rounded-md hover:bg-red-100 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={menuRef}
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } bg-white-100 border-b-2`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-red-200 hover:text-black transform transition-all duration-300 ${
                isMenuOpen ? 'animate-slideIn' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.label}
              {link.label === "Services" }
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;

