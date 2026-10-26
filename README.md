# Developer Portfolio

A dark green, backend-focused developer portfolio built with React, Vite, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Customize your content

All content lives in `src/data/`. You should not need to touch the components.

| File | What it controls |
| --- | --- |
| `site.js` | Name, brand, title, intro, email, GitHub, LinkedIn, About text, optional form endpoint |
| `skills.js` | Skill categories and badges |
| `projects.js` | Project cards and filter categories |
| `certificates.js` | Certificate cards |
| `experience.js` | Education and experience timeline |

Everything marked as a placeholder should be replaced with your real information.

### Adding images

Put images in `public/` (for example `public/images/project1.png`) and reference them as `/images/project1.png` in the data files.
Certificates can point to an image in `public/` or to any PDF/verification URL.

### Making the contact form work

Without a backend, the form validates input and then opens the visitor's email app with the message prefilled.
To submit for real, create an endpoint with a form service (for example Formspree) and set `formEndpoint` in `src/data/site.js`.

## Deploy to Vercel

1. Push the project to a GitHub repository.
2. In Vercel, choose **Add New > Project** and import the repository.
3. Vercel detects Vite automatically (build command `npm run build`, output directory `dist`).
4. Click **Deploy**.

No `vercel.json` is needed because this is a single-page site with no client-side routing.
