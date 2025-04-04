
import React, { useEffect } from 'react';
import { CreditCard, User, Users, Globe, FileText } from 'lucide-react';

const RegistrationPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fees = [
    { category: "Indian Delegates", academic: "₹12,000", industry: "₹15,000", student: "₹8,000" },
    { category: "International Delegates", academic: "$400", industry: "$500", student: "$250" },
    { category: "Accompanying Person", academic: "₹6,000", industry: "₹6,000", student: "$200" }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <h1 className="mb-4">Registration</h1>
            <div className="w-20 h-1 bg-seec-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Join us at the 9th International Conference on Sustainable Energy and Environmental Challenges
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-seec-50 p-6 rounded-lg shadow-sm mb-12">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <CreditCard className="mr-2 text-seec-600" size={24} />
                Registration Fees
              </h2>
              
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
              
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p>* Early bird registration fees (10% discount) are available until January 25, 2024</p>
                <p>* At least one author must register for each accepted paper</p>
                <p>* Registration fee includes conference kit, proceedings, lunch, tea/coffee, and conference dinner</p>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-6 text-center">Registration Categories</h2>
              <div className="grid md:grid-cols-3 gap-6">
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
            </div>
            
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-6">Registration Process</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">How to Register</h3>
                <ol className="list-decimal pl-5 space-y-3">
                  <li>Complete the online registration form on the conference website</li>
                  <li>Make the payment through bank transfer or online payment gateway</li>
                  <li>Upload the payment proof in the registration portal</li>
                  <li>Receive confirmation email with your registration details</li>
                </ol>
                
                <h3 className="text-lg font-medium mt-6 mb-3">Payment Methods</h3>
                <p className="mb-2">Payment can be made through:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Online payment gateway (credit/debit cards, net banking)</li>
                  <li>Bank transfer (NEFT/RTGS/IMPS)</li>
                </ul>
                <p className="mt-4 text-sm">
                  Bank details for wire transfer will be provided in the registration form.
                </p>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <FileText className="mr-2 text-seec-600" size={24} />
                Registration Policy
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <ul className="list-disc pl-5 space-y-3">
                  <li>At least one author must register for each accepted paper</li>
                  <li>Each registration covers only one paper presentation</li>
                  <li>For additional paper presentations, a fee of ₹5,000 (or $150 for international delegates) will be charged</li>
                  <li>Cancellations made before January 31, 2024, will receive a 50% refund</li>
                  <li>No refunds will be provided for cancellations after January 31, 2024</li>
                  <li>Registration can be transferred to another person from the same organization with prior approval</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
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
      </section>
    </div>
  );
};

export default RegistrationPage;
