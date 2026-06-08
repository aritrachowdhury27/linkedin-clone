import { connections } from '../data/mockData';

export default function Messaging() {
  const conversations = connections.slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 h-[calc(100vh-150px)]">
          {/* Conversations List */}
          <div className="md:col-span-4 border-r border-gray-200 overflow-y-auto">
            <div className="p-4 border-b border-gray-200">
              <input
                type="text"
                placeholder="Search messages"
                className="w-full px-3 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="divide-y divide-gray-200">
              {conversations.map((connection, index) => (
                <div
                  key={connection.id}
                  className={`p-4 cursor-pointer transition-colors ${
                    index === 0 ? 'bg-blue-50 border-l-4 border-l-blue-600' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl flex-shrink-0">
                      {connection.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-sm text-gray-900 truncate">
                          {connection.name}
                        </h3>
                        <span className="text-xs text-gray-500">2h</span>
                      </div>
                      <p className="text-sm text-gray-600 truncate mt-0.5">{connection.title}</p>
                      <p className="text-sm text-gray-500 truncate mt-1">
                        Thanks for connecting! Let's catch up...
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="md:col-span-8 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl">
                  {conversations[0].avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{conversations[0].name}</h3>
                  <p className="text-sm text-gray-600">{conversations[0].title}</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-lg">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-lg flex-shrink-0">
                    {conversations[0].avatar}
                  </div>
                  <div>
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-2">
                      <p className="text-sm text-gray-900">
                        Hi! Thanks for connecting. I saw your profile and was really impressed by your experience.
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 ml-2">10:30 AM</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="flex items-start space-x-2 max-w-lg">
                  <div>
                    <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none px-4 py-2">
                      <p className="text-sm">
                        Thank you! I'd be happy to chat. What would you like to discuss?
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 mr-2 text-right">10:32 AM</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-lg">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-lg flex-shrink-0">
                    {conversations[0].avatar}
                  </div>
                  <div>
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-2">
                      <p className="text-sm text-gray-900">
                        I'm working on a new product initiative and would love to get your insights. Are you available for a quick call this week?
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 ml-2">10:35 AM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <input
                  type="text"
                  placeholder="Write a message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded">
                  😊
                </button>
                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded">
                  📎
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white font-semibold text-sm rounded-full hover:bg-blue-700 transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
