import { CONFERENCE_DATA } from '../constants/conferenceData';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-purple-800 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {CONFERENCE_DATA.title}
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-6">
            {CONFERENCE_DATA.acronym}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {CONFERENCE_DATA.theme}
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <button className="w-full md:w-auto bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Register Now
            </button>
            <button className="w-full md:w-auto border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Submit Abstract
            </button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">{CONFERENCE_DATA.date}</div>
            <div className="text-lg">Conference Dates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">{CONFERENCE_DATA.venue}</div>
            <div className="text-lg">Venue</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;