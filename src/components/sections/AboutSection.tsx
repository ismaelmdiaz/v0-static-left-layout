const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen w-full p-8 flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-6 text-white">About</h2>
      <div className="space-y-6">
        <p className="text-gray-300 text-lg leading-relaxed">
          I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful
          design with robust engineering. My favorite work lies at the intersection of design and development, creating
          experiences that not only look great but are meticulously built for performance and usability.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed">
          Currently, I'm a Senior Front-End Engineer at <span className="text-white font-medium">Klaviyo</span>,
          specializing in accessibility. I contribute to the creation and maintenance of UI components that power
          Klaviyo's frontend, ensuring our platform meets web accessibility standards and best practices to deliver an
          inclusive user experience.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed">
          In my spare time, I'm usually climbing, reading, hanging out with my wife and two cats, or running around
          Hyrule searching for <span className="text-white font-medium">Korok seeds</span>.
        </p>
      </div>
    </section>
  )
}

export default AboutSection
