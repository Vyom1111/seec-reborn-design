
import React from 'react';
import { Building, Wifi, Utensils, BedDouble, MapPin, Phone } from 'lucide-react';

const Accommodation: React.FC = () => {
  const accommodations = [
    {
      type: "On-Campus Accommodation",
      description: "For invited speakers and limited number of participants",
      options: [
        {
          name: "IIT Jodhpur Guest House",
          facilities: ["Wi-Fi", "Air Conditioning", "Attached Bathroom", "TV", "Room Service"],
          distance: "Within campus",
          pricing: "Complementary for invited speakers"
        },
        {
          name: "Faculty Residences",
          facilities: ["Wi-Fi", "Air Conditioning", "Attached Bathroom", "TV"],
          distance: "Within campus",
          pricing: "₹3,000 per night"
        },
        {
          name: "Student Hostels",
          facilities: ["Wi-Fi", "Common Bathroom", "Basic Amenities"],
          distance: "Within campus",
          pricing: "₹1,200 per night"
        }
      ]
    },
    {
      type: "Off-Campus Accommodation",
      description: "Hotels and guest houses in Mandi town",
      options: [
        {
          name: "Hotel Raj Mahal",
          facilities: ["Wi-Fi", "Air Conditioning", "Restaurant", "Room Service"],
          distance: "18 km from venue (30 minutes)",
          pricing: "₹3,500 - ₹4,500 per night",
          contact: "+91 1905 xxxxxx"
        },
        {
          name: "Hotel Mandav",
          facilities: ["Wi-Fi", "Air Conditioning", "Restaurant", "Conference Room"],
          distance: "20 km from venue (35 minutes)",
          pricing: "₹2,800 - ₹3,800 per night",
          contact: "+91 1905 xxxxxx"
        },
        {
          name: "River Side Resort",
          facilities: ["Wi-Fi", "Air Conditioning", "Restaurant", "Spa", "River View"],
          distance: "22 km from venue (40 minutes)",
          pricing: "₹4,200 - ₹5,500 per night",
          contact: "+91 1905 xxxxxx"
        }
      ]
    }
  ];

  const getFacilityIcon = (facility: string) => {
    switch(facility) {
      case "Wi-Fi":
        return <Wifi size={16} className="mr-1" />;
      case "Restaurant":
      case "Room Service":
        return <Utensils size={16} className="mr-1" />;
      default:
        return <BedDouble size={16} className="mr-1" />;
    }
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="mb-4">Accommodation</h2>
          <div className="w-20 h-1 bg-seec-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Accommodation options for X SEEC participants
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {accommodations.map((accommodation, index) => (
            <div key={index} className="mb-12">
              <div className="flex items-center mb-6">
                <Building size={24} className="text-seec-600 mr-3" />
                <h3 className="text-xl font-semibold">{accommodation.type}</h3>
              </div>
              <p className="text-gray-700 mb-6">{accommodation.description}</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {accommodation.options.map((option, idx) => (
                  <div key={idx} className="card p-6 hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold text-lg mb-4">{option.name}</h4>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <MapPin size={18} className="text-seec-600 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 text-sm">{option.distance}</p>
                      </div>
                      
                      {option.contact && (
                        <div className="flex items-start">
                          <Phone size={18} className="text-seec-600 mr-2 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700 text-sm">{option.contact}</p>
                        </div>
                      )}
                      
                      <div className="flex items-start">
                        <BedDouble size={18} className="text-seec-600 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 text-sm">{option.pricing}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-sm mb-2">Facilities:</h5>
                      <div className="flex flex-wrap gap-2">
                        {option.facilities.map((facility, fidx) => (
                          <span key={fidx} className="bg-seec-50 text-sm py-1 px-2 rounded-md flex items-center">
                            {getFacilityIcon(facility)}
                            {facility}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Accommodation Request</h3>
            <p className="text-gray-700 mb-6">
              Participants can request accommodation assistance by completing the accommodation request form. 
              The organizing committee will try to arrange accommodation based on availability and preferences.
            </p>
            
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-1 text-gray-700">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seec-500"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-1 text-gray-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seec-500"
                  placeholder="Your Email"
                />
              </div>
              
              <div>
                <label htmlFor="accommodation-type" className="block mb-1 text-gray-700">Preferred Accommodation Type</label>
                <select 
                  id="accommodation-type"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seec-500"
                >
                  <option value="">Select Preference</option>
                  <option value="on-campus">On-Campus</option>
                  <option value="off-campus">Off-Campus</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="check-in" className="block mb-1 text-gray-700">Check-in Date</label>
                <input 
                  type="date" 
                  id="check-in" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seec-500"
                />
              </div>
              
              <div>
                <label htmlFor="check-out" className="block mb-1 text-gray-700">Check-out Date</label>
                <input 
                  type="date" 
                  id="check-out" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seec-500"
                />
              </div>
              
              <div>
                <label htmlFor="guests" className="block mb-1 text-gray-700">Number of Guests</label>
                <input 
                  type="number" 
                  id="guests" 
                  min="1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seec-500"
                  placeholder="1"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="special-requests" className="block mb-1 text-gray-700">Special Requests</label>
                <textarea 
                  id="special-requests" 
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seec-500"
                  placeholder="Any special requirements or preferences"
                ></textarea>
              </div>
              
              <div className="md:col-span-2">
                <button 
                  type="submit"
                  className="btn btn-primary"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
