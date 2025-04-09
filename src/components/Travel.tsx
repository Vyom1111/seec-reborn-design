
import React from 'react';
import { Plane, Train, Bus, Map } from 'lucide-react';

const Travel: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="mb-4">Travel Information</h2>
          <div className="w-20 h-1 bg-seec-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            How to reach IIT Jodhpur for the X SEEC Conference
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card p-6">
              <div className="bg-seec-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane size={32} className="text-seec-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">By Air</h3>
              <div>
                <p className="text-gray-700 mb-3">
                  The nearest airports to IIT Jodhpur are:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-seec-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-seec-500 rounded-full w-2 h-2"></div>
                    </div>
                    <div>
                      <p className="font-medium">Bhuntar Airport (KUU)</p>
                      <p className="text-gray-600 text-sm">60 km from IIT Jodhpur (1.5 hours by taxi)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-seec-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-seec-500 rounded-full w-2 h-2"></div>
                    </div>
                    <div>
                      <p className="font-medium">Chandigarh Airport (IXC)</p>
                      <p className="text-gray-600 text-sm">175 km from IIT Jodhpur (5 hours by taxi)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-seec-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-seec-500 rounded-full w-2 h-2"></div>
                    </div>
                    <div>
                      <p className="font-medium">Delhi Airport (DEL)</p>
                      <p className="text-gray-600 text-sm">470 km from IIT Jodhpur (10 hours by taxi)</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="card p-6">
              <div className="bg-seec-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Train size={32} className="text-seec-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">By Train</h3>
              <div>
                <p className="text-gray-700 mb-3">
                  The nearest railway stations to IIT Jodhpur are:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-seec-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-seec-500 rounded-full w-2 h-2"></div>
                    </div>
                    <div>
                      <p className="font-medium">Kiratpur Sahib</p>
                      <p className="text-gray-600 text-sm">110 km from IIT Jodhpur (3 hours by taxi)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-seec-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-seec-500 rounded-full w-2 h-2"></div>
                    </div>
                    <div>
                      <p className="font-medium">Una</p>
                      <p className="text-gray-600 text-sm">130 km from IIT Jodhpur (4 hours by taxi)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-seec-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-seec-500 rounded-full w-2 h-2"></div>
                    </div>
                    <div>
                      <p className="font-medium">Chandigarh</p>
                      <p className="text-gray-600 text-sm">175 km from IIT Jodhpur (5 hours by taxi)</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="card p-6">
              <div className="bg-seec-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bus size={32} className="text-seec-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">By Road</h3>
              <div>
                <p className="text-gray-700 mb-3">
                  IIT Jodhpur is well connected by road from:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-seec-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-seec-500 rounded-full w-2 h-2"></div>
                    </div>
                    <div>
                      <p className="font-medium">Mandi Town</p>
                      <p className="text-gray-600 text-sm">20 km from IIT Jodhpur (45 minutes by taxi)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-seec-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-seec-500 rounded-full w-2 h-2"></div>
                    </div>
                    <div>
                      <p className="font-medium">Shimla</p>
                      <p className="text-gray-600 text-sm">140 km from IIT Jodhpur (4 hours by taxi)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-seec-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-seec-500 rounded-full w-2 h-2"></div>
                    </div>
                    <div>
                      <p className="font-medium">Chandigarh</p>
                      <p className="text-gray-600 text-sm">175 km from IIT Jodhpur (5 hours by taxi)</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center">Local Transportation</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-4">
                For the convenience of participants, the conference will arrange shuttle services between recommended hotels and the conference venue. Details will be shared closer to the conference dates.
              </p>
              <p className="text-gray-700 mb-4">
                Local taxis and cabs are also available in Mandi town. The organizing committee can assist with booking local transportation if requested in advance.
              </p>
              <div className="bg-seec-50 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Recommended Taxi Services</h4>
                <p className="text-gray-700 mb-1"><span className="font-medium">Mandi Taxi Association:</span> +91 1905 xxxxxx</p>
                <p className="text-gray-700"><span className="font-medium">IIT Jodhpur Travel Desk:</span> travel@iitmandi.ac.in</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Location Map</h3>
            <div className="bg-seec-50 p-4 rounded-lg shadow-sm flex items-center justify-center">
              <Map size={24} className="text-seec-600 mr-2" />
              <span className="text-gray-700">Google Maps integration will be added here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travel;
