
import React from 'react';
import { CreditCard, UserCheck, FileCheck, Calendar } from 'lucide-react';

const Registration: React.FC = () => {
  const registrationFees = [
    {
      category: "Student / Research Scholar",
      earlyBird: "₹5,000",
      regular: "₹6,000",
      inclusions: ["Conference kit", "Lunch & refreshments", "Access to all sessions", "Certificate"]
    },
    {
      category: "Academic / Faculty",
      earlyBird: "₹7,500",
      regular: "₹8,500",
      inclusions: ["Conference kit", "Lunch & refreshments", "Access to all sessions", "Certificate", "Conference dinner"]
    },
    {
      category: "Industry Professional",
      earlyBird: "₹10,000",
      regular: "₹12,000",
      inclusions: ["Conference kit", "Lunch & refreshments", "Access to all sessions", "Certificate", "Conference dinner"]
    },
    {
      category: "International Delegate",
      earlyBird: "$300",
      regular: "$350",
      inclusions: ["Conference kit", "Lunch & refreshments", "Access to all sessions", "Certificate", "Conference dinner"]
    }
  ];

  const registrationSteps = [
    {
      icon: UserCheck,
      title: "Account Creation",
      description: "Create an account on the conference portal with your personal and professional details"
    },
    {
      icon: FileCheck,
      title: "Abstract/Paper Submission",
      description: "Submit your accepted abstract or paper in the required format"
    },
    {
      icon: CreditCard,
      title: "Fee Payment",
      description: "Complete payment using credit/debit card, net banking, or bank transfer"
    },
    {
      icon: Calendar,
      title: "Confirmation",
      description: "Receive confirmation email with registration details and instructions"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="mb-4">Registration</h2>
          <div className="w-20 h-1 bg-seec-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Register for X SEEC to present your research and network with peers
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-xl font-semibold mb-6 text-center">Registration Fees</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-3 px-4 bg-seec-50 border-b text-left">Category</th>
                  <th className="py-3 px-4 bg-seec-50 border-b text-center">Early Bird<br/><span className="text-sm font-normal">(Before Nov 25, 2024)</span></th>
                  <th className="py-3 px-4 bg-seec-50 border-b text-center">Regular<br/><span className="text-sm font-normal">(After Nov 25, 2024)</span></th>
                  <th className="py-3 px-4 bg-seec-50 border-b text-left">Inclusions</th>
                </tr>
              </thead>
              <tbody>
                {registrationFees.map((fee, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4 border-b">{fee.category}</td>
                    <td className="py-3 px-4 border-b text-center font-medium">{fee.earlyBird}</td>
                    <td className="py-3 px-4 border-b text-center font-medium">{fee.regular}</td>
                    <td className="py-3 px-4 border-b">
                      <ul className="list-disc pl-4">
                        {fee.inclusions.map((inclusion, idx) => (
                          <li key={idx} className="text-sm">{inclusion}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">* All fees are inclusive of applicable taxes</p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-xl font-semibold mb-6 text-center">Registration Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {registrationSteps.map((step, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="bg-seec-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon size={32} className="text-seec-600" />
                </div>
                <h4 className="font-semibold mb-2">Step {index + 1}: {step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-seec-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Bank Transfer</h4>
                <p className="text-gray-700 mb-1"><span className="font-medium">Bank Name:</span> State Bank of India</p>
                <p className="text-gray-700 mb-1"><span className="font-medium">Account Name:</span> X SEEC Conference</p>
                <p className="text-gray-700 mb-1"><span className="font-medium">Account Number:</span> XXXXXXXXXX</p>
                <p className="text-gray-700 mb-1"><span className="font-medium">IFSC Code:</span> SBIN0XXXXX</p>
                <p className="text-gray-700"><span className="font-medium">Branch:</span> IIT Jodhpur Branch</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Online Payment</h4>
                <p className="text-gray-700 mb-3">You can also pay using our online payment portal with credit/debit cards and net banking options.</p>
                <a href="#" className="btn btn-primary inline-block">Pay Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
