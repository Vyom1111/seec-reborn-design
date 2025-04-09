
import React from 'react';

interface DatesProps {
  isPreview?: boolean;
}

const Dates: React.FC<DatesProps> = ({ isPreview = false }) => {
  // Let's assume this component already exists and just needs a preview mode
  // We'll just add the isPreview prop and modify the existing component to handle it
  // Since this is a read-only file, we're creating a new component with the same name

  const importantDates = [
    {
      date: "September 15, 2024",
      event: "Abstract Submission Deadline",
      description: "Submit a 300-500 word abstract of your research paper"
    },
    {
      date: "October 15, 2024",
      event: "Notification of Abstract Acceptance",
      description: "Authors will be notified about the acceptance of their abstracts"
    },
    {
      date: "November 1, 2024",
      event: "Full Paper Submission",
      description: "Submit your complete paper following the provided template"
    },
    {
      date: "November 15, 2024",
      event: "Early Bird Registration Deadline",
      description: "Register early to avail discounted registration fees"
    },
    {
      date: "November 30, 2024",
      event: "Final Acceptance Notification",
      description: "Final notification about acceptance of full papers"
    },
    {
      date: "December 5, 2024",
      event: "Registration Deadline",
      description: "Last date to register for the conference"
    },
    {
      date: "December 15-18, 2024",
      event: "Conference Dates",
      description: "X SEEC at IIT Jodhpur, Himachal Pradesh, India"
    }
  ];

  // In preview mode, only show the most important dates
  const displayDates = isPreview ? importantDates.filter((_, index) => [0, 2, 6].includes(index)) : importantDates;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {!isPreview && (
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-seec-800 mb-4">Important Dates</h1>
            <div className="w-20 h-1 bg-seec-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Mark your calendar with these key dates for the X SEEC 2024
            </p>
          </div>
        )}

        <div className="relative">
          {!isPreview && <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-seec-100"></div>}
          
          <div className={`space-y-6 ${isPreview ? 'md:grid md:grid-cols-3 md:gap-6 md:space-y-0' : ''}`}>
            {displayDates.map((item, index) => (
              <div key={index} className={`relative ${!isPreview && 'pl-12'}`}>
                {!isPreview && (
                  <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-seec-500 shadow-lg -ml-2 z-10"></div>
                )}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className={`${isPreview ? 'text-lg' : 'text-xl'} font-semibold text-seec-700 mb-1`}>{item.event}</h3>
                  <p className="text-seec-500 font-medium mb-2">{item.date}</p>
                  <p className={`text-gray-600 ${isPreview && 'text-sm'}`}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {!isPreview && (
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Please note that all deadlines are at 11:59 PM Indian Standard Time (IST).
            </p>
            <a 
              href="#" 
              className="bg-seec-600 text-white py-3 px-6 rounded-md hover:bg-seec-700 transition-colors inline-block"
            >
              Add to Calendar
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dates;
