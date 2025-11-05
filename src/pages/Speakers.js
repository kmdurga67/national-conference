import React from 'react';
import { CONFERENCE_DATA } from '../constants/conferenceData';

const Speakers = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Distinguished Speakers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the world-renowned experts and thought leaders who will be sharing 
            their insights and research at ICAS 2024.
          </p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Keynote Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONFERENCE_DATA.speakers.map((speaker) => (
              <div key={speaker.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
                  <div className="text-white text-6xl font-bold">
                    {speaker.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Keynote
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{speaker.title}</p>
                  <p className="text-gray-600 mb-4">{speaker.affiliation}</p>
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500 mb-2">Presentation Topic:</p>
                    <p className="text-gray-800 font-medium italic">{speaker.topic}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Invited Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-2xl shadow-lg p-6 flex items-start space-x-4 hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    IS{item}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Dr. Invited Speaker {item}</h3>
                  <p className="text-blue-600 font-medium mb-1">Professor of Advanced Sciences</p>
                  <p className="text-gray-600 mb-3">Prestigious University {item}</p>
                  <p className="text-sm text-gray-500">Specializing in cutting-edge research areas</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Speaker Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl mb-3">🎤</div>
              <h3 className="font-semibold text-gray-800 mb-2">Keynote</h3>
              <p className="text-gray-600 text-sm">Leading experts in their fields</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-semibold text-gray-800 mb-2">Invited</h3>
              <p className="text-gray-600 text-sm">Renowned researchers</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-3xl mb-3">📢</div>
              <h3 className="font-semibold text-gray-800 mb-2">Panelists</h3>
              <p className="text-gray-600 text-sm">Industry and academia leaders</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-gray-800 mb-2">Lightning Talks</h3>
              <p className="text-gray-600 text-sm">Early career researchers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;