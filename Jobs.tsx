import JobCard from '../components/JobCard';
import { jobs } from '../data/mockData';

export default function Jobs() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-4">Search filters</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  placeholder="City, state, or zip"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Job type</label>
                <div className="space-y-2">
                  {['Full-time', 'Part-time', 'Contract', 'Internship'].map((type) => (
                    <label key={type} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-blue-600" />
                      <span className="text-sm text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience level</label>
                <div className="space-y-2">
                  {['Entry level', 'Mid-Level', 'Senior', 'Director'].map((level) => (
                    <label key={level} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-blue-600" />
                      <span className="text-sm text-gray-700">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">On-site/Remote</label>
                <div className="space-y-2">
                  {['On-site', 'Remote', 'Hybrid'].map((mode) => (
                    <label key={mode} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-blue-600" />
                      <span className="text-sm text-gray-700">{mode}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                placeholder="Search jobs"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="px-6 py-2 bg-blue-600 text-white font-semibold text-sm rounded-full hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Recommended jobs ({jobs.length})
            </h2>
            <select className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option>Most recent</option>
              <option>Most relevant</option>
            </select>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-4">Job seeker guidance</h3>
            <div className="space-y-4">
              <div className="text-sm text-gray-700">
                <p className="font-medium mb-1">✨ I want to improve my resume</p>
                <p className="text-xs text-gray-600">Explore our assessment tool</p>
              </div>
              <div className="text-sm text-gray-700">
                <p className="font-medium mb-1">📊 I want to stand out</p>
                <p className="text-xs text-gray-600">Get tips on how to stand out</p>
              </div>
              <div className="text-sm text-gray-700">
                <p className="font-medium mb-1">🎯 I want to find the right job</p>
                <p className="text-xs text-gray-600">Set your job preferences</p>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-4">Companies you follow</h3>
            <div className="space-y-3">
              {[
                { name: 'Google', logo: '🔴' },
                { name: 'Apple', logo: '🍎' },
                { name: 'Microsoft', logo: '🪟' },
              ].map((company, i) => (
                <div key={i} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded">
                  <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-lg">
                    {company.logo}
                  </div>
                  <span className="text-sm font-medium text-gray-900">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
