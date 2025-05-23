import type { ExperienceItemProps } from "../types"

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return (
    <div className="border-l-2 border-gray-700 pl-6 py-2">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-medium">
          {experience.title} · {experience.company}
        </h3>
        <div className="text-gray-400 text-sm">{experience.period}</div>
      </div>
      <p className="text-gray-400">{experience.description}</p>
    </div>
  )
}

export default ExperienceItem
