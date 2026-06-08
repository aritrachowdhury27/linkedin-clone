# ⚡ Quick Start Guide

Get ProNetwork up and running in 5 minutes!

## 🎯 For Local Development

### 1️⃣ Prerequisites
```bash
# Check if you have Node.js (need v18+)
node --version

# Check if you have npm (need v9+)
npm --version
```

Don't have Node.js? Download from [nodejs.org](https://nodejs.org)

### 2️⃣ Install & Run
```bash
# Install dependencies (only needed once)
npm install

# Start development server
npm run dev
```

### 3️⃣ Open Browser
Navigate to: **http://localhost:5173**

That's it! 🎉

---

## 🌐 For GitHub Upload

### 1️⃣ Update Your Info
Edit `package.json`:
```json
"repository": {
  "url": "https://github.com/YOUR_USERNAME/pronetwork-linkedin-clone.git"
}
```

### 2️⃣ Initialize Git
```bash
git init
git add .
git commit -m "Initial commit"
```

### 3️⃣ Create GitHub Repo
1. Go to [github.com](https://github.com)
2. Click **+** → **New repository**
3. Name it `pronetwork-linkedin-clone`
4. **Don't** initialize with README
5. Click **Create**

### 4️⃣ Push to GitHub
```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/pronetwork-linkedin-clone.git
git branch -M main
git push -u origin main
```

Done! Your project is now on GitHub! 🚀

---

## 📱 Key Features to Try

Once running, explore:

1. **🏠 Home Feed**
   - View posts
   - Click like/comment/share buttons
   - Check sidebar stats

2. **👥 Network**
   - Browse connections
   - See people you may know
   - Try connection buttons

3. **💼 Jobs**
   - Browse job listings
   - Use filters
   - Click apply buttons

4. **💬 Messaging**
   - View conversations
   - See chat interface
   - Type in message box

5. **🔔 Notifications**
   - Check different notification types
   - See unread indicators

6. **👤 Profile**
   - Click "Me" in header
   - View complete profile
   - See experience & education

---

## 🔧 Common Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Type checking
npm run lint         # Check for TypeScript errors

# Git
git status           # Check what changed
git add .            # Stage all changes
git commit -m "msg"  # Commit changes
git push             # Push to GitHub
```

---

## 🆘 Troubleshooting

### Port already in use?
```bash
# Vite will automatically try port 5174, 5175, etc.
# Or manually specify port:
npm run dev -- --port 3000
```

### Dependencies won't install?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build fails?
```bash
# Check for TypeScript errors
npm run lint

# Clean install
npm ci
npm run build
```

### Can't push to GitHub?
```bash
# Check remote is set
git remote -v

# Try with token/SSH instead
# Use HTTPS: https://github.com/USERNAME/REPO.git
# Or set up SSH: git@github.com:USERNAME/REPO.git
```

---

## 📚 Need More Help?

- **Detailed setup**: See [GITHUB_SETUP.md](GITHUB_SETUP.md)
- **Contributing**: See [CONTRIBUTING.md](CONTRIBUTING.md)
- **Full docs**: See [README.md](README.md)
- **File structure**: See [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)

---

## ✅ Success Checklist

Development:
- [x] Node.js installed
- [x] Dependencies installed
- [x] Dev server running
- [x] App opens in browser

GitHub:
- [ ] Repository created
- [ ] Code pushed
- [ ] README visible
- [ ] All files uploaded

---

**You're all set! Start building! 💪**

Questions? Open an issue on GitHub!
