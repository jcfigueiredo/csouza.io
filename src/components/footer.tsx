import { Linkedin, Github } from "lucide-react";
import { socials } from "@/data/site";

const iconMap: Record<string, React.ReactNode> = {
  LinkedIn: <Linkedin size={22} />,
  GitHub: <Github size={22} />,
};

export function Footer() {
  return (
    <footer className="mt-40 pb-20 pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 text-slate-400">
      <div className="flex items-center space-x-6">
        {socials.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            {iconMap[label]}
          </a>
        ))}
      </div>
      <div className="text-center md:text-right">
        <p className="text-xs font-black uppercase tracking-widest mb-1">
          Claudio F. Souza
        </p>
        <p className="text-[10px] font-mono opacity-50">
          SHIPPING SINCE 2004 • NEW YORK, NY
        </p>
      </div>
    </footer>
  );
}
