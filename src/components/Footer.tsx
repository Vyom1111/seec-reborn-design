
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import iitjLogo from '@/assets/iitj-logo.png'; // You'll need to add this image
import iseesLogo from '@/assets/isees-logo.png'; // You'll need to add this image

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-seec-800 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Conference Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">X SEEC 2024</h3>
            <p className="mb-4">
              International Conference on Sustainable Energy and Environmental Challenges
            </p>
            <p className="mb-4">December 15-18, 2024</p>
            <p>IIT Jodhpur, Himachal Pradesh, India</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-seec-300 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-seec-300 transition-colors">About</Link></li>
              <li><Link to="/call-for-papers" className="hover:text-seec-300 transition-colors">Call for Papers</Link></li>
              <li><Link to="/registration" className="hover:text-seec-300 transition-colors">Registration</Link></li>
              <li><Link to="/contact" className="hover:text-seec-300 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="mr-3 text-seec-300 flex-shrink-0 mt-1" size={18} />
                <span>IIT Jodhpur, Kamand Campus, Himachal Pradesh, India - 175075</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 text-seec-300 flex-shrink-0" size={18} />
                <a href="mailto:ixseec@iitmandi.ac.in" className="hover:text-seec-300 transition-colors">ixseec@iitmandi.ac.in</a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 text-seec-300 flex-shrink-0" size={18} />
                <a href="tel:+911905267xxx" className="hover:text-seec-300 transition-colors">+91 1905 267xxx</a>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="bg-seec-700 p-2 rounded-full hover:bg-seec-600 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" aria-label="Twitter" className="bg-seec-700 p-2 rounded-full hover:bg-seec-600 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" aria-label="LinkedIn" className="bg-seec-700 p-2 rounded-full hover:bg-seec-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" aria-label="Youtube" className="bg-seec-700 p-2 rounded-full hover:bg-seec-600 transition-colors">
                  <Youtube size={20} />
                </a>
                <a href="#" aria-label="Instagram" className="bg-seec-700 p-2 rounded-full hover:bg-seec-600 transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Organizers */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Organizers</h3>
            <div className="space-y-6">
              <div>
                <img src={iitjLogo} alt="IIT-J Logo" className="h-16 mb-2 bg-white p-1 rounded" />
                <span className="block text-sm">Indian Institute of Technology Mandi</span>
              </div>
              <div>
                <img src={iseesLogo} alt="ISEES Logo" className="h-14 mb-2 bg-white p-1 rounded" />
                <span className="block text-sm">International Society for Energy, Environment and Sustainability</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="text-center text-sm text-gray-400">
            <p>© {currentYear} X SEEC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
