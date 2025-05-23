"use client"

import type { NavigationProps } from "../types"

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const navigationItems = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
  ]

  return (
    <nav className="space-y-4 pt-8">
      {navigationItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`block text-left w-full border-l-2 pl-4 py-1 transition-colors ${
            activeSection === item.id
              ? "text-white border-white"
              : "text-gray-400 border-gray-700 hover:text-white hover:border-white"
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}

export default Navigation
