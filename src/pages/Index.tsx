
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, FileText } from 'lucide-react';
import Hero from '../components/Hero';
import About from '../components/About';
import Dates from '../components/Dates';
import CallForPapers from '../components/CallForPapers';
import HomeAbout from '../components/HomeAbout';
import NewsSummary from '../components/NewsSummary';

const Index: React.FC = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-16">
            {/* Important Dates Section */}
            <section>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-seec-800 mb-2">Important Dates</h2>
                <div className="w-20 h-1 bg-seec-500 mx-auto"></div>
              </div>
              <div className="max-w-4xl mx-auto">
                <Dates isPreview={true} />
                <div className="text-center mt-8">
                  <Link to="/dates" className="inline-flex items-center text-seec-600 hover:text-seec-700 font-medium">
                    View all dates <ArrowRight size={18} className="ml-1" />
                  </Link>
                </div>
              </div>
            </section>

            {/* Call for Papers Preview */}
            <section>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-seec-800 mb-2">Call for Papers</h2>
                <div className="w-20 h-1 bg-seec-500 mx-auto"></div>
              </div>
              <div className="max-w-4xl mx-auto">
                <CallForPapers isPreview={true} />
                <div className="text-center mt-8">
                  <Link to="/call-for-papers" className="inline-flex items-center text-seec-600 hover:text-seec-700 font-medium">
                    View submission details <ArrowRight size={18} className="ml-1" />
                  </Link>
                </div>
              </div>
            </section>

            {/* News & Updates */}
            <NewsSummary />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
