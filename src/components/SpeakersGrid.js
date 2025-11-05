import { useNavigate } from 'react-router-dom';
import { CONFERENCE_DATA } from '../constants/conferenceData';

const SpeakersGrid = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/speakers");
    }
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Keynote Speakers</h2>
          <p className="text-lg text-gray-600">Learn from leading experts in the field</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONFERENCE_DATA.speakers.map((speaker) => (
            <div key={speaker.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                <p className="text-blue-600 font-medium mb-1">{speaker.title}</p>
                <p className="text-gray-600 mb-3">{speaker.affiliation}</p>
                <p className="text-sm text-gray-500 italic">Topic: {speaker.topic}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors" onClick={handleClick}>
            View All Speakers
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpeakersGrid;