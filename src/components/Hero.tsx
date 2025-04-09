
import React from 'react';
import { ArrowRight, Calendar, MapPin, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.jpg';

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="flex flex-col items-center text-center">
          <span className="text-seec-300 text-lg mb-4 animate-fade-in">December 13-15, 2024 | IIT Mandi, Himachal Pradesh, India</span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            IX International Conference on<br />Sustainable Energy and Environmental Challenges
          </h1>
          <p
            className="text-xl text-white/90 max-w-3xl mb-10 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Join leading researchers and professionals to address critical challenges in energy, environment, and sustainability
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto w-full mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex items-center">
              <Calendar className="text-seec-300 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-white">Important Dates</h3>
                <p className="text-white/80 text-sm">Abstract due: Sept 15, 2024</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex items-center">
              <MapPin className="text-seec-300 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-white">Venue</h3>
                <p className="text-white/80 text-sm">IIT Mandi, Himachal Pradesh</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex items-center">
              <FileText className="text-seec-300 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-white">Submissions</h3>
                <p className="text-white/80 text-sm">Now open</p>
              </div>
            </div>
          </div>
          
          <div className="space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/registration" className="btn btn-primary">
              Register Now
            </Link>
            <Link to="/call-for-papers" className="btn bg-white text-seec-600 hover:bg-gray-100">
              Submit Paper
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Icon */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" aria-label="Scroll down">
          <ArrowRight size={24} className="text-white transform rotate-90" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
