# Zhonghan Qin’s Digital Garden

Modern Astro 5 site that showcases research highlights, photography collections, custom tools, and a Markdown-native blog. Fully static and GitHub Pages friendly.

## ✨ Features

- Landing page with personal intro, paper highlights, photo preview, blog feed, and toolbox
- Photography hub powered by folders-as-tags—drop images in `public/photography/<tag>/`
- Content collections for Markdown/MDX posts plus RSS and sitemap
- Data-driven profile/paper/tool sections via `src/data/`
- Responsive layout with cohesive typography and glassmorphism accents

## 🚀 Getting Started

1. **Requirements**
   - Node.js ≥ 20.3 (20 LTS recommended), npm ≥ 9.6
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Local development**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:4321`
4. **Production build**
   ```bash
   npm run build
   ```
   Output lands in `dist/` and can be deployed to GitHub Pages or any static host.

## 📁 Project Structure

```text
public/
  photography/     # folders = tags; place images here
src/
  components/      # shared UI such as header & footer
  content/blog/    # Markdown/MDX blog posts
  data/            # profile, papers, toolbox metadata
  layouts/         # reusable layouts (blog post)
  pages/           # route-level Astro files
  styles/          # global styles
```

## 📝 Blogging Guide

1. Copy any sample inside `src/content/blog/` (e.g., `first-post.md`).
2. Update frontmatter:
   ```yaml
   ---
   title: Post title
   description: Short summary
   pubDate: 2025-11-17
   updatedDate: 2025-11-20 # optional
   heroImage: ../../assets/cover.jpg # optional
   ---
   ```
3. Write the body in Markdown/MDX. Save + commit to publish.

## 📷 Managing Photography

1. Create a folder under `public/photography/`—the folder name becomes the tag.
2. Add images (`jpg`, `jpeg`, `png`, `webp`, `gif`, `avif`) to that folder.
3. Rebuild or refresh; the gallery and filters update automatically.

Example:
```
public/photography/
  street/
    shanghai-night.jpg
  nature/
    yunnan-lake.webp
```

## 🔧 Data Configuration

- Profile: `src/data/profile.ts`
- Papers: `src/data/papers.ts`
- Tools: `src/data/tools.ts`

Edit these TypeScript objects to refresh content globally.

## 🚢 Deploying

1. Run `npm run build`.
2. Deploy the contents of `dist/` to GitHub Pages (e.g., via `gh-pages` branch or GitHub Actions).
3. Optional preview:
   ```bash
   npm run preview
   ```

## ❓ FAQ

- **Build fails about Node version** → upgrade Node.js to ≥ 20.3.
- **Photography page is empty** → ensure at least one folder with supported image files exists in `public/photography/`.
- **Blog post missing** → verify frontmatter `pubDate` is a valid date string.

Feel free to fork, customize, and share your own digital garden! 🚀
