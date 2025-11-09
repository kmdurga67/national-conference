import { CONFERENCE_DATA } from '../constants/conferenceData';

const SpeakersGrid = () => {
  return (
    <section className="py-8 sm:py-4 lg:py-6 bg-gradient-to-br from-gray-50 to-white">
      <p className='text-2xl font-semibold text-blue-500 text-center'>Speakers</p>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {CONFERENCE_DATA.speakers.map((speaker) => (
            <div 
              key={speaker.id} 
              className="group text-center"
            >
              <div className="relative mx-auto mb-4 sm:mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300 transform group-hover:scale-105">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-md">
                    ●
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                {speaker.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersGrid;