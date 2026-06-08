import { currentUser } from '../data/mockData';

export default function ProfileCard() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Banner */}
      <div className="h-16 bg-gradient-to-r from-blue-500 to-purple-600"></div>
      
      {/* Profile Info */}
      <div className="px-4 pb-4">
        <div className="flex flex-col items-center -mt-8">
          <div className="w-16 h-16 rounded-full bg-white border-4 border-white flex items-center justify-center text-3xl shadow-lg">
            {currentUser.avatar}
          </div>
          <h3 className="mt-2 font-semibold text-gray-900 text-center">{currentUser.name}</h3>
          <p className="text-xs text-gray-600 text-center mt-0.5">{currentUser.title}</p>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-200">
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-600">Profile viewers</span>
            <span className="text-blue-600 font-semibold">142</span>
          </div>
          <div className="flex justify-between items-center text-xs mt-2">
            <span className="text-gray-600">Post impressions</span>
            <span className="text-blue-600 font-semibold">1,284</span>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-200">
          <button className="text-xs text-gray-700 hover:underline font-medium">
            My items
          </button>
        </div>
      </div>
    </div>
  );
}
