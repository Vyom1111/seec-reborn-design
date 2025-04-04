
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="mb-4">About IX SEEC</h2>
          <div className="w-20 h-1 bg-seec-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The International Conference on Sustainable Energy and Environmental Challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 mb-4">
              The 9th International Conference on Sustainable Energy and Environmental Challenges (SEEC-2024) 
              will be held from February 19-22, 2024, at the Department of Mechanical Engineering, Indian Institute 
              of Technology Indore, India.
            </p>
            <p className="text-gray-700 mb-4">
              SEEC is a premier international conference that brings together researchers, scientists, engineers, 
              academics, and industry professionals to exchange and share their experiences and research results 
              on various aspects of sustainable energy and environmental challenges.
            </p>
            <p className="text-gray-700 mb-4">
              The conference provides a platform for participants from all over the world to present and discuss 
              the most recent innovations, trends, concerns, practical challenges, and solutions adopted in the 
              fields of sustainable energy and environmental engineering.
            </p>
          </div>
          <div className="bg-seec-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-seec-800">Conference Highlights</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-seec-100 rounded-full p-1 mr-3 mt-1">
                  <div className="bg-seec-500 rounded-full w-2 h-2"></div>
                </div>
                <span>Keynote speeches by distinguished researchers and professionals</span>
              </li>
              <li className="flex items-start">
                <div className="bg-seec-100 rounded-full p-1 mr-3 mt-1">
                  <div className="bg-seec-500 rounded-full w-2 h-2"></div>
                </div>
                <span>Peer-reviewed paper presentations</span>
              </li>
              <li className="flex items-start">
                <div className="bg-seec-100 rounded-full p-1 mr-3 mt-1">
                  <div className="bg-seec-500 rounded-full w-2 h-2"></div>
                </div>
                <span>Poster sessions showcasing ongoing research</span>
              </li>
              <li className="flex items-start">
                <div className="bg-seec-100 rounded-full p-1 mr-3 mt-1">
                  <div className="bg-seec-500 rounded-full w-2 h-2"></div>
                </div>
                <span>Panel discussions on pressing challenges in sustainability</span>
              </li>
              <li className="flex items-start">
                <div className="bg-seec-100 rounded-full p-1 mr-3 mt-1">
                  <div className="bg-seec-500 rounded-full w-2 h-2"></div>
                </div>
                <span>Networking opportunities with leading researchers and industry professionals</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
