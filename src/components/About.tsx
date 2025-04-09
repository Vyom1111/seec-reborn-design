
import React from 'react';

// Import conference images - you'll need to add these
import conf1 from '../assets/conf1.png';
import conf2 from '../assets/conf2.png';
import conf3 from '../assets/conf3.png';
import conf4 from '../assets/conf4.png';
import conf5 from '../assets/conf5.png';
import conf6 from '../assets/conf6.png';
import conf7 from '../assets/conf7.png';
import conf8 from '../assets/conf8.png';
import conf9 from '../assets/conf9.png';
import conf10 from '../assets/conf10.png';

const About: React.FC = () => {
  const conferenceImages = [
    { src: conf1, alt: "SEEC Conference 1", link: "/conference/1", caption: "SEEC 2015" },
    { src: conf2, alt: "SEEC Conference 2", link: "/conference/2", caption: "SEEC 2016" },
    { src: conf3, alt: "SEEC Conference 3", link: "/conference/3", caption: "SEEC 2017" },
    { src: conf4, alt: "SEEC Conference 4", link: "/conference/4", caption: "SEEC 2018" },
    { src: conf5, alt: "SEEC Conference 5", link: "/conference/5", caption: "SEEC 2019" },
    { src: conf6, alt: "SEEC Conference 6", link: "/conference/6", caption: "SEEC 2020" },
    { src: conf7, alt: "SEEC Conference 7", link: "/conference/7", caption: "SEEC 2021" },
    { src: conf8, alt: "SEEC Conference 8", link: "/conference/8", caption: "SEEC 2022" },
    { src: conf9, alt: "SEEC Conference 9", link: "/conference/9", caption: "SEEC 2023" },
    { src: conf10, alt: "SEEC Conference 10", link: "/conference/10", caption: "SEEC 2024" },
  ];


  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="mb-4">About X SEEC</h2>
          <div className="w-20 h-1 bg-seec-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The International Conference on Sustainable Energy and Environmental Challenges
          </p>
        </div>

        {/* Past Conference Images */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-6">Past Conferences</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {conferenceImages.map((image, index) => (
              <div 
                key={index}
                className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <a href={image.link}>
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" 
                  />
                  <span className="block mt-2 text-seec-600 font-medium hover:underline">
                    {image.caption}
                  </span>
                </a>
              </div>
            ))}
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 mb-4">
              The 9th International Conference on Sustainable Energy and Environmental Challenges (X SEEC) 
              will be held from December 15-18, 2024, at the Indian Institute of Technology Mandi, Himachal Pradesh, India.
            </p>
            <p className="text-gray-700 mb-4">
              SEEC is a premier international conference that brings together researchers, scientists, engineers, 
              academics, and industry professionals to exchange and share their experiences and research results 
              on various aspects of sustainable energy and environmental challenges.
            </p>
            <p className="text-gray-700 mb-4">
              Organized by IIT Jodhpur Catalyst and ISEES (International Society for Energy, Environment and Sustainability), 
              this conference provides a platform for participants from around the world to present and discuss 
              the most recent innovations, trends, concerns, practical challenges, and solutions in the fields 
              of sustainable energy and environmental engineering.
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
                <span>Peer-reviewed paper presentations in three major tracks</span>
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
