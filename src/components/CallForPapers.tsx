
import React from 'react';
import { FileText, CheckCircle } from 'lucide-react';

const CallForPapers: React.FC = () => {
  const topics = [
    "Alternative and Renewable Energy",
    "Biofuels and Bioenergy",
    "Carbon Capture, Utilization, and Storage",
    "Clean Energy Technologies",
    "Climate Change Mitigation",
    "Combustion and Engines",
    "Energy Economics and Policy",
    "Energy Efficiency and Management",
    "Energy Storage and Systems",
    "Environmental Impact Assessment",
    "Green Hydrogen Production and Utilization",
    "Heat and Mass Transfer",
    "Nanomaterials for Energy Applications",
    "Smart Grids and Energy Networks",
    "Sustainable Development",
    "Waste to Energy and Resource Recovery",
    "Water-Energy-Food Nexus"
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="mb-4">Call for Papers</h2>
          <div className="w-20 h-1 bg-seec-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Submit your research papers on the following topics
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
                First, submit an abstract (300-500 words) outlining the scope of your paper. Upon acceptance, submit a full paper (6-8 pages) following the conference template available on the website.
              </p>
              <p className="mb-4">
                All submissions must be in English and must be submitted through the conference management system. Please ensure your submission follows the formatting guidelines provided in the template.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Conference Topics</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {topics.map((topic, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle size={20} className="text-seec-600 mr-2 flex-shrink-0" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;
