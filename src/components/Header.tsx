
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import iitjLogo from '../assets/iitj-logo.png'; // You'll need to add this image
// import iseesLogo from '../assets/isees-logo.png'; // You'll need to add this image

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
        scrolled ? 'bg-white shadow-md py-2' : 'bg-seec-700/80 backdrop-blur-md py-3'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-4">
              <img src={iitjLogo} alt="IIT-J Logo" className="h-12 w-auto hidden md:block" />
              {/* <div className="flex flex-col">
                <span className={`text-xl font-bold ${scrolled ? 'text-seec-700' : 'text-white'}`}>
                  X SEEC
                </span>
                <span className={`text-xs ${scrolled ? 'text-seec-600' : 'text-white/80'}`}>
                  Dec 15-18, 2024 | IIT Jodhpur
                </span>
              </div> */}
              {/* <img src={iseesLogo} alt="ISEES Logo" className="h-10 w-auto hidden md:block" /> */}
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.path}>
                    <Link 
                      to={link.path}
                      className={cn(
                        "px-3 py-2 text-sm rounded-md transition-colors",
                        isActive(link.path)
                          ? scrolled
                            ? "bg-seec-100 text-seec-700 font-medium"
                            : "bg-white/20 text-white font-medium"
                          : scrolled
                          ? "text-seec-700 hover:bg-seec-50" 
                          : "text-white hover:bg-white/10"
                      )}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-md ${scrolled ? 'text-seec-700 hover:bg-seec-50' : 'text-white hover:bg-white/10'}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md py-3 px-4 animate-fade-in">
            <div className="flex flex-col divide-y divide-gray-100">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`${
                    isActive(link.path)
                      ? 'text-seec-600 font-medium'
                      : 'text-seec-700 hover:text-seec-500'
                  } py-3 transition-colors`}
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
