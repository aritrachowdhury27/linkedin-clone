# ProNetwork - Professional Networking Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-purple)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-cyan)](https://tailwindcss.com/)

A LinkedIn-like professional networking platform built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Live Demo

[View Live Demo](https://yourusername.github.io/pronetwork-linkedin-clone) *(Update with your GitHub Pages URL)*

## 📸 Screenshots

### Home Feed
![Home Feed](./screenshots/home.png)

### Network Page
![Network](./screenshots/network.png)

### Jobs Page
![Jobs](./screenshots/jobs.png)

## Features

### 🏠 Home Feed
- Create posts with text, images, and media
- View and interact with posts from your network
- Like, comment, share, and send posts
- Sidebar with profile stats, recent topics, groups, and news

### 👥 My Network
- View and manage connections
- Accept or ignore connection invitations
- Discover people you may know based on mutual connections
- Search through your existing connections

### 💼 Jobs
- Browse recommended job listings
- Filter jobs by location, type, experience level, and work mode
- Apply to jobs directly
- Save jobs for later
- View job details including company, applicants, and descriptions

### 💬 Messaging
- Real-time messaging interface
- View conversation list with previews
- Send and receive messages
- Rich message composition with emoji and attachments

### 🔔 Notifications
- View all notifications in one place
- Different notification types: connections, likes, comments, profile views, job alerts, endorsements, shares, and mentions
- Mark notifications as read
- Unread notification indicators

### 👤 Profile
- Comprehensive professional profile
- Profile banner and avatar
- About section
- Experience history
- Education background
- Skills showcase
- Connection count and stats

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Emoji** - Icons and avatars (no external dependencies)

## Design Features

- Clean, professional LinkedIn-inspired UI
- Responsive design for mobile, tablet, and desktop
- Smooth transitions and hover effects
- Emoji-based icons for a friendly, accessible interface
- Color-coded sections and features
- Professional blue color scheme

## Mock Data

The application includes realistic mock data for:
- User profiles with experience and education
- Posts with engagement metrics
- Job listings from major tech companies
- Connections with mutual connection counts
- Notifications of various types
- Messaging conversations

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pronetwork-linkedin-clone.git
   cd pronetwork-linkedin-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔨 Building for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProfileCard.tsx
│   ├── PostCard.tsx
│   ├── CreatePost.tsx
│   ├── JobCard.tsx
│   └── ConnectionCard.tsx
├── pages/            # Main page components
│   ├── Home.tsx
│   ├── Network.tsx
│   ├── Jobs.tsx
│   ├── Messaging.tsx
│   ├── Notifications.tsx
│   └── Profile.tsx
├── data/             # Mock data
│   └── mockData.ts
├── types.ts          # TypeScript interfaces
├── App.tsx           # Main app component
└── main.tsx         # Entry point
```

## Features Implemented

✅ Full navigation system  
✅ Home feed with posts  
✅ Network management  
✅ Job search and listings  
✅ Messaging interface  
✅ Notifications center  
✅ User profile page  
✅ Responsive design  
✅ Professional UI/UX  
✅ Type-safe with TypeScript  

## Future Enhancements

- User authentication
- Real-time data with backend API
- Search functionality
- Advanced filtering
- Post creation modal
- Profile editing
- Connection requests
- Job applications tracking
- Message threading
- Notification preferences

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on how to submit pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspired by [LinkedIn](https://www.linkedin.com)
- Built with modern web technologies
- Icons using emoji for zero dependencies

## 📞 Contact

For questions or feedback, please open an issue on GitHub.

---

**Note**: This is a portfolio/demo project and is not affiliated with or endorsed by LinkedIn Corporation.

Built with ❤️ using React, TypeScript, and Tailwind CSS
