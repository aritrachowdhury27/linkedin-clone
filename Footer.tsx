export default function Footer() {
  const footerLinks = [
    ['About', 'Careers', 'Talent Solutions', 'Marketing Solutions'],
    ['Community Guidelines', 'Privacy & Terms', 'Mobile App', 'Help Center'],
  ];

  return (
    <footer className="bg-white border-t border-gray-200 mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-600 mb-4">
          {footerLinks.flat().map((link, index) => (
            <a
              key={index}
              href="#"
              className="hover:text-blue-600 hover:underline"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
              in
            </div>
            <span className="text-sm text-gray-600 font-semibold">
              ProNetwork Corporation © 2024
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
