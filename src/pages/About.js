import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Our Conference 2024</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            The Our National Conference brings together 
            leading researchers, scientists, and industry professionals to discuss the latest 
            advancements and future directions in scientific research and innovation.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Conference Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To foster interdisciplinary collaboration and knowledge exchange among 
                scientists, researchers, and industry leaders from around the world. 
                We aim to create a platform that accelerates scientific discovery and 
                addresses global challenges through innovative research.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Focus Areas</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Biotechnology and Life Sciences</li>
                <li>• Materials Science and Engineering</li>
                <li>• Environmental Science and Sustainability</li>
                <li>• Computational Science and AI</li>
                <li>• Medical and Health Sciences</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Attend?</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Networking Opportunities</h4>
                  <p className="text-blue-700">Connect with experts and peers from around the globe</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Latest Research</h4>
                  <p className="text-green-700">Discover cutting-edge research and innovations</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Career Development</h4>
                  <p className="text-purple-700">Enhance your professional skills and knowledge</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Collaboration</h4>
                  <p className="text-orange-700">Find opportunities for research collaboration</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Conference Themes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p>Exploring groundbreaking research and novel approaches</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                <p>Building bridges between disciplines and institutions</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3">Impact</h3>
                <p>Creating solutions for global challenges</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Expected Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Knowledge Sharing</h3>
              <p className="text-gray-600 text-sm">Exchange of latest research findings</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Partnerships</h3>
              <p className="text-gray-600 text-sm">New research collaborations</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">Novel research directions</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Global Impact</h3>
              <p className="text-gray-600 text-sm">Solutions for global challenges</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;