import ProfileCard from '../components/ProfileCard';
import CreatePost from '../components/CreatePost';
import PostCard from '../components/PostCard';
import { posts } from '../data/mockData';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-3">
          <ProfileCard />
          <div className="mt-4 bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="text-xs font-semibold text-blue-700 mb-3">RECENT</h3>
            <div className="space-y-2">
              {['Product Management', 'UX Design', 'Tech Startups'].map((item, i) => (
                <div key={i} className="text-sm text-gray-700 hover:bg-gray-50 px-2 py-1 rounded cursor-pointer">
                  # {item}
                </div>
              ))}
            </div>
            <h3 className="text-xs font-semibold text-blue-700 mb-3 mt-4">GROUPS</h3>
            <div className="space-y-2">
              {['Product Managers Network', 'Tech Leaders'].map((item, i) => (
                <div key={i} className="text-sm text-gray-700 hover:bg-gray-50 px-2 py-1 rounded cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-6 space-y-4">
          <CreatePost />
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-4">LinkedIn News</h3>
            <div className="space-y-4">
              {[
                { title: 'Tech layoffs continue in 2024', readers: '1,234' },
                { title: 'AI reshapes the workplace', readers: '987' },
                { title: 'Remote work trends', readers: '756' },
                { title: 'Startup funding rebounds', readers: '543' },
                { title: 'Skills in high demand', readers: '432' },
              ].map((news, i) => (
                <div key={i} className="cursor-pointer hover:bg-gray-50 px-2 py-1 rounded">
                  <p className="text-sm font-medium text-gray-900">• {news.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{news.readers} readers</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-4">Today's most viewed courses</h3>
            <div className="space-y-3">
              {[
                'Leadership Strategies',
                'Data Analysis Fundamentals',
                'Public Speaking Mastery',
              ].map((course, i) => (
                <div key={i} className="flex items-start space-x-2 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded">
                  <div className="w-8 h-8 bg-gray-200 rounded flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{course}</p>
                    <p className="text-xs text-gray-500">1h 30m</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
