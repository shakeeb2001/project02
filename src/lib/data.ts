export const personal = {
  name: "Shakeeb Jasim",
  firstName: "Shakeeb",
  lastName: "Jasim",
  title: "Developer",
  /** Shown under the hero name on mobile only */
  mobileHeroTagline: "Developer | UI/UX Designer",
  role: "Junior Backend Developer",
  location: "Colombo, Sri Lanka",
  email: "shakeebjasim.mail@gmail.com",
  phone: "+94740852565",
  linkedin: "https://www.linkedin.com/in/shjasim/",
  tagline:
    "Building scalable web & mobile applications with clean architecture and modern stacks.",
  heroLeft:
    "I build full-stack products that blend solid engineering with thoughtful design — crafting digital experiences that feel intuitive, seamless, and meaningful.",
  heroRight:
    "Merging backend expertise with frontend polish to create applications that don't just work reliably — they scale effortlessly and deliver real impact.",
  bio: "Passionate full-stack developer specializing in the PERN stack and Flutter. I craft responsive web apps, cross-platform mobile experiences, and robust backend services — from database optimization to Linux server deployments.",
};

export const experience = [
  {
    id: "malibupixel",
    role: "Junior Backend Developer",
    company: "MalibuPixel",
    location: "Colombo, Sri Lanka",
    period: "Sep 2024 — Present",
    current: true,
    highlights: [
      "Leading multiple ongoing projects across frontend and backend using the PERN stack and Flutter.",
      "Developed responsive web applications and contributed to cross-platform mobile app development.",
      "Managed Linux server configurations, deployments, and backend services with database optimization.",
    ],
  },
];

export const skills = [
  { name: "Node.js", category: "Backend", level: 90 },
  { name: "Next.js", category: "Frontend", level: 88 },
  { name: "Flutter", category: "Mobile", level: 85 },
  { name: "PostgreSQL", category: "Database", level: 87 },
  { name: "Firebase", category: "Cloud", level: 82 },
  { name: "Git", category: "Tools", level: 90 },
  { name: "Linux", category: "DevOps", level: 80 },
  { name: "Nginx", category: "DevOps", level: 78 },
];

export const education = {
  degree: "BSc (Hons) Computer Science",
  university: "Plymouth University",
  location: "Plymouth, United Kingdom",
  period: "2021 — 2024",
  thesis: {
    title: "Cardiovascular Disease Risk Prediction System for Laboratories",
    subtitle: "Cardio Care",
    score: "79.6%",
    description:
      "A comprehensive solution designed to improve the quality and efficiency of cardiovascular risk assessments in laboratory settings under professional supervision.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Flask API", "MERN Stack"],
  },
};

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  url?: string;
}

export const projects: Project[] = [
  {
    id: "fireadmin",
    title: "FireAdmin.cloud",
    url: "https://fireadmin.cloud",
    description:
      "A Firebase administration platform built with Next.js and Firebase for managing Firestore databases, authentication, storage, and cloud operations through a modern centralized dashboard.",
    tags: ["Next.js", "Firebase", "Firestore", "Dashboard"],
    image: "/projects/fireadmin.png",
  },
  {
    id: "invoetics",
    title: "Invoetics",
    url: "https://invoetics.fitextech.com",
    description:
      "A modern online invoice generation platform for freelancers, small businesses, and entrepreneurs to create professional invoices with customizable templates.",
    tags: ["Web App", "Invoicing", "SaaS", "Templates"],
    image: "/projects/invoetics.png",
  },
  {
    id: "champion-thread",
    title: "Champion Thread ERP",
    description:
      "Manufacturing ERP dashboard for inventory, invoices, and operations — live stock metrics, low-stock alerts, invoice ledger, and role-based admin access.",
    tags: ["ERP", "Dashboard", "Inventory", "Invoicing"],
    image: "/projects/champion-thread-erp.png",
  },
];

export const achievements = [
  {
    title: "1st Runner Up — Duothon 4.0 Buildathon",
    org: "IEEE NSBM Student Branch",
  },
];

export const certifications = [
  "Professional Certification in Web Development — Informatics Institute of Technology",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work / Portfolio", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
