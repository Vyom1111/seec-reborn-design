import React from 'react';

// Import placeholder images
import person1 from '../assets/person1.png';
import person2 from '../assets/person2.png';
import person3 from '../assets/person3.png';
import person4 from '../assets/person4.png';
import person5 from '../assets/person5.png';
import person6 from '../assets/person6.png';
import person7 from '../assets/person7.png';

const Committee: React.FC = () => {
  const patrons = [
    { name: "Prof. Avinash Kumar Agarwal", title: "Director, IIT Jodhpur", image: person1 },
    { name: "Prof.", title: "Dean - R&D, IIT Jodhpur", image: person2 },
    { name: "Prof. Santosh Ghosh", title: "Dean - Academics, IIT Jodhpur", image: person3 },
  ];

  const chairs = [
    { name: "Prof.", title: "Conference Chair", image: person4 },
    { name: "Prof.", title: "Conference Co-Chair", image: person5 },
    { name: "Prof.", title: "Conference Co-Chair", image: person6 },
  ];

  const organizingCommittee = [
    { name: "Dr.", title: "Organizing Secretary", image: person2 },
    { name: "Dr.", title: "Organizing Co-Secretary", image: person2 },
    { name: "Dr.", title: "Member", image: person3 },
    { name: "Dr.", title: "Member", image: person4 },
    { name: "Dr.", title: "Member", image: person5 },
    { name: "Dr.", title: "Member", image: person6 },
    { name: "Dr.", title: "Member", image: person7 },
  ];

  const renderPersonCard = (person: { name: string, title: string, image: string }, index: number) => (
    <div key={index} className="card p-6 text-center">
      <img
        src={person.image}
        alt={person.name}
        className="w-20 h-20 rounded-full object-cover mx-auto mb-4 shadow-md"
      />
      <h4 className="font-semibold text-lg">{person.name}</h4>
      <p className="text-gray-600">{person.title}</p>
    </div>
  );

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="mb-4">Organizing Committee</h2>
          <div className="w-20 h-1 bg-seec-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Meet the team behind the 10th International Conference on Sustainable Energy and Environmental Challenges
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-bold text-center mb-6 text-seec-800">Patrons</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {patrons.map(renderPersonCard)}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-bold text-center mb-6 text-seec-800">Conference Chairs</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {chairs.map(renderPersonCard)}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-6 text-seec-800">Organizing Committee</h3>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {organizingCommittee.map(renderPersonCard)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committee;
