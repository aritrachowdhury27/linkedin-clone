import { currentUser } from '../data/mockData';

export default function CreatePost() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl flex-shrink-0">
          {currentUser.avatar}
        </div>
        <button className="flex-1 text-left px-4 py-3 border border-gray-300 rounded-full text-sm text-gray-600 hover:bg-gray-50 transition-colors">
          Start a post
        </button>
      </div>

      <div className="flex items-center justify-around mt-3 pt-3 border-t border-gray-200">
        <button className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded transition-colors">
          <span className="text-blue-500 text-lg">📷</span>
          <span className="text-sm font-medium">Photo</span>
        </button>
        <button className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded transition-colors">
          <span className="text-green-600 text-lg">🎥</span>
          <span className="text-sm font-medium">Video</span>
        </button>
        <button className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded transition-colors">
          <span className="text-orange-500 text-lg">📅</span>
          <span className="text-sm font-medium">Event</span>
        </button>
        <button className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded transition-colors">
          <span className="text-red-500 text-lg">📝</span>
          <span className="text-sm font-medium">Article</span>
        </button>
      </div>
    </div>
  );
}
