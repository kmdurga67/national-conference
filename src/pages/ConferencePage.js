import { useState } from 'react';
import { REGISTRATION_DATA } from '../constants/registrationData';
import PresentationGuidelines from './PresentationGuidelines';

const RegistrationPage = () => {
    const [activeCategory, setActiveCategory] = useState(0);

    const { title, categories, importantDates, notes } = REGISTRATION_DATA.registration;
    const handleRegister = () => {
        window.open('https://docs.google.com/forms/', '_blank', 'noopener,noreferrer');
    };

    const getFeeColor = (amount) => {
        const fee = parseInt(amount.replace(/[^0-9]/g, ''));
        if (fee <= 3000) return 'bg-green-100 text-green-800 border-green-300';
        if (fee <= 7000) return 'bg-blue-100 text-blue-800 border-blue-300';
        if (fee <= 12000) return 'bg-orange-100 text-orange-800 border-orange-300';
        return 'bg-red-100 text-red-800 border-red-300';
    };

    const getTypeColor = (type) => {
        if (type.includes('Early Bird')) return 'bg-emerald-500';
        if (type.includes('Late')) return 'bg-amber-500';
        return 'bg-rose-500';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        {title}
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Register now for the upcoming conference. Choose your category and registration type to see applicable fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <i className="fas fa-users mr-3 text-blue-500"></i>
                                Categories
                            </h2>
                            <div className="space-y-3">
                                {categories.map((category, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveCategory(index)}
                                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${activeCategory === index
                                                ? 'bg-blue-500 text-white shadow-lg transform -translate-y-1'
                                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-md'
                                            }`}
                                    >
                                        <div className="font-semibold">{category.position}</div>
                                        <div className={`text-sm mt-1 ${activeCategory === index ? 'text-blue-100' : 'text-gray-500'
                                            }`}>
                                            Starting from {category.fees[0].amount}
                                        </div>
                                    </button>
                                ))}
                            </div>
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                    <i className="far fa-calendar-alt mr-3 text-purple-500"></i>
                                    Important Dates
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Early Bird Deadline:</span>
                                        <span className="font-semibold text-gray-800">{importantDates.earlyBirdDeadline}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Late Registration:</span>
                                        <span className="font-semibold text-gray-800">
                                            {importantDates.lateRegistrationStart} - {importantDates.lateRegistrationEnd}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Conference Dates:</span>
                                        <span className="font-semibold text-gray-800">{importantDates.conferenceDates}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                                    <i className="fas fa-receipt mr-3 text-green-500"></i>
                                    {categories[activeCategory].position} - Fee Structure
                                </h2>
                                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                    Active Category
                                </div>
                            </div>

                            <div className="space-y-4">
                                {categories[activeCategory].fees.map((fee, index) => (
                                    <div
                                        key={index}
                                        className={`border-2 rounded-xl p-5 transition-all duration-300 hover:shadow-md ${getFeeColor(fee.amount)}`}
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center mb-2">
                                                    <span className={`inline-block w-3 h-3 rounded-full mr-2 ${getTypeColor(fee.type)}`}></span>
                                                    <h3 className="font-bold text-lg">{fee.type}</h3>
                                                </div>
                                                <p className="text-gray-700 flex items-center">
                                                    <i className="far fa-clock mr-2"></i>
                                                    {fee.period}
                                                </p>
                                            </div>
                                            <div className="mt-3 md:mt-0 md:text-right">
                                                <div className="text-2xl font-bold">{fee.amount}</div>
                                                {fee.type.includes('Spot') && (
                                                    <div className="text-sm text-red-600 font-semibold mt-1">
                                                        <i className="fas fa-exclamation-triangle mr-1"></i>
                                                        Limited Availability
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                    <i className="fas fa-info-circle mr-3 text-yellow-500"></i>
                                    Important Notes
                                </h3>
                                <ul className="space-y-2">
                                    {notes.map((note, index) => (
                                        <li key={index} className="flex items-start">
                                            <i className="fas fa-chevron-right text-blue-500 mt-1 mr-3 text-sm"></i>
                                            <span className="text-gray-700">{note}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-8 text-center">
                                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300" onClick={handleRegister}>
                                    <i className="fas fa-user-plus mr-2"></i>
                                    Register Now
                                </button>
                                <p className="text-gray-600 mt-3 text-sm">
                                    Secure your spot today and get ready for an amazing conference experience!
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {categories.map((category, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-md p-4 text-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
                                    onClick={() => setActiveCategory(index)}
                                >
                                    <div className="text-sm font-semibold text-gray-700 mb-2">
                                        {category.position.split(' ')[0]}
                                    </div>
                                    <div className="text-2xl font-bold text-blue-600">
                                        {category.fees[0].amount}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">Starting from</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <PresentationGuidelines />
        </div>
    );
};

export default RegistrationPage;