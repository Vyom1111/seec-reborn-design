
import React, { useEffect } from 'react';

const CommitteePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const scientificCommittee = [
    { name: "Prof. Jyeshtharaj B. Joshi", affiliation: "Homi Bhabha National Institute, India" },
    { name: "Prof. Sudipta De", affiliation: "Jadavpur University, India" },
    { name: "Prof. Avinash Kumar Agarwal", affiliation: "IIT Kanpur, India" },
    { name: "Prof. Sandip Kumar Saha", affiliation: "IIT Delhi, India" },
    { name: "Prof. Gautam Biswas", affiliation: "IIT Kanpur, India" },
    { name: "Prof. Saptarshi Basu", affiliation: "IISc Bangalore, India" },
    { name: "Prof. Suman Chakraborty", affiliation: "IIT Kharagpur, India" },
    { name: "Prof. Santanu Bandyopadhyay", affiliation: "IIT Bombay, India" },
    { name: "Prof. Kartic C. Khilar", affiliation: "IIT Bombay, India" },
    { name: "Prof. Rajiv Tiwari", affiliation: "IIT Guwahati, India" },
    { name: "Prof. Subrata Sarkar", affiliation: "IIT Roorkee, India" },
    { name: "Prof. Vinayak Kulkarni", affiliation: "IIT Guwahati, India" },
  ];

  const internationalAdvisoryCommittee = [
    { name: "Prof. Ramesh K. Agarwal", affiliation: "Washington University, USA" },
    { name: "Prof. Ashwani K. Gupta", affiliation: "University of Maryland, USA" },
    { name: "Prof. Bimal K. Bose", affiliation: "University of Tennessee, USA" },
    { name: "Prof. Alexander Steinbüchel", affiliation: "University of Münster, Germany" },
    { name: "Prof. Teodor Torodov", affiliation: "University of Nottingham, UK" },
    { name: "Prof. Dionissis Mantzavinos", affiliation: "University of Patras, Greece" },
    { name: "Prof. Igor Pioro", affiliation: "University of Ontario, Canada" },
    { name: "Prof. Aliakbar Akbarzadeh", affiliation: "RMIT University, Australia" },
  ];

  return (
    <div className="pt-24 min-h-screen">
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <h1 className="mb-4">Organizing Committee</h1>
            <div className="w-20 h-1 bg-seec-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet the team behind the 9th International Conference on Sustainable Energy and Environmental Challenges
            </p>
          </div>

          {/* Patrons */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-seec-800">Patrons</h2>
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

          {/* Conference Chairs */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-seec-800">Conference Chairs</h2>
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

          {/* Organizing Committee */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-seec-800">Organizing Committee</h2>
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

          {/* Scientific Committee */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-seec-800">Scientific Committee</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {scientificCommittee.map((person, index) => (
                <div key={index} className="card p-6">
                  <h4 className="font-semibold text-lg">{person.name}</h4>
                  <p className="text-gray-600">{person.affiliation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* International Advisory Committee */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-seec-800">International Advisory Committee</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {internationalAdvisoryCommittee.map((person, index) => (
                <div key={index} className="card p-6">
                  <h4 className="font-semibold text-lg">{person.name}</h4>
                  <p className="text-gray-600">{person.affiliation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommitteePage;
