# Youcef Morsi — Portfolio

Next.js (App Router) + TypeScript. No UI dependencies.

## Run locally
```bash
npm install
npm run dev     # http://localhost:3000
```

## Push to GitHub
```bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/MorsiYoucef/portfolio.git
git push -u origin main
```
Deploy free on Vercel: import the repo at vercel.com/new.

## Edit content
- `components/data.ts` — projects, experience, skills
- `public/cv.pdf` — the "Download CV" file
- Project images: drop files in `public/projects/` and set `image` in data.ts
- Hero variant / grid overlay: props on `<Portfolio />` in `app/page.tsx`
