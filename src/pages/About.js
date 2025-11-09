import { ABOUT_CONTENT, CONFERENCE_THEMES } from '../constants/conferenceThemes';

const About = () => {
  const { hero, overview } = ABOUT_CONTENT;
  const { mainTheme } = CONFERENCE_THEMES;

  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    green: 'bg-green-50 border-green-200 text-green-800',
    purple: 'bg-purple-50 border-purple-200 text-purple-800',
    orange: 'bg-orange-50 border-orange-200 text-orange-800'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            {hero.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {hero.description}
          </p>
        </section>
        <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            {overview.title}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {overview.mission.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {overview.mission.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {overview.focusAreas.title}
                </h3>
                <ul className="text-gray-600 space-y-2">
                  {overview.focusAreas.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {overview.benefits.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {overview.benefits.items.map((benefit, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 ${colorClasses[benefit.color]} transition-all duration-300 hover:shadow-md hover:scale-105`}
                  >
                    <h4 className="font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-sm opacity-90">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-6 sm:p-8 text-white mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Conference Themes</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
            {mainTheme.map((theme, index) => (
              <div
                key={index}
                className="bg-white/20 rounded-lg p-6 backdrop-blur-sm border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-4 text-center">
                  {theme.category}
                </h3>
                <ul className="text-white/90 space-y-2">
                  {theme.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm sm:text-base flex items-start">
                      <span className="text-white mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;