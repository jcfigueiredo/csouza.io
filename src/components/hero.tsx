"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";

const springEase = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: springEase },
  },
};

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <motion.section
      id="about"
      className="max-w-3xl mb-32 pt-8 scroll-mt-20"
      initial={reduced ? "visible" : "hidden"}
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-8 bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
          <Sparkles size={14} />
          <span>Engineering × Product × AI</span>
        </div>
      </motion.div>

      <motion.h1
        className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-10 tracking-tight"
        variants={itemVariants}
      >
        Designing{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
          Agentic
        </span>{" "}
        Systems for humans.
      </motion.h1>

      <motion.div variants={itemVariants}>
        <HeroAbout />
      </motion.div>

      <motion.div variants={itemVariants}>
        <a
          href="#work"
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
        >
          <span>Explore my journey</span>
          <ArrowDown
            size={16}
            className="group-hover:translate-y-0.5 transition-transform"
          />
        </a>
      </motion.div>
    </motion.section>
  );
}

function HeroAbout() {
  return (
    <div className="space-y-6 text-xl leading-relaxed font-medium text-slate-600 dark:text-slate-400 mb-12">
      <p>
        I&rsquo;m an engineer by trade and a builder by nature. Originally from{" "}
        <strong className="text-slate-900 dark:text-white font-bold">
          Rio de Janeiro
        </strong>
        , I now call New York home.
      </p>
      <p>
        Over two decades, I&rsquo;ve built software across thirty languages. My
        conviction is in{" "}
        <em className="not-italic underline decoration-blue-500/30 underline-offset-4">
          Lean & XP
        </em>
        —shipping early, learning fast, and keeping systems simple.
      </p>
      <p>
        I have the most fun working where{" "}
        <span className="text-blue-600 dark:text-blue-400 font-bold">
          engineering meets product
        </span>
        . Lately, that&rsquo;s meant figuring out how Agentic AI actually fits
        into real-world complex systems — and building the platforms that make it
        possible.
      </p>
    </div>
  );
}
