
import React from 'react';
import { CreditCard, User, Users, Globe } from 'lucide-react';

const Registration: React.FC = () => {
  const fees = [
    { category: "Indian Delegates", academic: "₹12,000", industry: "₹15,000", student: "₹8,000" },
    { category: "International Delegates", academic: "$400", industry: "$500", student: "$250" },
    { category: "Accompanying Person", academic: "₹6,000", industry: "₹6,000", student: "$200" }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="mb-4">Registration</h2>
          <div className="w-20 h-1 bg-seec-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Join us at the 10th International Conference on Sustainable Energy and Environmental Challenges
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-seec-50 p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <CreditCard className="mr-2 text-seec-600" size={24} />
              Registration Fees
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Academic</th>
                    <th>Industry</th>
                    <th>Student</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((fee, index) => (
                    <tr key={index}>
                      <td>{fee.category}</td>
                      <td>{fee.academic}</td>
                      <td>{fee.industry}</td>
                      <td>{fee.student}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="mt-4 text-sm text-gray-600">
              * Early bird registration fees (10% discount) are available until January 25, 2025
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="card p-6">
              <div className="mb-4 flex justify-center">
                <div className="bg-seec-100 p-3 rounded-full">
                  <User className="text-seec-600" size={24} />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Individual Registration</h3>
              <p className="text-gray-600 text-center">
                Includes conference kit, all sessions, lunch, tea/coffee, and conference dinner
              </p>
            </div>
            
            <div className="card p-6">
              <div className="mb-4 flex justify-center">
                <div className="bg-seec-100 p-3 rounded-full">
                  <Users className="text-seec-600" size={24} />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Group Registration</h3>
              <p className="text-gray-600 text-center">
                For 3+ delegates from the same organization, get a 15% discount
              </p>
            </div>
            
            <div className="card p-6">
              <div className="mb-4 flex justify-center">
                <div className="bg-seec-100 p-3 rounded-full">
                  <Globe className="text-seec-600" size={24} />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">International Delegates</h3>
              <p className="text-gray-600 text-center">
                Special assistance for visa, accommodation, and local transportation
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">How to Register</h3>
            <ol className="list-decimal pl-5 space-y-3">
              <li>Complete the online registration form on the conference website</li>
              <li>Make the payment through bank transfer or online payment gateway</li>
              <li>Upload the payment proof in the registration portal</li>
              <li>Receive confirmation email with your registration details</li>
            </ol>
            
            <div className="mt-6 text-center">
              <a 
                href="https://forms.gle/seec-registration" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
