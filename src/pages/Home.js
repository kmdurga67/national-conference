import HeroSection from '../components/HeroSection';
import ImportantDates from '../components/ImportantDates';
import SpeakersGrid from '../components/SpeakersGrid';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ImportantDates />
      <SpeakersGrid />
      
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Join Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't miss this opportunity to connect with leading researchers and professionals in your field.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Register Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;