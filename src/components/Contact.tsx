
import React from 'react';
import { Mail, Phone, MapPin, User } from 'lucide-react';

const Contact: React.FC = () => {
  const organizingCommittee = [
    {
      role: "Conference Chair",
      name: "Prof. John Smith",
      affiliation: "IIT Mandi",
      email: "chair@ixseec.org"
    },
    {
      role: "Program Chair",
      name: "Prof. Emily Johnson",
      affiliation: "IIT Mandi",
      email: "program@ixseec.org"
    },
    {
      role: "General Secretary",
      name: "Prof. Robert Brown",
      affiliation: "ISEES",
      email: "secretary@ixseec.org"
    },
    {
      role: "Treasurer",
      name: "Prof. Sarah Williams",
      affiliation: "IIT Mandi",
      email: "treasurer@ixseec.org"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-seec-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Get in touch with the IX SEEC organizing team for any queries
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">General Inquiries</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="text-seec-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@ixseec.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-seec-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+91 1234 567890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-seec-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">
                      Indian Institute of Technology Mandi<br />
                      Kamand Campus, VPO Kamand<br />
                      Mandi, Himachal Pradesh 175005<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-gray-700">Name</label>
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
                  <label htmlFor="subject" className="block mb-1 text-gray-700">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seec-500"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1 text-gray-700">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seec-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="btn btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Organizing Committee</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {organizingCommittee.map((member, index) => (
                <div key={index} className="card p-6">
                  <div className="bg-seec-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User size={32} className="text-seec-600" />
                  </div>
                  <h4 className="font-semibold text-center">{member.name}</h4>
                  <p className="text-gray-700 text-center mb-1">{member.role}</p>
                  <p className="text-gray-600 text-center text-sm mb-2">{member.affiliation}</p>
                  <p className="text-seec-600 text-center text-sm">{member.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
