"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import VisitorCounter from "./VisitorCounter";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "CV", path: "/cv" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#252A34]/95 backdrop-blur-sm border-b border-[#08D9D6]/30 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Visitor Counter */}
          <div className="flex items-center">
            <span className="text-sm font-medium text-[#08D9D6]">
              <VisitorCounter />
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-1 sm:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === item.path
                    ? "bg-[#08D9D6]/20 text-[#08D9D6] border border-[#08D9D6]/40"
                    : "text-[#EAEAEA] hover:text-white hover:bg-[#252A34]/50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
