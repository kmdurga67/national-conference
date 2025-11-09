import { PRESENTATION_GUIDELINES } from '../constants/presentationData';

const PresentationGuidelines = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {PRESENTATION_GUIDELINES.guidelines.title}
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-3 h-8 bg-blue-600 rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-800">
                {PRESENTATION_GUIDELINES.guidelines.oralPresentations.title}
              </h2>
            </div>
            
            <div className="space-y-4">
              {PRESENTATION_GUIDELINES.guidelines.oralPresentations.points.map((point) => (
                <div key={point.id} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 text-sm font-bold">{point.id}</span>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-3 h-8 bg-green-600 rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-800">
                {PRESENTATION_GUIDELINES.guidelines.posterPresentations.title}
              </h2>
            </div>
            
            <div className="space-y-6">
              {PRESENTATION_GUIDELINES.guidelines.posterPresentations.points.map((point) => (
                <div key={point.id} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-600 text-sm font-bold">{point.id}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-lg leading-relaxed mb-2">{point.description}</p>
                    {point.subPoints && (
                      <div className="ml-6 space-y-2 mt-3">
                        {point.subPoints.map((subPoint) => (
                          <div key={subPoint.id} className="flex items-start">
                            <div className="flex-shrink-0 w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center mr-3 mt-1">
                              <span className="text-gray-600 text-xs">•</span>
                            </div>
                            <p className="text-gray-600 text-base">{subPoint.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-2xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Important Notes</h2>
            </div>
            
            <div className="grid gap-4">
              {PRESENTATION_GUIDELINES.guidelines.importantNotes.map((note, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4"></div>
                  <p className="text-gray-700 text-lg font-medium">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationGuidelines;