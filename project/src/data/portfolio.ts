import { Project, Skill, SocialLink } from "../types";

export const personalInfo = {
  name: "Jordan Smith",
  role: "Frontend Developer & React Specialist",
  email: "jordan.smith@example.com",
  bio: "Passionate frontend developer with 5+ years of experience creating exceptional user experiences. Specialized in React, TypeScript, and modern web technologies. I transform ideas into elegant, performant applications that users love.",
  location: "San Francisco, CA",
  profileImage:
    "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
};

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive admin dashboard for e-commerce management with real-time analytics, inventory tracking, and order management.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js",
      "React Query",
    ],
    githubUrl: "https://github.com/jordansmith/ecommerce-dashboard",
    liveUrl: "https://ecommerce-dashboard-demo.vercel.app",
    imageUrl:
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Web Application",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with drag-and-drop functionality, team workspaces, and real-time updates.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Framer Motion",
      "Supabase",
    ],
    githubUrl: "https://github.com/jordansmith/task-manager",
    liveUrl: "https://taskflow-demo.vercel.app",
    imageUrl:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Web Application",
    featured: true,
  },
  {
    id: "3",
    title: "Weather Forecast App",
    description:
      "Beautiful weather application with location-based forecasting, interactive maps, and detailed weather analytics.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "OpenWeather API",
      "Mapbox",
    ],
    githubUrl: "https://github.com/jordansmith/weather-app",
    liveUrl: "https://weather-forecast-demo.vercel.app",
    imageUrl:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Mobile App",
  },
  {
    id: "4",
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and dark mode.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
    ],
    githubUrl: "https://github.com/jordansmith/portfolio",
    liveUrl: "https://jordansmith.dev",
    imageUrl:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Website",
  },
  {
    id: "5",
    title: "Finance Tracker",
    description:
      "Personal finance management application with expense tracking, budget planning, and financial insights.",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Chart.js",
      "LocalStorage",
    ],
    githubUrl: "https://github.com/jordansmith/finance-tracker",
    imageUrl:
      "https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Web Application",
  },
  {
    id: "6",
    title: "Recipe Book App",
    description:
      "Interactive recipe management application with search functionality, meal planning, and shopping list generation.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
      "Context API",
    ],
    githubUrl: "https://github.com/jordansmith/recipe-book",
    liveUrl: "https://recipe-book-demo.vercel.app",
    imageUrl:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Mobile App",
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "HTML5", level: 95, category: "frontend" },
  { name: "CSS3", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Sass/SCSS", level: 85, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },
  { name: "PostgreSQL", level: 70, category: "backend" },
  { name: "MongoDB", level: 65, category: "backend" },
  { name: "REST APIs", level: 85, category: "backend" },
  { name: "GraphQL", level: 70, category: "backend" },

  // Tools
  { name: "Git", level: 90, category: "tools" },
  { name: "Webpack", level: 80, category: "tools" },
  { name: "Vite", level: 85, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "Jest", level: 80, category: "tools" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/jordansmith",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/jordansmith",
    icon: "Linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/jordansmith",
    icon: "Twitter",
  },
  {
    name: "Email",
    url: "mailto:jordan.smith@example.com",
    icon: "Mail",
  },
];
