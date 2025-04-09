
import React from 'react';
import { ExternalLink } from 'lucide-react';
import person1 from '@/assets/person1.png';
import person2 from '@/assets/person2.png';
import person3 from '@/assets/person3.png';
import person4 from '@/assets/person4.png';
import person5 from '@/assets/person5.png';
import person6 from '@/assets/person6.png';
import person7 from '@/assets/person7.png';
import person8 from '@/assets/person8.png';

const Speakers: React.FC = () => {
  const keynoteSpeakers = [
    {
      name: "Prof. David Miller",
      title: "Professor of Environmental Engineering",
      institution: "Massachusetts Institute of Technology, USA",
      topic: "Future of Sustainable Energy: Challenges and Opportunities",
      image: person1
    },
    {
      name: "Dr. Sarah Johnson",
      title: "Head of Sustainable Urban Development",
      institution: "Technical University of Denmark, Denmark",
      topic: "Sustainable Urban Development: Integrating Energy, Environment, and Society",
      image: person2
    },
    {
      name: "Prof. Robert Chen",
      title: "Director, Center for Biotechnology",
      institution: "University of California, Berkeley, USA",
      topic: "Biotechnology for a Sustainable Future",
      image: person3
    },
    {
      name: "Dr. Maria Rodriguez",
      title: "Chief Scientist",
      institution: "National Renewable Energy Laboratory, USA",
      topic: "Next Generation Solar Technologies",
      image: person4
    }
  ];
  
  const plenarySpeakers = [
    {
      name: "Prof. James Wilson",
      title: "Professor of Climate Science",
      institution: "Imperial College London, UK",
      topic: "Climate Change Mitigation Strategies",
      image: person5
    },
    {
      name: "Dr. Aisha Patel",
      title: "Research Director",
      institution: "Indian Institute of Science, India",
      topic: "Biofuels from Agricultural Waste: Indian Perspective",
      image: person6
    },
    {
      name: "Prof. Chen Wei",
      title: "Professor of Energy Systems",
      institution: "Tsinghua University, China",
      topic: "Energy Storage Solutions for Renewable Integration",
      image: person7
    },
    {
      name: "Dr. Michael Brown",
      title: "Head of Sustainability Research",
      institution: "CSIRO, Australia",
      topic: "Water-Energy Nexus in a Changing Climate",
      image: person8
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="mb-4">Speakers</h2>
          <div className="w-20 h-1 bg-seec-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Distinguished researchers and professionals from around the world
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold mb-8 text-center">Keynote Speakers</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {keynoteSpeakers.map((speaker, index) => (
              <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4 overflow-hidden rounded-full w-32 h-32 mx-auto">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-lg text-center mb-1">{speaker.name}</h4>
                <p className="text-gray-600 text-center text-sm mb-1">{speaker.title}</p>
                <p className="text-seec-700 text-center text-sm mb-3">{speaker.institution}</p>
                <div className="bg-seec-50 p-3 rounded-md">
                  <p className="text-gray-700 text-center text-sm">
                    <span className="font-medium">Topic:</span> {speaker.topic}
                  </p>
                </div>
                <div className="text-center mt-4">
                  <a href="#" className="text-seec-600 hover:text-seec-700 inline-flex items-center text-sm">
                    View Profile <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <h3 className="text-xl font-semibold mb-8 text-center">Plenary Speakers</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plenarySpeakers.map((speaker, index) => (
              <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4 overflow-hidden rounded-full w-32 h-32 mx-auto">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-lg text-center mb-1">{speaker.name}</h4>
                <p className="text-gray-600 text-center text-sm mb-1">{speaker.title}</p>
                <p className="text-seec-700 text-center text-sm mb-3">{speaker.institution}</p>
                <div className="bg-seec-50 p-3 rounded-md">
                  <p className="text-gray-700 text-center text-sm">
                    <span className="font-medium">Topic:</span> {speaker.topic}
                  </p>
                </div>
                <div className="text-center mt-4">
                  <a href="#" className="text-seec-600 hover:text-seec-700 inline-flex items-center text-sm">
                    View Profile <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
