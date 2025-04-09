
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Committee', path: '/committee' },
    { name: 'Important Dates', path: '/dates' },
    { name: 'Call for Papers', path: '/call-for-papers' },
    { name: 'Registration', path: '/registration' },
    { name: 'Technical Program', path: '/technical-program' },
    { name: 'Speakers', path: '/speakers' },
    { name: 'Travel', path: '/travel' },
    { name: 'Accommodation', path: '/accommodation' },
    { name: 'Sponsorship', path: '/sponsorship' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white text-seec-700 shadow-md py-2' : 'bg-transparent text-white py-4'
      }`}
    >
      <div className="container mx-auto container-padding">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className={`text-xl font-bold ${scrolled ? 'text-seec-700' : 'text-white'}`}>
              IX SEEC
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? scrolled
                      ? 'text-seec-600 font-semibold underline'
                      : 'text-white font-semibold underline'
                    : scrolled
                    ? 'text-seec-700 hover:text-seec-500'
                    : 'text-white hover:text-gray-300'
                } transition`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden ${scrolled ? 'text-seec-700' : 'text-white'} hover:text-seec-600`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white text-seec-700 shadow-md py-4 px-4 animate-slide-in-right">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`${
                    isActive(link.path)
                      ? 'text-seec-600 font-semibold underline'
                      : 'text-seec-700 hover:text-seec-500'
                  } py-2 transition`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
