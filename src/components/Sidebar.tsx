import Navigation from "./Navigation"
import SocialLinks from "./SocialLinks"
import type { SidebarProps } from "../types"

const Sidebar = ({ activeSection, onNavigate }: SidebarProps) => {
  return (
    <div className="w-full md:w-1/3 bg-[#0e1a36]/90 text-white p-8 flex flex-col justify-between fixed md:h-screen overflow-auto backdrop-blur-sm">
      <div className="space-y-6">
        <div className="space-y-1">
          <h1 className="text-5xl font-bold">Brittany Chiang</h1>
          <h2 className="text-2xl text-gray-300">Front End Engineer</h2>
        </div>

        <p className="text-gray-400 py-4">I build accessible, pixel-perfect digital experiences for the web.</p>

        <Navigation activeSection={activeSection} onNavigate={onNavigate} />
      </div>

      <SocialLinks />
    </div>
  )
}

export default Sidebar
