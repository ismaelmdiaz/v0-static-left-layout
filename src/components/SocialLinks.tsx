import { FaGithub, FaLinkedin, FaCodepen, FaInstagram } from "react-icons/fa"
import { SiGitlab } from "react-icons/si"

const SocialLinks = () => {
  const socialLinks = [
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaCodepen, href: "#", label: "CodePen" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: SiGitlab, href: "#", label: "GitLab" },
  ]

  return (
    <div className="flex space-x-5 pt-8">
      {socialLinks.map((link, index) => {
        const IconComponent = link.icon
        return (
          <a
            key={index}
            href={link.href}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={link.label}
          >
            <IconComponent size={24} />
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks
