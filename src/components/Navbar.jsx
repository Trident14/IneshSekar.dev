import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav id="navbar" className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold tracking-tighter">
             <span className="text-blue-600"> Inesh Sekar </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#hero" className="nav-link">Home</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#github" className="nav-link">GitHub</a>
              <a href="#resume" className="nav-link">Resume</a>
              <a href="#achievements" className="nav-link">Achievements</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white/90 backdrop-blur-sm animate__animated animate__fadeIn`}>
        <div className="flex flex-col items-start px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#hero" className="mobile-nav-link" onClick={closeMenu}>Home</a>
          <a href="#projects" className="mobile-nav-link" onClick={closeMenu}>Projects</a>
          <a href="#skills" className="mobile-nav-link" onClick={closeMenu}>Skills</a>
          <a href="#github" className="mobile-nav-link" onClick={closeMenu}>GitHub</a>
          <a href="#resume" className="mobile-nav-link" onClick={closeMenu}>Resume</a>
          <a href="#achievements" className="mobile-nav-link" onClick={closeMenu}>Achievements</a>
          <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
