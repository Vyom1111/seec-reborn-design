
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-seec-950 text-white pt-16 pb-8">
      <div className="container mx-auto container-padding">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">X SEEC 2025</h3>
            <p className="text-gray-300">
              10th International Conference on Sustainable Energy and Environmental Challenges
            </p>
            <p className="text-gray-300 mt-2">
              December 15-18, 2025<br />
              IIT Jodhpur, India
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/committee" className="text-gray-300 hover:text-white transition-colors">
                  Committee
                </Link>
              </li>
              <li>
                <Link to="/dates" className="text-gray-300 hover:text-white transition-colors">
                  Important Dates
                </Link>
              </li>
              <li>
                <Link to="/call-for-papers" className="text-gray-300 hover:text-white transition-colors">
                  Call for Papers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">seec2025@iiti.ac.in</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">+91 731 660 3173</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  IIT Jodhpur, NH 62, Surpura Bypass Rd, Karwar, Jheepasani, Rajasthan 342030, India
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Organized By</h3>
            <p className="text-gray-300">
              Department of Mechanical Engineering
            </p>
            <p className="text-gray-300">
              Indian Institute of Technology Jodhpur
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} X SEEC 2025. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
