import ProjectCard from "../ProjectCard"
import type { ProjectData } from "../../types"

const ProjectsSection = () => {
  const projects: ProjectData[] = [
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

  return (
    <section id="projects" className="min-h-screen w-full p-8 flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-6 text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
