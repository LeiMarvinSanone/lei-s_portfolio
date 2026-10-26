// Edit this file to manage your projects.
// category must be one of the names in projectCategories below.
// image: path to a file in /public (for example '/images/project1.png'), or null for a placeholder.
// screenshots: list of image paths shown when hovering the card (tap on phones).
// mobile: true for phone apps, so tall screenshots fit without being cropped.
// github / demo: use null to hide a link.
// placeholder: set to true only for sample entries that are not real projects.

export const projectCategories = ['All', 'Full-Stack', 'Frontend']

export const projects = [
  {
    id: 1,
    title: 'Schedify',
    category: 'Full-Stack',
    description:
      'A scheduling app with separate student and administrator sections. I was the backend developer, building the server with Node.js, Express and MongoDB.',
    details:
      'Team project where I handled the backend with Node.js and Express, using MongoDB for data and JWT for authentication. The backend is hosted on Render and the app is built with Expo Application Services. The frontend uses React Native with Expo Router and TypeScript, with calendar and event views for students and a dashboard with schedule management for administrators.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'React Native', 'Expo', 'TypeScript'],
    image: null,
    screenshots: Array.from({ length: 9 }, (_, index) => `/images/projects/schedify/schedify${index + 1}.jpg`),
    mobile: true,
    github: 'https://github.com/LeiMarvinSanone/Schedify/tree/backend-dev/schedify-be',
    demo: null,
    placeholder: false,
  },
  {
    id: 2,
    title: 'PrepMate',
    category: 'Frontend',
    description:
      'A mobile checklist app for organizing the items you need for activities and events, with preset categories like Outdoor, Formal, School, Travel and Indoor, plus custom events.',
    details:
      'Features registration and login with Firebase Authentication, event management with categories, dates, notes and emoji, checklists with progress tracking, item suggestions based on usage history, reminders with local notifications, profile management and dark mode.',
    tech: ['React Native', 'Expo', 'Firebase', 'Firestore', 'JavaScript'],
    image: null,
    screenshots: Array.from({ length: 11 }, (_, index) => `/images/projects/prepmate/prepmate${index + 1}.jpg`),
    mobile: true,
    github: 'https://github.com/LeiMarvinSanone/Prepmate',
    demo: null,
    placeholder: false,
  },
  {
    id: 3,
    title: 'Smart City Solutions',
    category: 'Frontend',
    description:
      'A responsive static website about smart-city concepts, covering urban planning, transportation, IoT, smart grids and energy, and sustainability. This was a collaborative project and one of the first we uploaded to GitHub.',
    details:
      'Includes a hero carousel, a section for each smart-city topic, separate blog and detail pages, scroll animations, and a contact form handled by a small PHP script.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP'],
    image: null,
    screenshots: Array.from({ length: 10 }, (_, index) => `/images/projects/smart_city/smart_city${index + 1}.png`),
    github: 'https://github.com/LeiMarvinSanone/Smart-City-Solutions',
    demo: null,
    placeholder: false,
  },
]
