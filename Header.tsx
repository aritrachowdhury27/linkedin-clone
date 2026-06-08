

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'network', label: 'My Network', icon: '👥' },
    { id: 'jobs', label: 'Jobs', icon: '💼' },
    { id: 'messaging', label: 'Messaging', icon: '💬' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-lg">
              in
            </div>
            <input
              type="text"
              placeholder="Search"
              className="hidden md:block w-64 px-3 py-1.5 bg-blue-50 border-0 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center px-4 py-2 text-xs font-medium transition-colors ${
                  activeTab === item.id
                    ? 'text-gray-900 border-b-2 border-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="text-lg mb-0.5">{item.icon}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            ))}
            <div className="pl-4 ml-4 border-l border-gray-200">
              <button
                onClick={() => setActiveTab('profile')}
                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm">
                  👩‍💼
                </div>
                <div className="hidden md:block">
                  <div className="text-xs font-medium text-gray-900">Me</div>
                </div>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
