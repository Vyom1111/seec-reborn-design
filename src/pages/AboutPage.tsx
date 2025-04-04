
import React, { useEffect } from 'react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen">
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <h1 className="mb-4">About IX SEEC</h1>
            <div className="w-20 h-1 bg-seec-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The International Conference on Sustainable Energy and Environmental Challenges
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <p>
                The 9th International Conference on Sustainable Energy and Environmental Challenges (SEEC-2024) 
                will be held from February 19-22, 2024, at the Department of Mechanical Engineering, Indian Institute 
                of Technology Indore, India.
              </p>
              
              <p>
                SEEC is a premier international conference that brings together researchers, scientists, engineers, 
                academics, and industry professionals to exchange and share their experiences and research results 
                on various aspects of sustainable energy and environmental challenges.
              </p>
              
              <p>
                The conference provides a platform for participants from all over the world to present and discuss 
                the most recent innovations, trends, concerns, practical challenges, and solutions adopted in the 
                fields of sustainable energy and environmental engineering.
              </p>
              
              <h2>Conference Objectives</h2>
              <ul>
                <li>To bring together leading academic scientists, researchers, and scholars to exchange and share their experiences and research results on all aspects of sustainable energy and environmental challenges</li>
                <li>To provide a premier interdisciplinary platform for researchers, practitioners, and educators to present and discuss the most recent innovations, trends, and concerns, as well as practical challenges encountered and solutions adopted in the field</li>
                <li>To foster collaboration between academia and industry in addressing challenges related to sustainable energy and environmental issues</li>
                <li>To promote awareness of the latest technological advancements and their potential impact on sustainable development</li>
              </ul>
              
              <h2>Conference History</h2>
              <p>
                SEEC is a well-established conference series that has been held every two years since 2006. 
                The conference has grown significantly in terms of participation and impact, with increasing 
                international representation from diverse research areas. Previous conferences have been 
                held at prestigious institutions across India.
              </p>
              
              <h2>About IIT Indore</h2>
              <p>
                Indian Institute of Technology Indore (IIT Indore) is one of the newer IITs established by the 
                Government of India in 2009. Despite its young age, IIT Indore has established itself as a 
                center of excellence in research and education, particularly in the fields of engineering, 
                science, humanities, and social sciences.
              </p>
              
              <p>
                Located in Madhya Pradesh, IIT Indore's campus is situated in the picturesque Simrol area, 
                about 25 km from Indore city. The institute offers a vibrant academic environment that 
                fosters innovation, research, and entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
