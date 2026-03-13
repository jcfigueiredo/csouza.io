"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";
import AboutContent from "@/content/about.mdx";

export function Hero() {
  return (
    <section id="about" className="max-w-3xl mb-32 pt-8 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-8 bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
          <Sparkles size={14} />
          <span>Engineering × Product × AI</span>
        </div>
      </motion.div>

      <motion.h1
        className="text-5xl md:text-7xl font-black leading-[1.05] mb-10 tracking-tight"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        Designing{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
          Agentic
        </span>{" "}
        Systems for humans.
      </motion.h1>

      <motion.div
        className="space-y-6 text-xl leading-relaxed font-medium text-slate-600 dark:text-slate-400 mb-12"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <AboutContent />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      >
        <a
          href="#work"
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors group"
        >
          <span>Explore my journey</span>
          <ArrowDown
            size={16}
            className="group-hover:translate-y-0.5 transition-transform"
          />
        </a>
      </motion.div>
    </section>
  );
}
