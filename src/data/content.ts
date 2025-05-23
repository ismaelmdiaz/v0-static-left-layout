import type { ExperienceData, ProjectData } from "../types"

export const personalInfo = {
  name: "Brittany Chiang",
  title: "Front End Engineer",
  description: "I build accessible, pixel-perfect digital experiences for the web.",
}

export const aboutContent = [
  "I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.",
  "Currently, I'm a Senior Front-End Engineer at Klaviyo, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo's frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.",
  "In my spare time, I'm usually climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds.",
]

export const experiences: ExperienceData[] = [
  {
    title: "Senior Frontend Engineer, Accessibility",
    company: "Klaviyo",
    period: "2024 — PRESENT",
    description:
      "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
  },
  {
    title: "Lead Frontend Developer",
    company: "Digital Agency",
    period: "2020 — 2024",
    description:
      "Led frontend development for major client projects, implementing responsive designs and ensuring cross-browser compatibility. Mentored junior developers and established coding standards for the team.",
  },
  {
    title: "Frontend Developer",
    company: "Tech Startup",
    period: "2018 — 2020",
    description:
      "Developed and maintained key features for the company's main product. Collaborated with UX designers to implement intuitive user interfaces and improve overall user experience.",
  },
]

export const projects: ProjectData[] = [
  {
    title: "Spotify Web App",
    description:
      "A comprehensive web application built with the Spotify API, allowing users to browse their library, create playlists, and discover new music.",
    technologies: ["React", "Spotify API", "Tailwind CSS"],
  },
  {
    title: "Accessibility Toolkit",
    description:
      "An open-source collection of accessible UI components and utilities for React developers, focusing on WCAG compliance.",
    technologies: ["TypeScript", "React", "ARIA"],
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce solution with product management, cart functionality, and secure checkout process.",
    technologies: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills, with a focus on performance and responsive design.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
  },
]
