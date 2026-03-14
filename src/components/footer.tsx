import { SocialIcon } from "./social-icon";
import { socials } from "@/data/site";

export function Footer() {
  return (
    <footer className="pb-20 pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 text-slate-400">
      <div className="flex items-center space-x-6">
        {socials.map(({ href, label }) => (
          <SocialIcon key={href} href={href} label={label} size={22} />
        ))}
      </div>
      <div className="text-center md:text-right">
        <p className="text-xs font-black uppercase tracking-widest mb-1">
          Claudio F. Souza
        </p>
        <p className="text-[10px] font-mono opacity-50">
          SHIPPING SINCE 1997 • WESTPORT, CT
        </p>
      </div>
    </footer>
  );
}
