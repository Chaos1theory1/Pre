# BiotechAgro Vercel fix notes

This project had two Vercel deployment problems:

1. The frontend calls `/api/content` to load the public text, products, services and logo, but the project only had `server.ts` as an Express server. Vercel does not run `server.ts` as a permanent server for a Vite deployment.
2. Product images used `/src/assets/images/...` URLs. Those work in development but are not public URLs in a production Vite build.

## What was changed

- Added `api/[...path].ts` as a Vercel catch-all API function.
- Changed `package.json` build script to `vite build` only.
- Added `vercel.json` with the Vite framework/output settings.
- Copied images from `src/assets/images` to `public/assets/images`.
- Replaced image URLs from `/src/assets/images/...` to `/assets/images/...` in `index.html`, `src/App.tsx`, and `src/db/db.json`.

## Vercel settings

Use:

- Framework Preset: Vite
- Build Command: npm run build
- Output Directory: dist
- Node.js Version: 22.x

## Environment variables

Add these if you use email/admin/AI features:

- GEMINI_API_KEY
- SESSION_SECRET
- SMTP_HOST
- SMTP_PORT
- SMTP_USER
- SMTP_PASS

## Important

The included API seeds data from `src/db/db.json` and writes changes to `/tmp` on Vercel. This makes the website load correctly, but admin edits may reset after redeploy/cold start. For permanent admin edits and image uploads, connect the app to Vercel Blob or Supabase.
