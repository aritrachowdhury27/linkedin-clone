import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-3">
        <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center text-2xl flex-shrink-0">
          {job.logo}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-blue-700 hover:underline cursor-pointer">{job.title}</h3>
          <p className="text-sm text-gray-900 mt-0.5">{job.company}</p>
          <p className="text-sm text-gray-600 mt-0.5">{job.location}</p>
          <div className="flex items-center space-x-2 mt-2 text-xs text-gray-600">
            <span className="bg-gray-100 px-2 py-1 rounded">{job.type}</span>
            <span className="bg-gray-100 px-2 py-1 rounded">{job.level}</span>
          </div>
          <p className="text-xs text-gray-500 mt-2">{job.postedDate}</p>
          <p className="text-xs text-green-700 mt-1">
            {job.applicants} applicants
          </p>
        </div>
        <button className="text-gray-500 hover:bg-gray-100 rounded p-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-200">
        <p className="text-sm text-gray-700">{job.description}</p>
      </div>

      <div className="mt-3 flex space-x-2">
        <button className="flex-1 px-4 py-2 bg-blue-600 text-white font-semibold text-sm rounded-full hover:bg-blue-700 transition-colors">
          Apply
        </button>
        <button className="px-4 py-2 border border-blue-600 text-blue-600 font-semibold text-sm rounded-full hover:bg-blue-50 transition-colors">
          Save
        </button>
      </div>
    </div>
  );
}
