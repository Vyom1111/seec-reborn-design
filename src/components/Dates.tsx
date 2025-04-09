
import React from 'react';
import { Calendar } from 'lucide-react';

const Dates: React.FC = () => {
  const importantDates = [
    {
      event: "Abstract Submission Deadline",
      date: "September 15, 2024",
      isExtended: false
    },
    {
      event: "Notification of Abstract Acceptance",
      date: "September 30, 2024",
      isExtended: false
    },
    {
      event: "Full Paper Submission",
      date: "October 31, 2024",
      isExtended: true
    },
    {
      event: "Notification of Paper Acceptance",
      date: "November 15, 2024",
      isExtended: false
    },
    {
      event: "Early Bird Registration",
      date: "November 25, 2024",
      isExtended: false
    },
    {
      event: "Conference Dates",
      date: "December 13-15, 2024",
      isExtended: false
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="mb-4">Important Dates</h2>
          <div className="w-20 h-1 bg-seec-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Mark these important deadlines on your calendar
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {importantDates.map((item, index) => (
              <div 
                key={index} 
                className="card p-6 flex items-start"
              >
                <Calendar className="text-seec-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.event}</h3>
                  <p className="text-gray-600">{item.date}</p>
                  {item.isExtended && (
                    <span className="inline-block mt-2 text-sm bg-seec-100 text-seec-700 px-2 py-1 rounded-md">
                      Extended
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dates;
