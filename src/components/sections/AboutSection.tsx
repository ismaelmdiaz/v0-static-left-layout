const AboutSection = () => {
  const aboutContent = [
    "I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.",
    "Currently, I'm a Senior Front-End Engineer at Klaviyo, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo's frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.",
    "In my spare time, I'm usually climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds.",
  ]

  return (
    <section id="about" className="min-h-screen w-full p-8 flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-6 text-white">About</h2>
      <div className="space-y-6">
        {aboutContent.map((paragraph, index) => (
          <p key={index} className="text-gray-300 text-lg leading-relaxed">
            {index === 1 ? (
              <>
                Currently, I'm a Senior Front-End Engineer at <span className="text-white font-medium">Klaviyo</span>,
                specializing in accessibility. I contribute to the creation and maintenance of UI components that power
                Klaviyo's frontend, ensuring our platform meets web accessibility standards and best practices to
                deliver an inclusive user experience.
              </>
            ) : index === 2 ? (
              <>
                In my spare time, I'm usually climbing, reading, hanging out with my wife and two cats, or running
                around Hyrule searching for <span className="text-white font-medium">Korok seeds</span>.
              </>
            ) : (
              paragraph
            )}
          </p>
        ))}
      </div>
    </section>
  )
}

export default AboutSection
