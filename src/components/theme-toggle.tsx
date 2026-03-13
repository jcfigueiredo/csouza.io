"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-10 h-10" aria-hidden="true" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2.5 rounded-xl transition-all shadow-sm bg-white text-amber-500 hover:bg-slate-50 dark:bg-slate-800 dark:text-blue-300 dark:hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <Moon size={20} fill="currentColor" />
      ) : (
        <Sun size={20} fill="currentColor" />
      )}
    </button>
  );
}
