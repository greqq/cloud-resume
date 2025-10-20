export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#252A34] via-[#1a1d26] to-[#0f1117] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#08D9D6]">
            About Me
          </h1>
          <div className="w-24 h-1 bg-[#08D9D6] mx-auto rounded-full"></div>
        </div>

        {/* Profile Section */}
        <div className="bg-[#252A34]/60 backdrop-blur-sm rounded-2xl border border-[#08D9D6]/20 p-8 mb-8 hover:border-[#08D9D6]/40 transition-all duration-300">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Profile Image */}
            <div className="w-40 h-40 border-4 border-[#08D9D6]/40 rounded-full overflow-hidden ring-4 ring-[#08D9D6]/10 shadow-2xl shadow-[#08D9D6]/30 flex-shrink-0">
              <img
                src="/profile.jpg"
                alt="Luka"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bio */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-[#EAEAEA] mb-4">
                Hello, I&apos;m Luka
              </h2>
              <p className="text-[#EAEAEA]/90 leading-relaxed mb-4">
                DevOps Engineer with a passion for cloud infrastructure, automation,
                and continuous integration. Currently expanding my expertise into
                Artificial Intelligence and Machine Learning to build intelligent,
                scalable systems.
              </p>
              <p className="text-[#EAEAEA]/70 leading-relaxed">
                I bridge the gap between development and operations, creating
                efficient CI/CD pipelines while exploring how AI can revolutionize
                DevOps practices and system automation.
              </p>
            </div>
          </div>
        </div>

        {/* What I Do Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#EAEAEA] mb-8 text-center">
            What I Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#252A34]/60 backdrop-blur-sm rounded-xl border border-[#08D9D6]/20 p-6 hover:border-[#08D9D6]/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-[#08D9D6] rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#252A34]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#EAEAEA] mb-2">
                DevOps & CI/CD
              </h3>
              <p className="text-[#EAEAEA]/80">
                Designing and implementing robust CI/CD pipelines with Jenkins,
                GitHub Actions, and Terraform. Automating infrastructure provisioning
                and deployment processes.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#252A34]/60 backdrop-blur-sm rounded-xl border border-[#08D9D6]/20 p-6 hover:border-[#08D9D6]/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-[#08D9D6] rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#252A34]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#EAEAEA] mb-2">
                Cloud Infrastructure
              </h3>
              <p className="text-[#EAEAEA]/80">
                Managing cloud infrastructure on AWS and Azure. Building scalable,
                resilient systems with services like EC2, S3, Lambda, and container
                orchestration.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#252A34]/60 backdrop-blur-sm rounded-xl border border-[#08D9D6]/20 p-6 hover:border-[#08D9D6]/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-[#FF2E63] rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#EAEAEA] mb-2">
                AI & Machine Learning
              </h3>
              <p className="text-[#EAEAEA]/80">
                Exploring artificial intelligence and machine learning technologies.
                Learning to build and deploy ML models, working with Python libraries
                and AI frameworks.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#252A34]/60 backdrop-blur-sm rounded-xl border border-[#08D9D6]/20 p-6 hover:border-[#08D9D6]/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-[#08D9D6] rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#252A34]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#EAEAEA] mb-2">
                Automation & Scripting
              </h3>
              <p className="text-[#EAEAEA]/80">
                Writing Python scripts for infrastructure automation, operational
                tasks, and workflow optimization. Creating tools that streamline
                development processes.
              </p>
            </div>
          </div>
        </div>

        {/* Interests Section */}
        <div className="bg-[#252A34]/60 backdrop-blur-sm rounded-2xl border border-[#08D9D6]/20 p-8 hover:border-[#08D9D6]/40 transition-all duration-300">
          <h2 className="text-3xl font-bold text-[#EAEAEA] mb-6 text-center">
            Interests & Learning Path
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Cloud Architecture",
              "DevOps Practices",
              "AI Engineering",
              "Machine Learning",
              "Infrastructure as Code",
              "MLOps",
              "Python Development",
              "Container Orchestration",
            ].map((interest, index) => (
              <div
                key={index}
                className="bg-[#1a1d26] rounded-lg p-4 text-center hover:bg-[#08D9D6]/20 transition-all duration-200 border border-[#08D9D6]/10 hover:border-[#08D9D6]/40"
              >
                <span className="text-[#EAEAEA] text-sm font-medium">
                  {interest}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
