import { CONFERENCE_DATA } from '../constants/conferenceData';

const ImportantDates = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Important Dates</h2>
          <p className="text-lg text-gray-600">Mark your calendar for these key deadlines</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONFERENCE_DATA.importantDates.map((date) => (
            <div
              key={date.id}
              className={`bg-white rounded-lg shadow-lg p-6 text-center border-t-4 ${
                date.passed ? 'border-gray-300' : 'border-blue-600'
              }`}
            >
              <div className="text-sm text-gray-500 mb-2">{date.event}</div>
              <div className={`text-xl font-bold ${
                date.passed ? 'text-gray-400' : 'text-blue-600'
              }`}>
                {date.date}
              </div>
              {!date.passed && (
                <div className="mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Upcoming
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;