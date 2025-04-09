
import React from 'react';
import { Calendar, Bell } from 'lucide-react';

const NewsSummary: React.FC = () => {
  const newsItems = [
    {
      date: "April 5, 2024",
      title: "Call for Papers Released",
      content: "The Call for Papers for X SEEC is now available. Submit your abstracts by September 15, 2024."
    },
    {
      date: "March 28, 2024",
      title: "Confirmed Keynote Speakers",
      content: "We are pleased to announce our first keynote speakers for X SEEC 2024."
    },
    {
      date: "March 15, 2024",
      title: "Registration Opens June 1",
      content: "Early bird registration will begin on June 1, 2024. Save the date!"
    }
  ];
  
  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-seec-800 mb-2">Latest Updates</h2>
        <div className="w-20 h-1 bg-seec-500 mx-auto"></div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow p-6 transition-shadow">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Calendar size={16} className="mr-1" />
                <span>{item.date}</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-seec-700">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSummary;
