import React from 'react';

const Venue = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Conference Venue</h1>
          <p className="text-xl text-gray-600">Grand Conference Center, New Delhi</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Venue Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Grand Conference Center<br />
                      Connaught Place<br />
                      New Delhi 110001, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <span className="text-2xl">🚇</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Transportation</h3>
                    <p className="text-gray-600">
                      • 5 min walk from Rajiv Chowk Metro Station<br />
                      • Easy access from airport and railway stations<br />
                      • Ample parking available
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <span className="text-2xl">🏨</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Accommodation</h3>
                    <p className="text-gray-600">
                      Special rates available at partner hotels:<br />
                      • The Grand Hotel (Adjacent to venue)<br />
                      • Metropolitan Inn (0.5 km)<br />
                      • Plaza Central (1 km)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <span className="text-2xl">🍽️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Amenities</h3>
                    <p className="text-gray-600">
                      • High-speed WiFi<br />
                      • Multiple dining options<br />
                      • Business center<br />
                      • Accessibility features
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Location Map</h2>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <span className="text-4xl mb-2 block">🗺️</span>
                  <p>Interactive Map</p>
                  <p className="text-sm">Google Maps integration would go here</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Conference Facilities</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Main Auditorium</h3>
                  <p className="text-gray-600">Capacity: 500 attendees with state-of-the-art AV systems</p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Breakout Rooms</h3>
                  <p className="text-gray-600">
                    • Room A: Capacity 100<br />
                    • Room B: Capacity 100<br />
                    • Room C: Capacity 50 (Workshop)
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Exhibition Hall</h3>
                  <p className="text-gray-600">Spacious area for posters, exhibitions, and networking</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Dining Area</h3>
                  <p className="text-gray-600">Multiple food stations with varied cuisine options</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Travel Information</h2>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">From Indira Gandhi International Airport</h3>
                  <p className="text-blue-700 text-sm">
                    • Metro: Airport Express Line to New Delhi Station, then change to Yellow Line<br />
                    • Taxi: Approximately 30-45 minutes<br />
                    • Distance: 20 km
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">From New Delhi Railway Station</h3>
                  <p className="text-green-700 text-sm">
                    • Metro: 2 stations on Yellow Line to Rajiv Chowk<br />
                    • Auto-rickshaw: 10 minutes<br />
                    • Distance: 3 km
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">About New Delhi</h2>
              <p className="mb-4">
                New Delhi, India's capital, is a vibrant blend of historical heritage and modern development. 
                The conference venue is located in the heart of the city, with easy access to cultural landmarks, 
                shopping districts, and excellent dining options.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Nearby Attractions</h4>
                  <ul className="space-y-1">
                    <li>• India Gate (2 km)</li>
                    <li>• Rashtrapati Bhavan (3 km)</li>
                    <li>• Connaught Place (Walking)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Climate</h4>
                  <ul className="space-y-1">
                    <li>• December: Pleasant</li>
                    <li>• Average Temp: 12-20°C</li>
                    <li>• Light jacket recommended</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;