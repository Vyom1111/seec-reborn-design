
import React from 'react';
import { Diamond, Award, Medal } from 'lucide-react';

const Sponsorship: React.FC = () => {
  const sponsorshipCategories = [
    {
      name: "Diamond",
      price: "₹5,00,000",
      benefits: [
        "Prominent logo placement on conference website, banners, and materials",
        "Full-page advertisement in conference proceedings",
        "Exhibition booth in prime location",
        "5 complimentary registrations",
        "15-minute presentation slot during plenary session",
        "Corporate literature in conference kit",
        "Recognition during opening and closing ceremonies",
        "Exclusive sponsored dinner with keynote speakers",
        "Logo on conference badge"
      ],
      icon: Diamond,
      color: "bg-blue-50 border-blue-200"
    },
    {
      name: "Platinum",
      price: "₹3,00,000",
      benefits: [
        "Logo placement on conference website, banners, and materials",
        "Half-page advertisement in conference proceedings",
        "Exhibition booth",
        "3 complimentary registrations",
        "10-minute presentation slot",
        "Corporate literature in conference kit",
        "Recognition during opening ceremony",
        "Participation in panel discussion"
      ],
      icon: Award,
      color: "bg-gray-50 border-gray-200"
    },
    {
      name: "Gold",
      price: "₹1,50,000",
      benefits: [
        "Logo on conference website and selected materials",
        "Quarter-page advertisement in conference proceedings",
        "Exhibition space",
        "2 complimentary registrations",
        "Corporate literature in conference kit",
        "Recognition during opening ceremony"
      ],
      icon: Medal,
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      name: "Silver",
      price: "₹75,000",
      benefits: [
        "Logo on conference website",
        "Logo in conference proceedings",
        "1 complimentary registration",
        "Corporate literature in conference kit"
      ],
      icon: Medal,
      color: "bg-gray-50 border-gray-200"
    },
    {
      name: "Bronze",
      price: "₹40,000",
      benefits: [
        "Logo on conference website",
        "Logo in conference proceedings",
        "1 complimentary registration"
      ],
      icon: Medal,
      color: "bg-orange-50 border-orange-200"
    }
  ];
  
  const specialSponsorship = [
    {
      name: "Conference Dinner",
      price: "₹2,00,000",
      description: "Exclusive sponsorship of the conference dinner with branding opportunities and a short speech."
    },
    {
      name: "Welcome Reception",
      price: "₹1,50,000",
      description: "Exclusive sponsorship of the welcome reception with branding opportunities."
    },
    {
      name: "Conference Kit",
      price: "₹1,00,000",
      description: "Your logo on the conference kit distributed to all participants."
    },
    {
      name: "Student Support",
      price: "₹50,000",
      description: "Sponsorship to support student participation, with recognition in the program."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="mb-4">Sponsorship Opportunities</h2>
          <div className="w-20 h-1 bg-seec-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Partner with IX SEEC to showcase your brand to leading researchers and professionals
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-center">Sponsorship Categories</h3>
          
          <div className="space-y-8 mb-16">
            {sponsorshipCategories.map((category, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg border-2 ${category.color} hover:shadow-lg transition-shadow`}
              >
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="mb-4 md:mb-0 md:mr-6 flex items-center">
                    <category.icon size={32} className="text-seec-600 mr-3" />
                    <h4 className="text-xl font-bold">{category.name}</h4>
                  </div>
                  <div className="bg-seec-500 text-white py-1 px-4 rounded-full text-lg font-semibold self-start md:self-auto">
                    {category.price}
                  </div>
                </div>
                
                <div className="mt-6">
                  <h5 className="font-medium mb-3">Benefits:</h5>
                  <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2">
                    {category.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="bg-seec-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                          <div className="bg-seec-500 rounded-full w-2 h-2"></div>
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <h3 className="text-xl font-semibold mb-6 text-center">Special Sponsorship Opportunities</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {specialSponsorship.map((item, index) => (
              <div key={index} className="card p-6">
                <h4 className="text-lg font-semibold mb-2">{item.name}</h4>
                <p className="text-seec-600 font-medium mb-3">{item.price}</p>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-seec-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">Become a Sponsor</h3>
            <p className="text-gray-700 text-center mb-6">
              For sponsorship inquiries or to discuss custom sponsorship packages, please contact our sponsorship team:
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 mb-1"><span className="font-medium">Email:</span> sponsorship@ixseec.org</p>
                <p className="text-gray-700 mb-1"><span className="font-medium">Phone:</span> +91 1234 567890</p>
                <p className="text-gray-700 mb-4"><span className="font-medium">Contact Person:</span> Dr. John Smith</p>
                
                <div className="text-center">
                  <a href="#" className="btn btn-primary">Download Sponsorship Brochure</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
