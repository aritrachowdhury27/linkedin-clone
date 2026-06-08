# 🚀 GitHub Upload - Quick Command Reference

Copy and paste these commands to upload your project to GitHub.

---

## ⚡ FASTEST WAY (3 Steps)

### Step 1: Prepare Locally
```bash
git init
git add .
git commit -m "Initial commit: ProNetwork LinkedIn clone"
```

### Step 2: Create GitHub Repo
1. Go to: https://github.com/new
2. Repository name: `pronetwork-linkedin-clone`
3. Click "Create repository"

### Step 3: Push Code
```bash
# ⚠️ Replace YOUR_USERNAME with your actual GitHub username!
git remote add origin https://github.com/YOUR_USERNAME/pronetwork-linkedin-clone.git
git branch -M main
git push -u origin main
```

**Done! 🎉**

---

## 📋 ALL COMMANDS (Step by Step)

### 1️⃣ Initial Setup (First Time Only)
```bash
# Navigate to project folder
cd path/to/pronetwork-linkedin-clone

# Initialize git
git init

# Configure git (if not done globally)
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### 2️⃣ First Commit
```bash
# Check what files will be added
git status

# Add all files
git add .

# Verify files are staged
git status

# Create initial commit
git commit -m "Initial commit: ProNetwork LinkedIn clone"

# Verify commit was created
git log --oneline
```

### 3️⃣ Connect to GitHub
```bash
# Add remote repository (replace YOUR_USERNAME!)
git remote add origin https://github.com/YOUR_USERNAME/pronetwork-linkedin-clone.git

# Verify remote was added
git remote -v

# Should show:
# origin  https://github.com/YOUR_USERNAME/pronetwork-linkedin-clone.git (fetch)
# origin  https://github.com/YOUR_USERNAME/pronetwork-linkedin-clone.git (push)
```

### 4️⃣ Push to GitHub
```bash
# Rename branch to main (if needed)
git branch -M main

# Push code to GitHub
git push -u origin main

# Enter your GitHub credentials if prompted
```

---

## 🔄 AFTER INITIAL UPLOAD (Making Updates)

### Making Changes
```bash
# 1. Make your code changes in files

# 2. Check what changed
git status

# 3. Stage changes
git add .
# Or stage specific files:
# git add src/App.tsx

# 4. Commit with descriptive message
git commit -m "Add new feature" 
# or
git commit -m "Fix bug in header component"
# or
git commit -m "Update documentation"

# 5. Push to GitHub
git push
```

### Common Update Commands
```bash
# Add all changes
git add .

# Add specific file
git add src/components/Header.tsx

# Add all files in directory
git add src/components/

# Commit with message
git commit -m "Your descriptive message"

# Push to GitHub
git push

# See status
git status

# See what changed
git diff

# See commit history
git log --oneline
```

---

## 🔍 USEFUL GIT COMMANDS

### Check Status
```bash
# See current status
git status

# See staged files
git diff --cached

# See unstaged changes
git diff

# See commit history
git log --oneline --graph --all

# See last 5 commits
git log -5 --oneline
```

### Branch Management
```bash
# See current branch
git branch

# Create new branch
git checkout -b feature/new-feature

# Switch branch
git checkout main

# Delete branch
git branch -d feature/new-feature

# Push branch to GitHub
git push origin feature/new-feature
```

### Undo Changes
```bash
# Discard changes in file
git checkout -- filename.txt

# Unstage file
git reset HEAD filename.txt

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes) ⚠️ CAREFUL!
git reset --hard HEAD~1
```

### Pull Updates
```bash
# Get latest changes from GitHub
git pull

# Get latest without merging
git fetch

# Pull from specific branch
git pull origin main
```

---

## 🆘 TROUBLESHOOTING COMMANDS

### Problem: Push Rejected
```bash
# Pull first, then push
git pull --rebase origin main
git push
```

### Problem: Wrong Remote URL
```bash
# Remove remote
git remote remove origin

# Add correct remote
git remote add origin https://github.com/YOUR_USERNAME/pronetwork-linkedin-clone.git
```

### Problem: Wrong Branch Name
```bash
# Rename branch
git branch -m old-name new-name

# Rename current branch to main
git branch -M main
```

### Problem: Merge Conflicts
```bash
# See conflicted files
git status

# After fixing conflicts:
git add .
git commit -m "Resolve merge conflicts"
git push
```

### Problem: Want to Start Over
```bash
# Delete .git folder
rm -rf .git

# Start fresh
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

---

## 🎯 GITHUB PAGES DEPLOYMENT

### Enable GitHub Pages
```bash
# Your site will automatically deploy via GitHub Actions
# No commands needed - just push to main branch!
# Check: Repository Settings → Pages
```

### If You Need Base Path
```bash
# Edit vite.config.ts and add:
# base: '/pronetwork-linkedin-clone/'

# Then commit and push:
git add vite.config.ts
git commit -m "Configure base path for GitHub Pages"
git push
```

---

## 📝 GOOD COMMIT MESSAGE EXAMPLES

```bash
# Feature
git commit -m "feat: add dark mode toggle"
git commit -m "feat: implement user profile editing"

# Bug Fix
git commit -m "fix: resolve header overflow on mobile"
git commit -m "fix: correct TypeScript type errors"

# Documentation
git commit -m "docs: update README with installation steps"
git commit -m "docs: add code comments to Header component"

# Style
git commit -m "style: format code with prettier"
git commit -m "style: improve button hover effects"

# Refactor
git commit -m "refactor: extract PostCard into separate component"
git commit -m "refactor: simplify navigation logic"

# Test
git commit -m "test: add unit tests for Header component"

# Chore
git commit -m "chore: update dependencies"
git commit -m "chore: add .gitignore rules"
```

---

## 🔐 USING SSH INSTEAD OF HTTPS

### Setup SSH Key
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Copy public key
cat ~/.ssh/id_ed25519.pub

# Add to GitHub: Settings → SSH Keys → New SSH Key
```

### Use SSH Remote
```bash
# Add SSH remote instead of HTTPS
git remote add origin git@github.com:YOUR_USERNAME/pronetwork-linkedin-clone.git

# Or change existing remote
git remote set-url origin git@github.com:YOUR_USERNAME/pronetwork-linkedin-clone.git
```

---

## ⚡ QUICK ALIASES (Optional)

Add to `~/.gitconfig`:

```ini
[alias]
    st = status
    co = checkout
    br = branch
    ci = commit
    cm = commit -m
    ca = commit -am
    ps = push
    pl = pull
    lg = log --oneline --graph --all
```

Then use:
```bash
git st        # instead of git status
git cm "msg"  # instead of git commit -m "msg"
git ps        # instead of git push
```

---

## 📚 LEARN MORE

- Git Handbook: https://guides.github.com/introduction/git-handbook/
- GitHub Docs: https://docs.github.com
- Git Cheat Sheet: https://education.github.com/git-cheat-sheet-education.pdf

---

## ✅ FINAL CHECKLIST

Before running commands:

- [ ] I'm in the correct project directory
- [ ] I've replaced YOUR_USERNAME with my GitHub username
- [ ] I've created the repository on GitHub
- [ ] I understand what each command does

---

## 🎉 SUCCESS VERIFICATION

After pushing, verify:

```bash
# 1. Check remote
git remote -v

# 2. Check branch
git branch

# 3. Check last commit
git log -1

# 4. Visit GitHub repository
# https://github.com/YOUR_USERNAME/pronetwork-linkedin-clone
```

---

**Happy coding! 🚀**

Save this file for quick reference whenever you need to work with Git and GitHub!
