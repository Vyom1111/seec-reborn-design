
import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen">
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <h1 className="mb-4">Contact Us</h1>
            <div className="w-20 h-1 bg-seec-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Have questions about the conference? Get in touch with our team
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-seec-600 mr-4 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-gray-600">
                        Department of Mechanical Engineering<br />
                        Indian Institute of Technology Jodhpur<br />
                        NH 62, Surpura Bypass Rd, Karwar<br />
                        Jheepasani, Rajasthan 342030, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-seec-600 mr-4 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">seec2025@iiti.ac.in</p>
                      <p className="text-gray-600">seec.conference@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-seec-600 mr-4 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-gray-600">+91 731 660 3173</p>
                      <p className="text-gray-600">+91 731 660 3285</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold mb-4">Conference Venue</h3>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.275192121168!2d75.9211315748243!3d22.52048923468756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efcccbce7145%3A0x784e8cb69818596b!2sIndian%20Institute%20of%20Technology%20Indore!5e0!3m2!1sen!2sin!4v1681214580695!5m2!1sen!2sin" 
                      width="100%" 
                      height="300" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="IIT Jodhpur Map"
                    ></iframe>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
                
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seec-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seec-500"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seec-500"
                      placeholder="Query about registration"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seec-500"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="text-2xl font-semibold mb-6 text-center">Travel Information</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">How to Reach IIT Jodhpur</h3>
                <p className="mb-4">
                  IIT Jodhpur is located in Simrol, approximately 25 km from Jodhpur city center.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">By Air</h4>
                    <p>
                      Devi Ahilyabai Holkar International Airport (IDR) is well-connected to major cities in India. 
                      From the airport, you can hire a taxi to reach IIT Jodhpur (approximately 35 km).
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">By Train</h4>
                    <p>
                      Jodhpur Junction is the main railway station, well-connected to major cities across India. 
                      From the station, you can hire a taxi or take a bus to reach IIT Jodhpur.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">By Road</h4>
                    <p>
                      Jodhpur has good road connectivity with major cities. Regular buses operate between Jodhpur 
                      city and IIT Jodhpur campus.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <a 
                    href="https://www.iiti.ac.in/page/how-to-reach" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline flex items-center"
                  >
                    <span>More Travel Information</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
