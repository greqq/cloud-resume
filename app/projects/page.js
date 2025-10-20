const ProjectCard = ({ title, description, technologies, link, github }) => (
  <div className="bg-[#252A34]/60 backdrop-blur-sm rounded-xl border border-[#08D9D6]/20 p-6 hover:border-[#08D9D6]/40 transition-all duration-300 hover:transform hover:scale-105">
    <h3 className="text-2xl font-bold text-[#08D9D6] mb-3">{title}</h3>
    <p className="text-[#EAEAEA] mb-4 leading-relaxed">{description}</p>

    {/* Technologies */}
    <div className="flex flex-wrap gap-2 mb-4">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-[#1a1d26] text-[#08D9D6] text-xs rounded-full border border-[#08D9D6]/30"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Links */}
    <div className="flex gap-4">
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-[#08D9D6] text-[#252A34] text-sm rounded-lg hover:shadow-lg hover:shadow-[#08D9D6]/50 transition-all duration-300"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Live Demo
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 border-2 border-[#08D9D6] text-[#EAEAEA] text-sm rounded-lg hover:border-[#08D9D6]/50 hover:bg-[#08D9D6]/10 transition-all duration-300"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      )}
    </div>
  </div>
);

export default function Projects() {
  const projects = [
    {
      title: "Cloud Resume Challenge",
      description:
        "A serverless portfolio website hosted on AWS S3 with CloudFront CDN. Features a visitor counter using API Gateway, Lambda functions, and DynamoDB. Complete CI/CD pipeline with GitHub Actions for automatic deployment.",
      technologies: ["AWS S3", "CloudFront", "Lambda", "DynamoDB", "API Gateway", "GitHub Actions", "Next.js", "Tailwind CSS"],
      link: "lukamasa.com",
      github: "https://github.com/greqq/cloud-resume",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#252A34] via-[#1a1d26] to-[#0f1117] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-[#08D9D6]">
              My Projects
            </span>
          </h1>
          <p className="text-[#EAEAEA] text-lg max-w-2xl mx-auto mb-6">
            A collection of my recent work in cloud infrastructure, DevOps automation, and full-stack development
          </p>
          <div className="w-24 h-1 bg-[#08D9D6] mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-[#252A34]/60 backdrop-blur-sm rounded-2xl border border-[#08D9D6]/20 p-8 text-center">
          <h2 className="text-2xl font-bold text-[#08D9D6] mb-4">
            Want to see more?
          </h2>
          <p className="text-[#EAEAEA] mb-6">
            Check out my GitHub profile for more projects and contributions
          </p>
          <a
            href="https://github.com/greqq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#08D9D6] text-[#252A34] rounded-lg font-medium hover:shadow-lg hover:shadow-[#08D9D6]/50 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}
