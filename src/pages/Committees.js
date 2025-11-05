import { CONFERENCE_DATA } from '../constants/conferenceData';

const Committees = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Conference Committees</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated professionals who are working to make this conference success.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Organizing Committee</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONFERENCE_DATA.committees.organizing.map((member, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.affiliation}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Scientific Committee</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONFERENCE_DATA.committees.scientific.map((member, index) => (
              <div key={index} className="text-center p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.affiliation}</p>
              </div>
            ))}
            {[
              "Dr. Wei Zhang - Tsinghua University",
              "Dr. Maria Silva - University of Barcelona",
              "Dr. Kenji Tanaka - University of Tokyo",
              "Dr. Lisa Brown - MIT"
            ].map((member, index) => (
              <div key={index} className="text-center p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.split(' - ')[0]}</h3>
                <p className="text-gray-600 text-sm">{member.split(' - ')[1]}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">International Advisory Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Prof. David Wilson", affiliation: "Cambridge University, UK" },
              { name: "Prof. Yuki Nakamura", affiliation: "Kyoto University, Japan" },
              { name: "Prof. Maria Garcia", affiliation: "ETH Zurich, Switzerland" },
              { name: "Prof. Robert Chen", affiliation: "Stanford University, USA" },
              { name: "Prof. Anna Kowalski", affiliation: "Max Planck Institute, Germany" },
              { name: "Prof. Ahmed Hassan", affiliation: "Cairo University, Egypt" }
            ].map((member, index) => (
              <div key={index} className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-100 text-sm">{member.affiliation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Local Organizing Committee</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Dr. Sanjay Patel - Logistics",
              "Dr. Meera Sharma - Program",
              "Dr. Rahul Verma - Finance",
              "Dr. Anjali Singh - Registration",
              "Dr. Vikram Joshi - Technical",
              "Dr. Priya Nair - Hospitality",
              "Dr. Arjun Mehta - Publicity",
              "Dr. Neha Kapoor - Volunteers"
            ].map((member, index) => (
              <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{member.split(' - ')[0]}</h3>
                <p className="text-gray-600 text-xs">{member.split(' - ')[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committees;