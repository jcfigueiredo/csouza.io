import { Linkedin, Github } from "lucide-react";

const icons: Record<string, React.FC<{ size: number }>> = {
  LinkedIn: Linkedin,
  GitHub: Github,
};

export function SocialIcon({
  href,
  label,
  size = 18,
}: {
  href: string;
  label: string;
  size?: number;
}) {
  const Icon = icons[label];
  if (!Icon) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
    >
      <Icon size={size} />
    </a>
  );
}
