# 📁 Project Structure

This document outlines the complete file structure of the ProNetwork project.

```
pronetwork-linkedin-clone/
│
├── .github/                          # GitHub-specific files
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md            # Bug report template
│   │   └── feature_request.md       # Feature request template
│   ├── workflows/
│   │   └── deploy.yml               # GitHub Actions deployment workflow
│   └── pull_request_template.md     # PR template
│
├── dist/                             # Build output (generated, not in git)
│   └── index.html                   # Production build
│
├── node_modules/                     # Dependencies (not in git)
│
├── public/                           # Public static assets
│   └── (place public images here)
│
├── src/                              # Source code
│   ├── components/                   # Reusable UI components
│   │   ├── ConnectionCard.tsx       # Connection/user card component
│   │   ├── CreatePost.tsx           # Post creation component
│   │   ├── Footer.tsx               # App footer
│   │   ├── Header.tsx               # Navigation header
│   │   ├── JobCard.tsx              # Job listing card
│   │   ├── PostCard.tsx             # Feed post card
│   │   └── ProfileCard.tsx          # Sidebar profile card
│   │
│   ├── data/                         # Mock data and constants
│   │   └── mockData.ts              # Sample data for all features
│   │
│   ├── pages/                        # Page-level components
│   │   ├── Home.tsx                 # Home feed page
│   │   ├── Jobs.tsx                 # Jobs page
│   │   ├── Messaging.tsx            # Messaging/chat page
│   │   ├── Network.tsx              # Network/connections page
│   │   ├── Notifications.tsx        # Notifications page
│   │   └── Profile.tsx              # User profile page
│   │
│   ├── utils/                        # Utility functions
│   │   └── cn.ts                    # className utility
│   │
│   ├── App.tsx                       # Main app component & routing
│   ├── index.css                     # Global styles
│   ├── main.tsx                      # App entry point
│   └── types.ts                      # TypeScript type definitions
│
├── .editorconfig                     # Editor configuration
├── .gitignore                        # Git ignore rules
├── .nvmrc                            # Node version specification
├── CONTRIBUTING.md                   # Contribution guidelines
├── DEPLOYMENT_CHECKLIST.md          # Deployment checklist
├── GITHUB_SETUP.md                  # GitHub setup guide
├── LICENSE                           # MIT License
├── PROJECT_STRUCTURE.md             # This file
├── README.md                         # Project documentation
├── index.html                        # HTML entry point
├── package.json                      # Dependencies & scripts
├── package-lock.json                 # Dependency lock file
├── tsconfig.json                     # TypeScript configuration
└── vite.config.ts                    # Vite configuration
```

## 📂 Directory Descriptions

### `/src/components/`
Reusable UI components used across multiple pages:
- **ConnectionCard**: Displays user connection with avatar, title, and action buttons
- **CreatePost**: Interface for creating new posts with media options
- **Footer**: Application footer with links and branding
- **Header**: Top navigation bar with tabs and search
- **JobCard**: Job listing with company info and apply button
- **PostCard**: Social media post with likes, comments, shares
- **ProfileCard**: Sidebar profile summary with stats

### `/src/pages/`
Full-page components representing main sections:
- **Home**: Main feed with posts and sidebars
- **Jobs**: Job search and listings
- **Messaging**: Chat interface
- **Network**: Connections and networking
- **Notifications**: Activity notifications
- **Profile**: User profile with experience and education

### `/src/data/`
Mock data for demonstration:
- **mockData.ts**: Sample users, posts, jobs, connections, notifications

### `/src/utils/`
Helper functions and utilities:
- **cn.ts**: Tailwind className merging utility

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite build configuration |
| `tsconfig.json` | TypeScript compiler options |
| `package.json` | Project metadata and dependencies |
| `.editorconfig` | Code editor settings |
| `.gitignore` | Files to exclude from git |
| `.nvmrc` | Node.js version requirement |

## 📄 Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Main project documentation |
| `CONTRIBUTING.md` | How to contribute |
| `GITHUB_SETUP.md` | GitHub deployment guide |
| `DEPLOYMENT_CHECKLIST.md` | Pre-deployment checklist |
| `PROJECT_STRUCTURE.md` | This file |
| `LICENSE` | MIT license |

## 🎨 Asset Organization

### Images (Optional)
Create a `public/images/` directory for:
- User avatars
- Company logos
- Post images
- Banner images

### Icons
Currently using emoji for icons (zero dependencies)

## 📦 Build Output

When you run `npm run build`:
```
dist/
└── index.html         # Single-file production build
```

## 🔍 Key Files Explained

### `src/App.tsx`
- Main application component
- Manages navigation state
- Routes between different pages

### `src/types.ts`
- TypeScript interfaces for all data types
- User, Post, Job, Connection, etc.

### `src/main.tsx`
- Application entry point
- Renders App component to DOM

### `index.html`
- HTML template
- Loads main.tsx

### `package.json`
- Project dependencies
- NPM scripts
- Metadata

## 🚫 Files NOT in Git

These files are generated and excluded via `.gitignore`:
- `node_modules/` - Dependencies
- `dist/` - Build output
- `.env` - Environment variables
- `.DS_Store` - macOS system files
- Log files

## 📊 Component Relationships

```
App.tsx
│
├── Header (always visible)
│   └── Navigation tabs
│
├── Current Page (changes based on tab)
│   ├── Home
│   │   ├── ProfileCard
│   │   ├── CreatePost
│   │   └── PostCard (multiple)
│   │
│   ├── Network
│   │   └── ConnectionCard (multiple)
│   │
│   ├── Jobs
│   │   └── JobCard (multiple)
│   │
│   ├── Messaging
│   │   └── Chat interface
│   │
│   ├── Notifications
│   │   └── Notification list
│   │
│   └── Profile
│       └── Profile sections
│
└── Footer (always visible)
```

## 🎯 Adding New Features

To add a new feature:

1. **Create component**: `src/components/NewComponent.tsx`
2. **Add types**: Update `src/types.ts`
3. **Add mock data**: Update `src/data/mockData.ts`
4. **Use in page**: Import in relevant page component
5. **Test**: Build and verify

## 📱 Responsive Design

The application uses Tailwind CSS with mobile-first approach:
- Mobile: Base styles
- Tablet: `md:` prefix
- Desktop: `lg:` prefix

---

This structure keeps the codebase organized, maintainable, and scalable! 🎉
