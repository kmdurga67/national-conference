import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    affiliation: '',
    position: '',
    country: '',
    registrationType: 'academic',
    abstractSubmission: 'no',
    dietaryRequirements: '',
    specialNeeds: ''
  });

  const registrationRates = {
    academic: {
      early: '₹8,000',
      regular: '₹12,000',
      student: '₹5,000'
    },
    industry: {
      early: '₹15,000',
      regular: '₹20,000'
    },
    virtual: {
      regular: '₹6,000'
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Registration form submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Registration</h1>
          <p className="text-xl text-gray-600">Join us for ICAS 2024</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Registration Form</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Affiliation/Institution *
                    </label>
                    <input
                      type="text"
                      name="affiliation"
                      value={formData.affiliation}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Position/Title *
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country *
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Country</option>
                    <option value="india">India</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="germany">Germany</option>
                    <option value="japan">Japan</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Registration Type *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { value: 'academic', label: 'Academic', desc: 'Faculty & Researchers' },
                      { value: 'student', label: 'Student', desc: 'Student ID Required' },
                      { value: 'industry', label: 'Industry', desc: 'Corporate Professionals' }
                    ].map((type) => (
                      <label key={type.value} className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500">
                        <input
                          type="radio"
                          name="registrationType"
                          value={type.value}
                          checked={formData.registrationType === type.value}
                          onChange={handleInputChange}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <div className="ml-3">
                          <div className="font-medium text-gray-900">{type.label}</div>
                          <div className="text-sm text-gray-500">{type.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Will you be submitting an abstract?
                  </label>
                  <div className="flex space-x-4">
                    {['yes', 'no'].map((option) => (
                      <label key={option} className="flex items-center">
                        <input
                          type="radio"
                          name="abstractSubmission"
                          value={option}
                          checked={formData.abstractSubmission === option}
                          onChange={handleInputChange}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700 capitalize">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                >
                  Proceed to Payment
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Registration Rates</h3>
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <h4 className="font-semibold text-gray-800">Academic/Researchers</h4>
                  <div className="text-sm text-gray-600 mt-1">
                    <div>Early Bird: {registrationRates.academic.early}</div>
                    <div>Regular: {registrationRates.academic.regular}</div>
                  </div>
                </div>
                <div className="border-b pb-3">
                  <h4 className="font-semibold text-gray-800">Students</h4>
                  <div className="text-sm text-gray-600 mt-1">
                    <div>Student Rate: {registrationRates.academic.student}</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Industry Professionals</h4>
                  <div className="text-sm text-gray-600 mt-1">
                    <div>Early Bird: {registrationRates.industry.early}</div>
                    <div>Regular: {registrationRates.industry.regular}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Important Notes</h3>
              <ul className="text-blue-700 space-y-2 text-sm">
                <li>• Early bird rates available until November 15, 2024</li>
                <li>• Registration includes access to all sessions</li>
                <li>• Lunch and refreshments included</li>
                <li>• Conference materials provided</li>
                <li>• Student ID required for student registration</li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Need Help?</h3>
              <p className="text-gray-600 text-sm mb-3">
                Contact our registration team for assistance:
              </p>
              <div className="text-sm text-gray-700">
                <div className="mb-1">📧 registration@icas2024.org</div>
                <div>📞 +91 1234567890</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;