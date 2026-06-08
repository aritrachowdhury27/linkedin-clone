export default function Notifications() {
  const notifications = [
    {
      id: '1',
      type: 'connection',
      actor: 'Emily Rodriguez',
      action: 'accepted your connection request',
      time: '2 hours ago',
      avatar: '👩‍🎨',
      unread: true,
    },
    {
      id: '2',
      type: 'like',
      actor: 'Michael Chen',
      action: 'liked your post',
      time: '4 hours ago',
      avatar: '👨‍💼',
      unread: true,
    },
    {
      id: '3',
      type: 'comment',
      actor: 'David Kim',
      action: 'commented on your article',
      content: 'Great insights! This is very helpful.',
      time: '6 hours ago',
      avatar: '👨‍💻',
      unread: true,
    },
    {
      id: '4',
      type: 'profile',
      actor: 'Jessica Lee',
      action: 'viewed your profile',
      time: '1 day ago',
      avatar: '👩‍🎨',
      unread: false,
    },
    {
      id: '5',
      type: 'job',
      actor: 'TechCorp',
      action: 'posted a job that matches your profile',
      content: 'Senior Product Manager',
      time: '1 day ago',
      avatar: '💼',
      unread: false,
    },
    {
      id: '6',
      type: 'endorsement',
      actor: 'Robert Martinez',
      action: 'endorsed you for Product Management',
      time: '2 days ago',
      avatar: '👨‍🔧',
      unread: false,
    },
    {
      id: '7',
      type: 'share',
      actor: 'Lisa Anderson',
      action: 'shared your post',
      time: '3 days ago',
      avatar: '👩‍💼',
      unread: false,
    },
    {
      id: '8',
      type: 'mention',
      actor: 'Chris Brown',
      action: 'mentioned you in a comment',
      content: 'Check out what @SarahJohnson said about this!',
      time: '4 days ago',
      avatar: '👨‍💼',
      unread: false,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              Mark all as read
            </button>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 cursor-pointer transition-colors ${
                notification.unread ? 'bg-blue-50 hover:bg-blue-100' : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl flex-shrink-0">
                  {notification.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">
                        <span className="font-semibold">{notification.actor}</span>{' '}
                        <span className="text-gray-600">{notification.action}</span>
                      </p>
                      {notification.content && (
                        <p className="text-sm text-gray-700 mt-1 bg-gray-100 px-3 py-2 rounded">
                          {notification.content}
                        </p>
                      )}
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                    {notification.unread && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full ml-2 flex-shrink-0"></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-200 text-center">
          <button className="text-sm text-gray-600 hover:text-gray-900 font-medium">
            Show all notifications
          </button>
        </div>
      </div>
    </div>
  );
}
