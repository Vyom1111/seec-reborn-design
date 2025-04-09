
import React from 'react';

interface CallForPapersProps {
  isPreview?: boolean;
}

const CallForPapers: React.FC<CallForPapersProps> = ({ isPreview = false }) => {
  // Let's assume this component already exists and just needs a preview mode
  // We'll just add the isPreview prop and modify the existing component to handle it
  // Since this is a read-only file, we're creating a new component with the same name

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {!isPreview && (
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-seec-800 mb-4">Call for Papers</h1>
            <div className="w-20 h-1 bg-seec-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Submit your research papers for the IX International Conference on Sustainable Energy and Environmental Challenges
            </p>
          </div>
        )}

        <div className={`${isPreview ? 'grid md:grid-cols-3 gap-6' : 'space-y-12'}`}>
          {/* Only show 3 tracks in preview mode, all tracks otherwise */}
          <div className={`${isPreview ? '' : 'mb-10'}`}>
            <div className={`bg-white rounded-lg shadow-sm p-6 h-full ${!isPreview && 'border-t-4 border-seec-600'}`}>
              <h3 className="text-xl font-semibold mb-3 text-seec-700">Track 1: Energy and Transportation</h3>
              {!isPreview && (
                <p className="text-gray-600 mb-4">
                  Research related to sustainable energy solutions and green transportation technologies.
                </p>
              )}
              <ul className={`list-disc list-inside text-gray-700 ${isPreview ? 'text-sm' : ''}`}>
                <li>Renewable energy sources</li>
                <li>Energy storage</li>
                {!isPreview && (
                  <>
                    <li>Smart grids</li>
                    <li>Electric vehicles</li>
                    <li>Hydrogen technologies</li>
                    <li>Sustainable transportation</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          <div className={`${isPreview ? '' : 'mb-10'}`}>
            <div className={`bg-white rounded-lg shadow-sm p-6 h-full ${!isPreview && 'border-t-4 border-seec-600'}`}>
              <h3 className="text-xl font-semibold mb-3 text-seec-700">Track 2: Environment and Sustainability</h3>
              {!isPreview && (
                <p className="text-gray-600 mb-4">
                  Research addressing environmental challenges and sustainable development.
                </p>
              )}
              <ul className={`list-disc list-inside text-gray-700 ${isPreview ? 'text-sm' : ''}`}>
                <li>Climate change mitigation</li>
                <li>Waste management</li>
                {!isPreview && (
                  <>
                    <li>Water treatment</li>
                    <li>Air pollution control</li>
                    <li>Circular economy</li>
                    <li>Green construction</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          <div className={`${isPreview ? '' : 'mb-10'}`}>
            <div className={`bg-white rounded-lg shadow-sm p-6 h-full ${!isPreview && 'border-t-4 border-seec-600'}`}>
              <h3 className="text-xl font-semibold mb-3 text-seec-700">Track 3: Biotechnology and Biosciences</h3>
              {!isPreview && (
                <p className="text-gray-600 mb-4">
                  Research in biological applications for sustainability and environmental protection.
                </p>
              )}
              <ul className={`list-disc list-inside text-gray-700 ${isPreview ? 'text-sm' : ''}`}>
                <li>Biofuels</li>
                <li>Biomaterials</li>
                {!isPreview && (
                  <>
                    <li>Bioremediation</li>
                    <li>Sustainable agriculture</li>
                    <li>Green chemistry</li>
                    <li>Biotechnology for carbon capture</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>

        {!isPreview && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-seec-800 mb-4">Submission Guidelines</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Submit an abstract of 300-500 words by September 15, 2024.</li>
                <li>Upon acceptance, submit a full paper of 6-8 pages by November 1, 2024.</li>
                <li>Papers should follow the conference template (available for download).</li>
                <li>All submissions will undergo double-blind peer review.</li>
                <li>At least one author must register for the conference and present the paper.</li>
              </ol>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a 
                href="#" 
                className="bg-seec-600 text-white py-3 px-6 rounded-md hover:bg-seec-700 transition-colors inline-flex items-center justify-center"
              >
                Submit Abstract
              </a>
              <a 
                href="#" 
                className="border border-seec-600 text-seec-600 py-3 px-6 rounded-md hover:bg-seec-50 transition-colors inline-flex items-center justify-center"
              >
                Download Template
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallForPapers;
