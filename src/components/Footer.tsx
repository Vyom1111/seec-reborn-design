
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-seec-950 text-white pt-16 pb-8">
      <div className="container mx-auto container-padding">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">IX SEEC 2024</h3>
            <p className="text-gray-300">
              9th International Conference on Sustainable Energy and Environmental Challenges
            </p>
            <p className="text-gray-300 mt-2">
              December 13-15, 2024<br />
              IIT Mandi, Himachal Pradesh, India
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
              <li>
                <Link to="/registration" className="text-gray-300 hover:text-white transition-colors">
                  Registration
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">info@ixseec.org</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">+91 1234 567890</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Indian Institute of Technology Mandi,
                  Kamand Campus, VPO Kamand,
                  Mandi, Himachal Pradesh 175005, India
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Organized By</h3>
            <p className="text-gray-300 mb-2">
              IIT Mandi Catalyst
            </p>
            <p className="text-gray-300">
              International Society for Energy, Environment and Sustainability (ISEES)
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} IX SEEC. All rights reserved.
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
