# ProNetwork - Professional Networking Platform

A LinkedIn-like professional networking platform built with React, TypeScript, Vite, and Tailwind CSS.

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

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

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

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
