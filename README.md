# 🌸 Himmelblau Website

This is the **Himmelblau** flower shop website, built with **SvelteKit** and integrated with **Sanity CMS** for dynamic content management.

---

## 🚀 Project Overview

- **Framework**: SvelteKit (Static Site)
- **CMS**: Sanity.io (for opening hours, events, and image gallery)
- **Hosting**: GitHub Pages
- **Deployment**: Automated via GitHub Actions
- **Content Updates**: Managed through [Sanity Studio](https://himmelblau-cms.sanity.studio)

---

## 📌 **Setup & Installation**

### **1️⃣ Install Dependencies**

```bash
cd ~/code/himmelblau
npm install
```

### **2️⃣ a) Start Local Development Server (while not working on CMS)**

```bash
npm run dev
```

### **2️⃣ b) Start Local Development Server & disable caching while working on CMS**

```bash
WORKING_ON_CMS=true npm run dev
```

- Open [http://localhost:5173](http://localhost:5173) in your browser.
- The site will load with the latest Sanity content.

---

## 🖼️ **Fetching Content from Sanity**

### **Content Managed in Sanity Studio**

- **Öffnungszeiten (Opening Hours)**
- **Events & Announcements**
- **Image Gallery**

### **Update Content (No Redeploy Needed!)**

1. Go to [https://himmelblau-cms.sanity.studio](https://himmelblau-cms.sanity.studio).
2. Edit the content and click **Publish**.
3. The website will automatically fetch updated content.

---

## 🔄 **Building & Deploying**

### **Build for Production**

```bash
npm run build
```

This generates static files in `build/`.

### **Deploy to GitHub Pages**

Deployment is handled automatically via **GitHub Actions** whenever changes are pushed to `main`.

To trigger a manual deployment:

```bash
git push origin main
```

---

## 🌍 **Fixing CORS Issues (If Content Doesn't Load)**

If the site can’t fetch data from Sanity:

1. Go to [Sanity API Settings](https://www.sanity.io/manage).
2. Under **CORS Origins**, make sure this is added:
   ```
   https://your-github-username.github.io
   ```
3. Enable **"Allow credentials"** if an API token is used.
4. Save & refresh the site.

---

## ⚡ **Common Commands**

| Command           | Description                     |
| ----------------- | ------------------------------- |
| `npm install`     | Install dependencies.           |
| `npm run dev`     | Start local development server. |
| `npm run build`   | Build for production.           |
| `npm run preview` | Preview the production build.   |

---

## ❓ **Need Help?**

- **Check the Console** (`F12 → Console`) if something isn’t loading.
- **Sanity Studio Issues?** Try redeploying:
  ```bash
  cd ~/code/himmelblau-cms
  npm run deploy
  ```
- **Deployment Issues?** Check GitHub Actions logs.

🚀 **Happy coding & flower magic!** 🌷✨
