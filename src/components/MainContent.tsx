import AboutSection from "./sections/AboutSection"
import ExperienceSection from "./sections/ExperienceSection"
import ProjectsSection from "./sections/ProjectsSection"

const MainContent = () => {
  return (
    <div className="w-full bg-[#0e1a36]/80 text-white backdrop-blur-sm">
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  )
}

export default MainContent