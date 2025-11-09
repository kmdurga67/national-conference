import { CONFERENCE_DATA } from '../constants/conferenceData';

const Speakers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mr-4"></div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Distinguished Speakers</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent ml-4"></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Speakers</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {CONFERENCE_DATA.speakers.map((speaker, index) => (
            <div
              key={speaker.id}
              className="group bg-white rounded-md shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/80 overflow-hidden"
            >
              <div className="relative h-64 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-grid-white/[0.05]"></div>
                <div className="relative w-48 h-48 rounded-full bg-white p-2 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110 mx-auto mt-8">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full rounded-full object-cover"
                    onError={(e) => {
                      e.target.src = '/api/placeholder/128/128';
                      e.target.alt = 'Speaker image not available';
                    }}
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="pt-6 pb-6 px-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                  {speaker.name}
                </h3>
                
                <div className="space-y-1 mb-4">
                  <p className="text-blue-600 font-semibold text-sm leading-tight line-clamp-2">
                    {speaker.title}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 min-h-[2.5rem]">
                    {speaker.affiliation}
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wider">
                    Presentation Title
                  </p>
                  <p className="text-gray-800 font-medium text-sm leading-tight italic line-clamp-2 group-hover:text-gray-900 transition-colors">
                    "{speaker.topic}"
                  </p>
                </div>
                <div className="flex justify-center items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                    <span>Expert</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                    <span>45 min</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-24 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;