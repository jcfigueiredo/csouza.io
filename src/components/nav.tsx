"use client";

import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { SocialIcon } from "./social-icon";
import { socials } from "@/data/site";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Journey" },
  { href: "#interests", label: "Beyond" },
  { href: "#bookshelf", label: "Bookshelf" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 px-6 md:px-8 py-5 flex justify-between items-center max-w-6xl mx-auto backdrop-blur-md bg-[var(--bg)]/70 dark:bg-[var(--bg-dark)]/70">
      <a
        href="#"
        className="flex items-center space-x-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
      >
        <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:rotate-6 transition-transform">
          C
        </div>
        <div className="flex flex-col">
          <span className="font-black text-lg tracking-tight leading-none">
            Claudio Souza
          </span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 font-mono">
            Systems Builder
          </span>
        </div>
      </a>

      <div className="flex items-center space-x-2 md:space-x-8 text-sm font-bold text-slate-500">
        {/* Desktop links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hover:text-blue-500 transition-colors focus-visible:outline-none focus-visible:text-blue-500"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-3 pl-4 border-l border-slate-200 dark:border-slate-800">
          {socials.map(({ href, label }) => (
            <SocialIcon key={href} href={href} label={label} size={16} />
          ))}
          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl text-slate-500 hover:text-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden border-b border-slate-200 dark:border-slate-800 bg-[var(--bg)]/95 dark:bg-[var(--bg-dark)]/95 backdrop-blur-lg px-6 py-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors py-1"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
