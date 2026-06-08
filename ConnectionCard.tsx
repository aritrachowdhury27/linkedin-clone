import { Connection } from '../types';

interface ConnectionCardProps {
  connection: Connection;
  showConnect?: boolean;
}

export default function ConnectionCard({ connection, showConnect = false }: ConnectionCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-3">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl flex-shrink-0">
          {connection.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 hover:text-blue-700 cursor-pointer">
            {connection.name}
          </h3>
          <p className="text-sm text-gray-600 mt-0.5">{connection.title}</p>
          <p className="text-sm text-gray-600 mt-0.5">{connection.company}</p>
          <p className="text-xs text-gray-500 mt-2">
            {connection.mutualConnections} mutual connections
          </p>
        </div>
      </div>

      <div className="mt-4 flex space-x-2">
        {showConnect ? (
          <>
            <button className="flex-1 px-4 py-2 bg-blue-600 text-white font-semibold text-sm rounded-full hover:bg-blue-700 transition-colors">
              Connect
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 font-semibold text-sm rounded-full hover:bg-gray-50 transition-colors">
              Ignore
            </button>
          </>
        ) : (
          <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 font-semibold text-sm rounded-full hover:bg-gray-50 transition-colors">
            Message
          </button>
        )}
      </div>
    </div>
  );
}
