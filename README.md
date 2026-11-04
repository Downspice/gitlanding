# ✨ Downspice Git Landing Page & Profile Suite

> A modern, aesthetically pleasing developer landing page and GitHub profile suite designed for **Joseph Awer ([@Downspice](https://github.com/Downspice))** — Full-Stack TypeScript Engineer.

![Preview Banner](https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=24,15,36,20&height=200&section=header&text=Downspice%20Git%20Landing%20Page&fontSize=36&fontAlign=50&fontAlignY=45&fontColor=ffffff&desc=Interactive%20Web%20Portfolio%20+%20GitHub%20Profile%20README%20Template&descSize=16&descAlign=50&descAlignY=70)

---

## 🌟 What's Included

This repository delivers a complete two-in-one aesthetic presence for GitHub:

1. **🌐 Interactive Web Landing Page (`index.html`, `style.css`, `app.js`)**:
   - **Modern Aesthetic Design**: Built with OKLCH vibrant neon gradients, cyber-aurora mesh, glassmorphism cards, and refined responsive typography.
   - **Interactive Developer Console (CLI)**: Emulated terminal supporting commands like `about`, `skills`, `repos`, `stats`, `contact`, `readme`, and `clear`.
   - **Bento Grid Showcase**: Highlights core stack (TypeScript, React, Next.js, Node.js, PostgreSQL, Docker) with live language accents.
   - **Real-Time GitHub Stats Sync**: Automatically fetches live stats (repositories count, followers) directly from the GitHub API for `@Downspice`.
   - **Interactive Profile README Generator & 1-Click Copy**: Preview and copy your GitHub Profile README with toast feedback.
   - **Zero Build Step & Lightning Fast**: Pure vanilla HTML5, CSS3, and ES6+ — runs natively with zero dependencies.

2. **📄 GitHub Profile README (`profile-readme/README.md`)**:
   - Ready to drop straight into your `Downspice/Downspice` special repository to display directly on [github.com/Downspice](https://github.com/Downspice).
   - Features waving dynamic headers, animated SVG typewriter, Tokyo Night GitHub stats, streak tracker, tech shields, and featured repositories.

---

## 🚀 Quick Start / Local Preview

You can open and view the landing page immediately in any modern web browser:

### Option A: Using Python / Node static server (Recommended)
```bash
# Using Node.js (npx serve)
npx serve .

# Or using Python 3
python3 -m http.server 8080
```
Then visit `http://localhost:8080` in your browser.

### Option B: Open directly in your browser
On macOS:
```bash
open index.html
```

---

## 🚢 Deploy to GitHub Pages in 2 Minutes

To host this as your live web landing page on GitHub Pages (e.g. `https://downspice.github.io/gitlanding` or as your primary user site `https://downspice.github.io`):

1. **Initialize Git and Commit**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial aesthetic git landing page"
   ```

2. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/Downspice/gitlanding.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository **Settings** → **Pages** on GitHub.
   - Under **Build and deployment** → **Source**, select `Deploy from a branch`.
   - Under **Branch**, select `main` and folder `/ (root)`.
   - Click **Save**. Your site will be live within seconds!

---

## 👤 Setting Up Your GitHub Profile README

GitHub provides a special feature where creating a repository named exactly like your username (`Downspice/Downspice`) displays its `README.md` on your public GitHub profile (`github.com/Downspice`).

1. Go to [github.com/new](https://github.com/new).
2. Set the repository name to `Downspice`.
3. Ensure the repository is marked **Public**.
4. Check **Add a README file**.
5. Copy the contents of [`profile-readme/README.md`](profile-readme/README.md) into that `README.md` and commit changes.
6. Visit [github.com/Downspice](https://github.com/Downspice) to see your new aesthetic profile landing page!

---

## 📂 Project Structure

```text
gitlanding/
├── index.html            # Main semantic, responsive landing page
├── style.css             # Modern OKLCH color space, glassmorphism & Bento grid
├── app.js                # Typewriter, GitHub API sync, Interactive CLI & clipboard
├── README.md             # Project documentation & deployment guide
└── profile-readme/
    └── README.md         # Drop-in GitHub Profile README for Downspice/Downspice
```

---

## 🛠️ Tech Stack & Best Practices

- **Semantic HTML5**: Native accessible landmarks (`header`, `main`, `section`, `article`, `footer`).
- **Modern CSS**: OKLCH color space, `backdrop-filter`, `text-wrap: balance`, CSS custom properties, and `prefers-reduced-motion` compliance.
- **Modern JavaScript**: Asynchronous API fetching with graceful fallback, clipboard API, and keyboard accessible CLI.
- **Fast & Lightweight**: 0 npm dependencies required to run or deploy.
