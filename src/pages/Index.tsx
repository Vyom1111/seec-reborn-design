
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Dates from '../components/Dates';
import CallForPapers from '../components/CallForPapers';

const Index: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Dates />
      <CallForPapers />
    </>
  );
};

export default Index;
