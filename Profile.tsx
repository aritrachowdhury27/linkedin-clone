import { currentUser } from '../data/mockData';

export default function Profile() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="space-y-4">
        {/* Profile Header Card */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {/* Banner */}
          <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
          
          {/* Profile Info */}
          <div className="px-6 pb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-end -mt-20 sm:-mt-16">
              <div className="w-32 h-32 rounded-full bg-white border-4 border-white flex items-center justify-center text-6xl shadow-lg">
                {currentUser.avatar}
              </div>
              <div className="flex-1 sm:ml-6 mt-4 sm:mt-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{currentUser.name}</h1>
                    <p className="text-lg text-gray-700 mt-1">{currentUser.title}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {currentUser.company} • {currentUser.location}
                    </p>
                    <p className="text-sm text-blue-600 mt-2 font-medium">
                      {currentUser.connections} connections
                    </p>
                  </div>
                  <div className="flex space-x-2 mt-4 sm:mt-0">
                    <button className="px-6 py-2 bg-blue-600 text-white font-semibold text-sm rounded-full hover:bg-blue-700 transition-colors">
                      Open to
                    </button>
                    <button className="px-6 py-2 border border-blue-600 text-blue-600 font-semibold text-sm rounded-full hover:bg-blue-50 transition-colors">
                      Add section
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 font-semibold text-sm rounded-full hover:bg-gray-50 transition-colors">
                      More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
          <p className="text-gray-700 leading-relaxed">{currentUser.about}</p>
        </div>

        {/* Experience Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Experience</h2>
            <button className="text-gray-600 hover:bg-gray-100 rounded p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
          <div className="space-y-6">
            {currentUser.experience.map((exp) => (
              <div key={exp.id} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                  💼
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-gray-700 mt-1">{exp.company}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    {exp.startDate} - {exp.endDate || 'Present'}
                  </p>
                  <p className="text-sm text-gray-600">{exp.location}</p>
                  <p className="text-gray-700 mt-2 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Education</h2>
            <button className="text-gray-600 hover:bg-gray-100 rounded p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
          <div className="space-y-6">
            {currentUser.education.map((edu) => (
              <div key={edu.id} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                  🎓
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{edu.school}</h3>
                  <p className="text-gray-700 mt-1">
                    {edu.degree}, {edu.field}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {edu.startYear} - {edu.endYear}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
            <button className="text-gray-600 hover:bg-gray-100 rounded p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {currentUser.skills.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
