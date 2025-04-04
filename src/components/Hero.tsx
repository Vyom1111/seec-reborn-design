
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient">
      <div className="absolute inset-0 bg-seec-950/10 z-0"></div>
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            9th International Conference on Sustainable Energy and Environmental Challenges (SEEC-2024)
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            February 19-22, 2024 | Department of Mechanical Engineering, IIT Indore, India
          </p>
          <div className="space-x-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/about" className="btn btn-primary">
              Learn More
            </Link>
            <Link to="/registration" className="btn bg-white text-seec-600 hover:bg-gray-100">
              Register Now
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowRight size={24} className="text-white transform rotate-90" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
