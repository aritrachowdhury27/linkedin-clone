# GitHub Setup Guide

This guide will help you set up and deploy ProNetwork to GitHub.

## 📦 Step 1: Prepare Your Local Repository

1. **Initialize Git** (if not already done)
   ```bash
   git init
   ```

2. **Add all files to staging**
   ```bash
   git add .
   ```

3. **Create your first commit**
   ```bash
   git commit -m "Initial commit: ProNetwork LinkedIn clone"
   ```

## 🔗 Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **+** icon in the top right and select **New repository**
3. Fill in the details:
   - **Repository name**: `pronetwork-linkedin-clone` (or your preferred name)
   - **Description**: "A professional networking platform inspired by LinkedIn"
   - **Visibility**: Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **Create repository**

## 🚀 Step 3: Push to GitHub

After creating the repository, run these commands in your terminal:

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/pronetwork-linkedin-clone.git

# Push your code
git push -u origin main
```

> **Note**: Replace `YOUR_USERNAME` with your actual GitHub username

If you're using `master` instead of `main`:
```bash
git branch -M main
git push -u origin main
```

## 🌐 Step 4: Enable GitHub Pages (Optional)

To deploy your app to GitHub Pages:

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, the GitHub Action should be automatically selected
5. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically deploy your app

Your app will be available at: `https://YOUR_USERNAME.github.io/pronetwork-linkedin-clone/`

### Update Vite Config for GitHub Pages

If deploying to GitHub Pages, update `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/pronetwork-linkedin-clone/', // Add this line with your repo name
})
```

Then commit and push:
```bash
git add vite.config.ts
git commit -m "Configure base path for GitHub Pages"
git push
```

## 📝 Step 5: Update Repository Information

1. **Update package.json** with your GitHub username:
   ```json
   "repository": {
     "type": "git",
     "url": "https://github.com/YOUR_USERNAME/pronetwork-linkedin-clone.git"
   },
   "bugs": {
     "url": "https://github.com/YOUR_USERNAME/pronetwork-linkedin-clone/issues"
   },
   "homepage": "https://github.com/YOUR_USERNAME/pronetwork-linkedin-clone#readme"
   ```

2. **Update README.md** with your information:
   - Replace demo link
   - Add your name to author section
   - Update repository URLs

3. **Commit the changes**:
   ```bash
   git add package.json README.md
   git commit -m "Update repository information"
   git push
   ```

## 🏷️ Step 6: Add Topics to Your Repository

Make your repository more discoverable:

1. Go to your repository on GitHub
2. Click the **⚙️ icon** next to "About"
3. Add topics: `react`, `typescript`, `vite`, `tailwindcss`, `linkedin-clone`, `social-network`
4. Save changes

## 📊 Step 7: Add Repository Description

1. Go to your repository on GitHub
2. Click the **⚙️ icon** next to "About"
3. Add description: "A professional networking platform inspired by LinkedIn, built with React, TypeScript, Vite, and Tailwind CSS"
4. Add website URL (if using GitHub Pages)
5. Save changes

## 🔐 Step 8: Protect Your Main Branch (Optional)

For collaborative projects:

1. Go to **Settings** → **Branches**
2. Click **Add rule**
3. Branch name pattern: `main`
4. Enable:
   - ✅ Require pull request reviews before merging
   - ✅ Require status checks to pass before merging
5. Save changes

## 🎉 Step 9: Verify Everything Works

1. **Check GitHub Actions** - Go to the Actions tab and verify the workflow runs successfully
2. **View your deployed site** (if using GitHub Pages)
3. **Test the build locally**:
   ```bash
   npm run build
   npm run preview
   ```

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

## 🆘 Troubleshooting

### Issue: Push rejected
```bash
git pull origin main --rebase
git push
```

### Issue: GitHub Pages not working
- Check that GitHub Actions workflow completed successfully
- Verify the `base` path in `vite.config.ts` matches your repository name
- Check repository Settings → Pages

### Issue: Build fails
```bash
npm ci
npm run build
```
Check the error messages and ensure all dependencies are installed correctly.

---

## 📋 Quick Reference Commands

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/pronetwork-linkedin-clone.git

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for type errors
npm run lint

# Add and commit changes
git add .
git commit -m "Your commit message"
git push
```

---

Good luck with your GitHub repository! 🚀
