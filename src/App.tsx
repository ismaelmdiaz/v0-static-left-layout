import { useState, useEffect } from "react"
import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"

function App() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"]
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="flex min-h-screen bg-[#0e1a36]/80 backdrop-blur-sm">
      <div className="w-full md:w-1/3 md:sticky md:top-0 md:h-screen">
        <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />
      </div>
      <div className="w-full md:w-2/3">
        <MainContent />
      </div>
    </div>
  )
}

export default App