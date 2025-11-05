import React, { useState } from 'react';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);

  const scheduleData = {
    1: {
      date: "December 15, 2024",
      sessions: [
        {
          time: "08:00 - 09:00",
          title: "Registration & Welcome Coffee",
          type: "registration",
          location: "Main Lobby"
        },
        {
          time: "09:00 - 09:30",
          title: "Opening Ceremony",
          speaker: "Conference Chairs",
          type: "ceremony",
          location: "Main Auditorium"
        },
        {
          time: "09:30 - 10:30",
          title: "Keynote: Advances in Molecular Biology",
          speaker: "Dr. Sarah Johnson",
          type: "keynote",
          location: "Main Auditorium"
        },
        {
          time: "10:30 - 11:00",
          title: "Coffee Break & Networking",
          type: "break",
          location: "Exhibition Hall"
        },
        {
          time: "11:00 - 12:30",
          title: "Parallel Session A: Biotechnology",
          type: "parallel",
          location: "Room A"
        },
        {
          time: "11:00 - 12:30",
          title: "Parallel Session B: Materials Science",
          type: "parallel",
          location: "Room B"
        },
        {
          time: "12:30 - 14:00",
          title: "Lunch Break",
          type: "break",
          location: "Dining Hall"
        }
      ]
    },
    2: {
      date: "December 16, 2024",
      sessions: [
        {
          time: "09:00 - 10:00",
          title: "Keynote: Sustainable Energy Solutions",
          speaker: "Dr. Rajesh Kumar",
          type: "keynote",
          location: "Main Auditorium"
        },
        {
          time: "10:00 - 10:30",
          title: "Coffee Break",
          type: "break",
          location: "Exhibition Hall"
        },
        {
          time: "10:30 - 12:00",
          title: "Panel Discussion: Future of Science",
          type: "panel",
          location: "Main Auditorium"
        },
        {
          time: "12:00 - 13:30",
          title: "Lunch & Poster Session",
          type: "poster",
          location: "Exhibition Hall"
        }
      ]
    },
    3: {
      date: "December 17, 2024",
      sessions: [
        {
          time: "09:00 - 10:30",
          title: "Workshop: Research Methodology",
          type: "workshop",
          location: "Room C"
        },
        {
          time: "10:30 - 11:00",
          title: "Coffee Break",
          type: "break",
          location: "Exhibition Hall"
        },
        {
          time: "11:00 - 12:30",
          title: "Closing Keynote & Awards",
          type: "keynote",
          location: "Main Auditorium"
        },
        {
          time: "12:30 - 13:00",
          title: "Closing Ceremony",
          type: "ceremony",
          location: "Main Auditorium"
        }
      ]
    }
  };

  const getTypeColor = (type) => {
    const colors = {
      keynote: "bg-purple-100 text-purple-800 border-purple-200",
      parallel: "bg-blue-100 text-blue-800 border-blue-200",
      panel: "bg-green-100 text-green-800 border-green-200",
      workshop: "bg-orange-100 text-orange-800 border-orange-200",
      poster: "bg-red-100 text-red-800 border-red-200",
      break: "bg-gray-100 text-gray-800 border-gray-200",
      ceremony: "bg-yellow-100 text-yellow-800 border-yellow-200",
      registration: "bg-indigo-100 text-indigo-800 border-indigo-200"
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Conference Schedule</h1>
          <p className="text-xl text-gray-600">Detailed program for ICAS 2024</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[1, 2, 3].map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeDay === day
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              Day {day} - {scheduleData[day].date.split(' ')[1]} {scheduleData[day].date.split(' ')[2]}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-6 text-white">
            <h2 className="text-2xl font-bold">Day {activeDay} - {scheduleData[activeDay].date}</h2>
          </div>
          
          <div className="p-6">
            <div className="space-y-6">
              {scheduleData[activeDay].sessions.map((session, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4 p-6 border-l-4 border-blue-500 bg-gray-50 rounded-lg hover:bg-white transition-colors">
                  <div className="md:w-1/4">
                    <div className="text-lg font-semibold text-blue-600">{session.time}</div>
                    <div className="text-sm text-gray-500 mt-1">{session.location}</div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{session.title}</h3>
                    {session.speaker && (
                      <p className="text-gray-600 mb-3">By: {session.speaker}</p>
                    )}
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(session.type)}`}>
                      {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Session Types</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries({
              keynote: "Keynote Sessions",
              parallel: "Parallel Sessions",
              panel: "Panel Discussions",
              workshop: "Workshops",
              poster: "Poster Sessions",
              break: "Breaks",
              ceremony: "Ceremonies",
              registration: "Registration"
            }).map(([type, label]) => (
              <div key={type} className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${getTypeColor(type).split(' ')[0]}`}></div>
                <span className="text-sm text-gray-600">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;