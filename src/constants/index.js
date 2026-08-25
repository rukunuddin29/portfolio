import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import Airbnb from '../assets/Airbnb.png'
import ecomm from '../assets/ecomm.png'

export const HERO_CONTENT = `Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js. I build production-ready applications, scalable REST APIs, and robust backend systems with a focus on clean, reliable solutions.`;

export const ABOUT_TEXT = `I'm a MERN/TypeScript full-stack developer with hands-on professional experience shipping production features across Next.js, React, Node.js and Express — including a full React-to-Next.js migration, admin panels, and REST APIs documented with Swagger. I've solved 150+ DSA problems (LeetCode + GfG) and am currently building an AI-integrated MERN/Next.js project while learning Python for backend and AI/ML development. I hold a B.Tech in Information Technology from Netaji Subhash Engineering College, Kolkata, and I'm always looking to take on new challenges and grow as an engineer.`;

export const EXPERIENCES = [
  {
    year: "Jan 2026 – Present",
    role: "Junior Full-Stack Developer",
    company: "Acrosstek",
    location: "Kolkata, India (Remote/On-site)",
    description: `Leading the migration of the production codebase acrosstek.com from React.js to Next.js, improving SEO crawlability and initial page-load performance. Built responsive, animated UI components and admin panel features for day-to-day content management. Developed and maintained backend REST APIs in Express.js, documented with Swagger. Implemented on-page SEO (meta tags, structured data, sitemap/robots) and monitored performance via Google Search Console.`,
    technologies: ["Next.js", "React.js", "Express.js", "Swagger", "SEO"],
  },
  {
    year: "Aug 2025 – Jan 2026",
    role: "Full-Stack Developer Intern",
    company: "Hansraj Ventures",
    location: "Kolkata, India",
    description: `Sole developer for acrosstek.com's React → Next.js migration; rebuilt the UI in HTML/CSS-SCSS and built a foundational Express.js backend. Led full-stack development of gopratle.com, an event booking platform — owned frontend, backend APIs, and third-party integrations end-to-end. Contributed to naringo.com (e-commerce): new pages, sliders, and UI/UX enhancements. Refactored state management on kaprilux.com (TypeScript) from Context API to Redux for better scalability.`,
    technologies: ["React.js", "Next.js", "Express.js", "Redux", "TypeScript"],
  },
];

export const PROJECTS = [
  {
    title: "AI-Powered Content Assistant",
    image: project1,
    description:
      "A full-stack AI application (in progress): Next.js/TypeScript frontend, Node/Express backend, MongoDB, integrating an LLM API (OpenAI/Anthropic) for real-time content generation and summarization — designed for streaming responses, rate-limiting, and prompt/version management.",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "LLM API"],
    github: "",
    demo: "",
  },
  {
    title: "GIST — AI Document Intelligence Platform",
    image: project2,
    description:
      "A freelance AI document-analysis product that simplifies contracts into summaries and risk insights. Worked on responsive UI/UX, dashboards, authentication flows, database workflows, SEO, and deployment.",
    technologies: ["Bubble.io", "AI/LLM", "Dashboards", "Auth"],
    github: "",
    demo: "",
  },
  {
    title: "Airbnb Clone",
    image: Airbnb,
    description:
      "A full-stack clone of Airbnb with property listings, JWT/bcrypt authentication, bookings, and responsive user dashboards. RESTful APIs with full CRUD via MongoDB.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "AWS"],
    github: "https://github.com/rukunuddin29/Airbnb",
    demo: "https://airbnb-eight-pi-23.vercel.app",
  },
  {
    title: "E-commerce Platform",
    image: ecomm,
    description:
      "A scalable e-commerce platform with product catalog, cart, order management, and user dashboards secured with JWT/bcrypt authentication.",
    technologies: ["React", "TypeScript", "Redux", "Express", "MongoDB", "AWS"],
    github: "https://github.com/rukunuddin29/ecommerce",
    demo: "https://ecommerce-sandy-theta.vercel.app/",
  },
];

export const CONTACT = {
  address: "Kolkata, India",
  phoneNo: "+91 91633 62535",
  email: "rukunuddin2003@gmail.com",
};