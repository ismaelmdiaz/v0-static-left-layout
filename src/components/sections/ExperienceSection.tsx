import ExperienceItem from "../ExperienceItem"
import type { ExperienceData } from "../../types"

const ExperienceSection = () => {
  const experiences: ExperienceData[] = [
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

  return (
    <section id="experience" className="min-h-screen w-full p-8 flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-6 text-white">Experience</h2>
      <div className="space-y-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          In the past, I've had the opportunity to develop software across a variety of settings — from{" "}
          <span className="text-white font-medium">advertising agencies</span> and{" "}
          <span className="text-white font-medium">large corporations</span> to{" "}
          <span className="text-white font-medium">start-ups</span> and{" "}
          <span className="text-white font-medium">small digital product studios</span>.
        </p>

        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
