import AboutSection from "./sections/AboutSection"
import ExperienceSection from "./sections/ExperienceSection"
import ProjectsSection from "./sections/ProjectsSection"

const MainContent = () => {
  return (
    <div className="w-full md:w-2/3 bg-[#0e1a36]/80 text-white md:ml-[33.333333%] overflow-y-auto backdrop-blur-sm">
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  )
}

export default MainContent
