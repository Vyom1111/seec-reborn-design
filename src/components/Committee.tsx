
import React from 'react';

const Committee: React.FC = () => {
  const patrons = [
    { name: "Prof. Suhas S Joshi", title: "Director, IIT Indore" },
    { name: "Prof. I. A. Palani", title: "Dean - R&D, IIT Indore" },
    { name: "Prof. Santosh Ghosh", title: "Dean - Academics, IIT Indore" },
  ];

  const chairs = [
    { name: "Prof. Neelesh Kumar Jain", title: "Conference Chair" },
    { name: "Prof. Vinod Srinivasan", title: "Conference Co-Chair" },
    { name: "Prof. Dhirendra Bahadur", title: "Conference Co-Chair" },
  ];

  const organizingCommittee = [
    { name: "Dr. Dhiraj V Patil", title: "Organizing Secretary" },
    { name: "Dr. Anand T Vaidya", title: "Organizing Co-Secretary" },
    { name: "Dr. Ankur Miglani", title: "Member" },
    { name: "Dr. Sandeep Singh", title: "Member" },
    { name: "Dr. Swapnil Dharaskar", title: "Member" },
    { name: "Dr. Ram Prakash Bharti", title: "Member" },
    { name: "Dr. Dipak Kumar Mandal", title: "Member" },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="mb-4">Organizing Committee</h2>
          <div className="w-20 h-1 bg-seec-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Meet the team behind the 9th International Conference on Sustainable Energy and Environmental Challenges
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-bold text-center mb-6 text-seec-800">Patrons</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {patrons.map((person, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-seec-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-seec-700">{person.name.charAt(0)}</span>
                </div>
                <h4 className="font-semibold text-lg">{person.name}</h4>
                <p className="text-gray-600">{person.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-bold text-center mb-6 text-seec-800">Conference Chairs</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {chairs.map((person, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-seec-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-seec-700">{person.name.charAt(0)}</span>
                </div>
                <h4 className="font-semibold text-lg">{person.name}</h4>
                <p className="text-gray-600">{person.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-6 text-seec-800">Organizing Committee</h3>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {organizingCommittee.map((person, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-seec-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-seec-700">{person.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h4 className="font-semibold text-lg">{person.name}</h4>
                <p className="text-gray-600">{person.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committee;
