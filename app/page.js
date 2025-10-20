import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#252A34] via-[#1a1d26] to-[#0f1117]">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Animated gradient background effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#08D9D6]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF2E63]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Profile Image */}
          <div className="mb-8 w-32 h-32 mx-auto border-4 border-[#08D9D6]/40 rounded-full overflow-hidden ring-4 ring-[#08D9D6]/10 shadow-2xl shadow-[#08D9D6]/30">
            <img
              src="/profile.jpg"
              alt="Luka "
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-7xl font-bold mb-4">
            <span className="text-[#08D9D6]">
              Luka
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-[#EAEAEA] mb-8 max-w-2xl mx-auto">
            DevOps Engineer
          </p>

          {/* Description */}
          <p className="text-[#EAEAEA]/80 mb-12 max-w-xl mx-auto">
            Building robust cloud infrastructure and CI/CD pipelines while
            exploring the frontier of artificial intelligence and machine learning.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/projects"
              className="px-8 py-3 bg-[#08D9D6] text-[#252A34] rounded-lg font-medium hover:shadow-lg hover:shadow-[#08D9D6]/50 transition-all duration-300 hover:scale-105"
            >
              View Projects
            </Link>
            <Link
              href="/cv"
              className="px-8 py-3 bg-transparent text-[#EAEAEA] rounded-lg font-medium border-2 border-[#08D9D6] hover:bg-[#08D9D6]/10 hover:text-white transition-all duration-300 hover:scale-105"
            >
              View CV
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-16 flex gap-6 justify-center">
            <Link
              href="/about"
              className="text-[#08D9D6] hover:text-[#EAEAEA] transition-colors duration-200 flex items-center gap-2"
            >
              <span>Learn more about me</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-[#EAEAEA]/50 animate-bounce">
            <span className="text-xs uppercase tracking-wider">Explore</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
