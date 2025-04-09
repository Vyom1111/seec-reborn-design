
import React from 'react';
import { FileText, CheckCircle } from 'lucide-react';

const CallForPapers: React.FC = () => {
  const tracks = [
    {
      title: "Energy and Transportation",
      topics: [
        "Renewable Energy Systems",
        "Energy Storage Technologies",
        "Energy Efficiency & Conservation",
        "Sustainable Transportation",
        "Electric Vehicles & Infrastructure",
        "Alternative Fuels"
      ]
    },
    {
      title: "Environment and Sustainability",
      topics: [
        "Climate Change Mitigation",
        "Air & Water Quality Management",
        "Waste Management & Recycling",
        "Carbon Capture & Sequestration",
        "Environmental Impact Assessment",
        "Sustainable Urban Planning"
      ]
    },
    {
      title: "Biotechnology and Biosciences",
      topics: [
        "Biofuels & Bioenergy",
        "Green Chemistry",
        "Biochemical Conversion Processes",
        "Biomaterials for Sustainability",
        "Agricultural Biotechnology",
        "Environmental Biotechnology"
      ]
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="mb-4">Call for Papers</h2>
          <div className="w-20 h-1 bg-seec-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Submit your research papers for the IX International Conference on Sustainable Energy and Environmental Challenges
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FileText className="mr-2 text-seec-600" size={24} />
                Submission Guidelines
              </h3>
              <p className="mb-4">
                Authors are invited to submit original and unpublished work on conference themes. All submissions will be peer-reviewed for originality, technical content, and relevance.
              </p>
              <p className="mb-4">
                First, submit an abstract (300-500 words) outlining the scope of your paper. Upon acceptance, submit a full paper (6-8 pages) following the conference template.
              </p>
              <p>
                <strong>Submission Portal:</strong> <a href="#" className="text-seec-600 hover:underline">EasyChair Submission System</a>
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {tracks.map((track, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-xl font-semibold mb-4 text-seec-700">{track.title}</h3>
                <ul className="space-y-2">
                  {track.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle size={16} className="text-seec-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="bg-seec-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Submission Workflow</h3>
            <div className="relative">
              <div className="hidden md:block absolute h-full w-0.5 bg-seec-300 left-8 top-0"></div>
              
              <div className="flex mb-8 relative">
                <div className="bg-seec-500 rounded-full w-4 h-4 mt-1.5 mr-4 flex-shrink-0 z-10"></div>
                <div>
                  <h4 className="text-lg font-semibold">Submit Abstract</h4>
                  <p className="text-gray-600">300-500 words outlining your research</p>
                </div>
              </div>
              
              <div className="flex mb-8 relative">
                <div className="bg-seec-500 rounded-full w-4 h-4 mt-1.5 mr-4 flex-shrink-0 z-10"></div>
                <div>
                  <h4 className="text-lg font-semibold">Abstract Review</h4>
                  <p className="text-gray-600">Evaluation by the technical committee</p>
                </div>
              </div>
              
              <div className="flex mb-8 relative">
                <div className="bg-seec-500 rounded-full w-4 h-4 mt-1.5 mr-4 flex-shrink-0 z-10"></div>
                <div>
                  <h4 className="text-lg font-semibold">Acceptance Notification</h4>
                  <p className="text-gray-600">Notification of abstract acceptance</p>
                </div>
              </div>
              
              <div className="flex mb-8 relative">
                <div className="bg-seec-500 rounded-full w-4 h-4 mt-1.5 mr-4 flex-shrink-0 z-10"></div>
                <div>
                  <h4 className="text-lg font-semibold">Submit Full Paper</h4>
                  <p className="text-gray-600">6-8 pages following template guidelines</p>
                </div>
              </div>
              
              <div className="flex relative">
                <div className="bg-seec-500 rounded-full w-4 h-4 mt-1.5 mr-4 flex-shrink-0 z-10"></div>
                <div>
                  <h4 className="text-lg font-semibold">Final Acceptance</h4>
                  <p className="text-gray-600">Paper acceptance notification and presentation schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;
