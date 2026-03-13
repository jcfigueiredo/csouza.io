"use client";

import { ThemeToggle } from "./theme-toggle";
import { socials } from "@/data/site";
import { Linkedin, Github } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Journey" },
  { href: "#interests", label: "Beyond" },
  { href: "#bookshelf", label: "Bookshelf" },
];

const iconMap: Record<string, React.ReactNode> = {
  LinkedIn: <Linkedin size={16} />,
  GitHub: <Github size={16} />,
};

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 px-6 py-5 flex justify-between items-center max-w-6xl mx-auto backdrop-blur-md bg-[#f8fafc]/70 dark:bg-[#0f172a]/70">
      <a href="#" className="flex items-center space-x-3 group">
        <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:rotate-6 transition-transform">
          C
        </div>
        <div className="flex flex-col">
          <span className="font-black text-lg tracking-tight leading-none">
            Claudio Souza
          </span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
            Systems Builder
          </span>
        </div>
      </a>

      <div className="flex items-center space-x-2 md:space-x-8 text-sm font-bold text-slate-500">
        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hover:text-blue-500 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-3 pl-4 border-l border-slate-200 dark:border-slate-800">
          {socials.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-400 hover:text-blue-500 transition-colors"
            >
              {iconMap[label]}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
