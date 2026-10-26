# Lei Marvin Sanone | Developer Portfolio

My personal portfolio website. I'm an aspiring full-stack developer, focused on backend development, and I'm still learning and improving with every project.

**Live site:** https://lei-sportfolio.vercel.app/

## Sections

- Home with a typing effect and profile photo
- About
- Skills
- Projects, with a category filter and screenshots on hover
- Certificates
- Experience and education
- Contact form

## Built with

- React
- Vite
- Tailwind CSS
- Lucide React (icons)
- Formspree (contact form)
- Vercel (hosting)

## Run it locally

```bash
npm install
npm run dev
```

Then open the address shown in the terminal, usually http://localhost:5173.

To check a production build:

```bash
npm run build
npm run preview
```

## Updating the content

All the content is in `src/data/`:

| File | What it controls |
| --- | --- |
| `site.js` | Name, links, email, intro, About text, contact form endpoint |
| `skills.js` | Skill groups and badges |
| `projects.js` | Project cards and screenshots |
| `certificates.js` | Certificates |
| `experience.js` | Education and experience timeline |

Images go in `public/images/` and are referenced in the data files as `/images/...`.

## Deployment

The site is deployed on Vercel. Every push to the `main` branch redeploys it automatically.

## Contact

- GitHub: https://github.com/LeiMarvinSanone
- Email: leimarvin.sanone@sorsu.edu.ph