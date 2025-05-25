import AboutSection from "./sections/AboutSection"
import ExperienceSection from "./sections/ExperienceSection"
import ProjectsSection from "./sections/ProjectsSection"

const MainContent = () => {
  return (
    <div className="w-full text-white">
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  )
}

export default MainContent