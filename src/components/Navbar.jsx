// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../assets/icon.jpeg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`p-3 fixed top-0 w-full z-10 navbar ${showNavbar ? '' : '-translate-y-full'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className={`text-white font-bold hidden md:block`}>
          <Link to="/">
            <img src={Icon} alt="icon" className="h-13 w-10 rounded-full" />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {/* Icon for menu (Hamburger Icon) */}
            <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="md:flex md:items-center space-y-8 md:space-y-0 mt-4 mb-4">
            <li className="md:ml-6">
              <Link to="/" className="text-white navbar-btn">
                Home
              </Link>
            </li>
            <li className="md:ml-6">
              <Link to="/blogs" className="text-white navbar-btn">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
