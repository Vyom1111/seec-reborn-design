
import React, { useEffect } from 'react';
import { Calendar } from 'lucide-react';

const DatesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const importantDates = [
    {
      event: "Abstract Submission Deadline",
      date: "November 15, 2023",
      isExtended: false
    },
    {
      event: "Notification of Abstract Acceptance",
      date: "November 30, 2023",
      isExtended: false
    },
    {
      event: "Full Paper Submission",
      date: "December 31, 2023",
      isExtended: true
    },
    {
      event: "Notification of Paper Acceptance",
      date: "January 15, 2025",
      isExtended: false
    },
    {
      event: "Early Bird Registration",
      date: "January 25, 2025",
      isExtended: false
    },
    {
      event: "Conference Dates",
      date: "December 15-18, 2025",
      isExtended: false
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <h1 className="mb-4">Important Dates</h1>
            <div className="w-20 h-1 bg-seec-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Key deadlines for X SEEC 2025
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {importantDates.map((item, index) => (
                <div 
                  key={index} 
                  className="card p-6 flex items-start"
                >
                  <Calendar className="text-seec-600 mr-4 flex-shrink-0" size={24} />
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

          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-seec-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Conference Schedule</h2>
              <p className="mb-4">
                The conference will be held over four days from December 15-18, 2025. A detailed program schedule 
                will be published closer to the event date.
              </p>
              <h3 className="text-lg font-medium mb-2">Tentative Schedule:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="min-w-[150px] font-medium">February 19:</div>
                  <div>Registration, Inaugural Session, Keynote Lectures</div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-[150px] font-medium">February 20:</div>
                  <div>Technical Sessions, Plenary Lectures, Poster Session</div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-[150px] font-medium">February 21:</div>
                  <div>Technical Sessions, Panel Discussion, Conference Dinner</div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-[150px] font-medium">February 22:</div>
                  <div>Technical Sessions, Valedictory Function</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DatesPage;
