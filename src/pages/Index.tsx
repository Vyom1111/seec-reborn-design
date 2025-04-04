
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Dates from '../components/Dates';
import Committee from '../components/Committee';
import CallForPapers from '../components/CallForPapers';
import Registration from '../components/Registration';
import Contact from '../components/Contact';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Dates />
      <Committee />
      <CallForPapers />
      <Registration />
      <Contact />
    </div>
  );
};

export default Index;
