export interface SidebarProps {
  activeSection: string
  onNavigate: (sectionId: string) => void
}

export interface NavigationProps {
  activeSection: string
  onNavigate: (sectionId: string) => void
}

export interface ExperienceData {
  title: string
  company: string
  period: string
  description: string
}

export interface ExperienceItemProps {
  experience: ExperienceData
}

export interface ProjectData {
  title: string
  description: string
  technologies: string[]
}

export interface ProjectCardProps {
  project: ProjectData
}
