
import React, { useEffect } from 'react';
import { FileText, CheckCircle } from 'lucide-react';

const CallForPapersPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="pt-24 min-h-screen">
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <h1 className="mb-4">Call for Papers</h1>
            <div className="w-20 h-1 bg-seec-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Submit your research papers for IX SEEC 2024
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="bg-seec-50 p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <FileText className="mr-2 text-seec-600" size={24} />
                  Call for Papers
                </h2>
                <p className="mb-4">
                  The organizing committee of the 9th International Conference on Sustainable Energy and Environmental 
                  Challenges (SEEC-2024) invites researchers, academicians, industry professionals, and students to 
                  submit their original research work for presentation at the conference.
                </p>
                <p className="mb-4">
                  The conference will cover a wide range of topics related to sustainable energy and environmental 
                  challenges. Contributions are welcome in, but not limited to, the following areas:
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-6">Conference Topics</h2>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                {topics.map((topic, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle size={20} className="text-seec-600 mr-2 flex-shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-4">Submission Guidelines</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">Abstract Submission</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  <li>Abstracts should be 300-500 words in length.</li>
                  <li>Clearly state the problem, methodology, results, and conclusions.</li>
                  <li>Include 3-5 keywords that best describe your research.</li>
                  <li>Submit through the conference management system.</li>
                  <li>Submission deadline: November 15, 2023.</li>
                </ul>
                
                <h3 className="text-lg font-medium mb-3">Full Paper Submission</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  <li>Papers should be 6-8 pages in length (including figures, tables, and references).</li>
                  <li>Use the conference template available on the website.</li>
                  <li>Follow the formatting guidelines strictly.</li>
                  <li>Submit the full paper through the conference management system.</li>
                  <li>Submission deadline: December 31, 2023 (Extended).</li>
                </ul>
                
                <h3 className="text-lg font-medium mb-3">Review Process</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>All submissions will undergo double-blind peer review.</li>
                  <li>At least two reviewers will evaluate each submission.</li>
                  <li>Review criteria include originality, significance, technical soundness, and clarity.</li>
                  <li>Notification of acceptance will be sent by January 15, 2024.</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-4">Publication Opportunities</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="mb-4">
                  Selected papers presented at the conference will be considered for publication in:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Conference proceedings with ISBN</li>
                  <li>Special issues of reputed international journals (subject to additional review)</li>
                </ul>
                <p className="mt-4">
                  Details of the journals and special issues will be announced on the conference website.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://easychair.org/seec2024" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Submit Your Paper
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallForPapersPage;
