import { Post } from '../types';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      {/* Author Info */}
      <div className="flex items-start space-x-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl flex-shrink-0">
          {post.author.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm text-gray-900">{post.author.name}</h3>
          <p className="text-xs text-gray-600">{post.author.title}</p>
          <p className="text-xs text-gray-500 mt-0.5">{post.timeAgo} • 🌐</p>
        </div>
        <button className="text-gray-500 hover:bg-gray-100 rounded p-1">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="mt-3">
        <p className="text-sm text-gray-900 whitespace-pre-line">{post.content}</p>
      </div>

      {/* Image */}
      {post.image && (
        <div className="mt-3 -mx-4">
          <img src={post.image} alt="Post" className="w-full object-cover max-h-96" />
        </div>
      )}

      {/* Engagement Stats */}
      <div className="flex items-center justify-between mt-3 text-xs text-gray-600 border-b border-gray-200 pb-3">
        <div className="flex items-center space-x-1">
          <span className="text-blue-600">👍</span>
          <span>{post.likes}</span>
        </div>
        <div className="flex items-center space-x-3">
          <span>{post.comments} comments</span>
          <span>{post.shares} shares</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-around mt-2">
        <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded transition-colors">
          <span>👍</span>
          <span className="text-sm font-medium">Like</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded transition-colors">
          <span>💬</span>
          <span className="text-sm font-medium">Comment</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded transition-colors">
          <span>🔄</span>
          <span className="text-sm font-medium">Repost</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded transition-colors">
          <span>📤</span>
          <span className="text-sm font-medium">Send</span>
        </button>
      </div>
    </div>
  );
}
