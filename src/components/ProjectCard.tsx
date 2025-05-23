import type { ProjectCardProps } from "../types"

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-[#162240]/80 p-6 rounded-lg backdrop-blur-sm">
      <h3 className="text-xl font-medium mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span key={index} className="text-xs bg-gray-700 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
