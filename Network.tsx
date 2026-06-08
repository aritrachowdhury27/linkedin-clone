import ConnectionCard from '../components/ConnectionCard';
import { connections, suggestions } from '../data/mockData';

export default function Network() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-4">Manage my network</h3>
            <div className="space-y-2">
              {[
                { label: 'Connections', count: 847 },
                { label: 'Following', count: 234 },
                { label: 'Followers', count: 512 },
                { label: 'Groups', count: 12 },
                { label: 'Events', count: 5 },
                { label: 'Pages', count: 8 },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-3 py-2 hover:bg-gray-50 rounded cursor-pointer"
                >
                  <span className="text-sm text-gray-700">{item.label}</span>
                  <span className="text-sm font-semibold text-gray-900">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-9">
          {/* Invitations */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Invitations</h2>
              <button className="text-sm text-gray-600 hover:text-gray-900">See all</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {suggestions.slice(0, 2).map((connection) => (
                <ConnectionCard key={connection.id} connection={connection} showConnect={true} />
              ))}
            </div>
          </div>

          {/* People you may know */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">People you may know</h2>
              <button className="text-sm text-gray-600 hover:text-gray-900">See all</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {suggestions.map((connection) => (
                <ConnectionCard key={connection.id} connection={connection} showConnect={true} />
              ))}
            </div>
          </div>

          {/* My Connections */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                My connections ({connections.length})
              </h2>
              <input
                type="text"
                placeholder="Search connections"
                className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {connections.map((connection) => (
                <ConnectionCard key={connection.id} connection={connection} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
