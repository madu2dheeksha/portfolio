# Madu Dheeksha – Marketing Portfolio

This is your marketing portfolio, rebuilt as a website you own. It uses React, Vite and TypeScript and does not depend on Butternut or any other website builder. It can be hosted on Vercel's free (Hobby) plan.

## What's inside

```
portfolio/
├── public/
│   ├── images/
│   │   ├── outcomes/                 7 Key Learning Outcomes images (optimised WebP)
│   │   └── profile-placeholder.svg   stand-in for your profile photo (see below)
│   ├── resume/                       put resume.pdf here (optional)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── data/content.ts   ← ALL text, links and image paths (edit this file)
│   ├── sections/         Navbar, Hero, About, Experience, Contributions,
│   │                     LearningOutcomes, Contact, Footer
│   ├── components/       Icons, Lightbox (image preview)
│   ├── hooks/useReveal.ts  scroll animations
│   ├── styles/           global.css (theme colours/fonts), sections.css
│   ├── App.tsx
│   └── main.tsx
├── original-assets/      full-size originals of the 7 images (not used by the site)
├── index.html            page title, description and social-preview tags
├── package.json
├── vite.config.ts
├── vercel.json
└── tsconfig.json
```

## Run it on your computer

You need Node.js 18 or newer. Download it from https://nodejs.org.

```bash
npm install
npm run dev        # local preview at http://localhost:5173
```

To test the production version before you deploy:

```bash
npm run build      # creates the dist/ folder
npm run preview    # serves dist/ at http://localhost:4173
```

## Publish it free on Vercel

1. Create a new GitHub repository and upload this folder. You can drag the files in on github.com, or use:
   ```bash
   git init
   git add .
   git commit -m "My portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to https://vercel.com and sign up with GitHub. The Hobby plan is free.
3. Click **Add New… → Project** and import the repository.
4. Vercel detects **Vite** automatically. The build command is `npm run build` and the output folder is `dist` (these are also set in `vercel.json`). Click **Deploy**.
5. Your site goes live at `https://<project-name>.vercel.app`. You can add a custom domain later under **Settings → Domains**.

After that, every time you push to GitHub, Vercel redeploys the site automatically.

## Common edits

**Your profile photo.** Save your photo as `public/images/profile.webp`. JPG or PNG work too. A portrait (tall) photo with a 3:4 ratio works best. Then open `src/data/content.ts` and change:
```ts
profileImage: '/images/profile.webp',
```

**Add a resume download button.** Put your PDF at `public/resume/resume.pdf`, then in `src/data/content.ts` set:
```ts
export const resumeUrl = '/resume/resume.pdf';
```
A **Download Resume** button then appears next to "View My Experience".

**Change text, links or tools.** Everything is in `src/data/content.ts`. This covers your email, LinkedIn, About Me text, tools list and each outcome card.

**Swap an outcome image.** Replace the file in `public/images/outcomes/` and keep the same file name, or point the `image` field in `content.ts` at a new file.

**Colours and fonts.** These are in `src/styles/global.css`, in the `:root` block. They are the same values your Butternut theme used.

## Features

- Smooth-scrolling navigation in the top menu, the footer and the "View My Experience" button
- On phones, the top menu collapses into a menu button and closes again after you tap a link
- Clicking any Key Learning Outcomes image opens a full-screen preview. You can move between images with the arrows, the arrow keys or a swipe, and close it with Esc.
- Scroll-in animations like the original's, which are switched off for visitors who turn off motion in their device settings
- Email links open the visitor's mail app; LinkedIn links open in a new tab
- Back to Top button
- Works on desktops, laptops, tablets, Android phones and iPhones (tested down to 320px wide)
- Page title, description and social-sharing tags are set in `index.html`
