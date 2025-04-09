
import React, { useState } from 'react';
import { Calendar, Clock, Book, Users, Coffee, Award } from 'lucide-react';

const TechnicalProgram: React.FC = () => {
  const [activeDay, setActiveDay] = useState(1);
  
  const days = [
    { day: 1, date: "December 13, 2024" },
    { day: 2, date: "December 14, 2024" },
    { day: 3, date: "December 15, 2024" }
  ];

  const programSchedule = {
    1: [
      {
        time: "08:00 - 09:00",
        event: "Registration",
        type: "general",
        icon: Users
      },
      {
        time: "09:00 - 09:30",
        event: "Inauguration & Welcome Address",
        type: "general",
        icon: Book
      },
      {
        time: "09:30 - 11:00",
        event: "Keynote Speech: Future of Sustainable Energy",
        speaker: "Prof. David Miller, Massachusetts Institute of Technology",
        type: "keynote",
        icon: Award
      },
      {
        time: "11:00 - 11:30",
        event: "Tea/Coffee Break",
        type: "break",
        icon: Coffee
      },
      {
        time: "11:30 - 13:00",
        event: "Technical Session 1: Renewable Energy Systems",
        type: "session",
        track: "Energy and Transportation",
        icon: Book
      },
      {
        time: "13:00 - 14:00",
        event: "Lunch",
        type: "break",
        icon: Coffee
      },
      {
        time: "14:00 - 15:30",
        event: "Technical Session 2: Climate Change Mitigation",
        type: "session",
        track: "Environment and Sustainability",
        icon: Book
      },
      {
        time: "15:30 - 16:00",
        event: "Tea/Coffee Break",
        type: "break",
        icon: Coffee
      },
      {
        time: "16:00 - 17:30",
        event: "Technical Session 3: Biofuels and Bioenergy",
        type: "session",
        track: "Biotechnology and Biosciences",
        icon: Book
      }
    ],
    2: [
      {
        time: "09:00 - 10:30",
        event: "Plenary Session: Sustainable Urban Development",
        speaker: "Dr. Sarah Johnson, Technical University of Denmark",
        type: "keynote",
        icon: Award
      },
      {
        time: "10:30 - 11:00",
        event: "Tea/Coffee Break",
        type: "break",
        icon: Coffee
      },
      {
        time: "11:00 - 13:00",
        event: "Technical Session 4: Energy Storage Technologies",
        type: "session",
        track: "Energy and Transportation",
        icon: Book
      },
      {
        time: "13:00 - 14:00",
        event: "Lunch",
        type: "break",
        icon: Coffee
      },
      {
        time: "14:00 - 15:30",
        event: "Technical Session 5: Waste Management & Recycling",
        type: "session",
        track: "Environment and Sustainability",
        icon: Book
      },
      {
        time: "15:30 - 16:00",
        event: "Tea/Coffee Break",
        type: "break",
        icon: Coffee
      },
      {
        time: "16:00 - 18:00",
        event: "Poster Session",
        type: "session",
        icon: Book
      },
      {
        time: "19:00 - 21:00",
        event: "Conference Dinner",
        type: "general",
        icon: Users
      }
    ],
    3: [
      {
        time: "09:00 - 10:30",
        event: "Keynote Speech: Biotechnology for Sustainable Future",
        speaker: "Prof. Robert Chen, University of California, Berkeley",
        type: "keynote",
        icon: Award
      },
      {
        time: "10:30 - 11:00",
        event: "Tea/Coffee Break",
        type: "break",
        icon: Coffee
      },
      {
        time: "11:00 - 13:00",
        event: "Technical Session 6: Sustainable Transportation",
        type: "session",
        track: "Energy and Transportation",
        icon: Book
      },
      {
        time: "13:00 - 14:00",
        event: "Lunch",
        type: "break",
        icon: Coffee
      },
      {
        time: "14:00 - 15:30",
        event: "Panel Discussion: Future Research Directions",
        type: "general",
        icon: Users
      },
      {
        time: "15:30 - 16:00",
        event: "Tea/Coffee Break",
        type: "break",
        icon: Coffee
      },
      {
        time: "16:00 - 17:00",
        event: "Valedictory Function & Award Ceremony",
        type: "general",
        icon: Award
      }
    ]
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="mb-4">Technical Program</h2>
          <div className="w-20 h-1 bg-seec-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Tentative schedule for the three-day conference program
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center mb-8">
            {days.map((day) => (
              <button
                key={day.day}
                className={`flex items-center px-5 py-3 m-2 rounded-md transition-colors ${
                  activeDay === day.day
                    ? "bg-seec-600 text-white"
                    : "bg-seec-100 text-seec-800 hover:bg-seec-200"
                }`}
                onClick={() => setActiveDay(day.day)}
              >
                <Calendar size={18} className="mr-2" />
                <span>Day {day.day} - {day.date}</span>
              </button>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {programSchedule[activeDay as keyof typeof programSchedule].map((item, index) => (
              <div
                key={index}
                className={`border-l-4 p-4 mb-4 ${
                  item.type === "keynote"
                    ? "border-l-seec-600 bg-seec-50"
                    : item.type === "break"
                    ? "border-l-gray-400 bg-gray-50"
                    : item.type === "session"
                    ? "border-l-seec-400 bg-white"
                    : "border-l-seec-300 bg-white"
                }`}
              >
                <div className="flex items-start">
                  <Clock size={20} className="text-seec-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="font-medium text-gray-700 w-32 flex-shrink-0">{item.time}</span>
                  <div className="flex-grow">
                    <div className="flex items-center">
                      <item.icon
                        size={18}
                        className={`mr-2 ${
                          item.type === "keynote"
                            ? "text-seec-600"
                            : item.type === "break"
                            ? "text-gray-500"
                            : "text-seec-500"
                        }`}
                      />
                      <h4 className="font-semibold">{item.event}</h4>
                    </div>
                    {item.speaker && (
                      <p className="text-seec-700 mt-1">{item.speaker}</p>
                    )}
                    {item.track && (
                      <p className="text-gray-600 mt-1 text-sm">
                        Track: {item.track}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalProgram;
