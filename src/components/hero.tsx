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
      className="max-w-4xl mb-16 md:mb-32 pt-4 scroll-mt-20"
      initial={reduced ? "visible" : "hidden"}
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-5 bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
          <Sparkles size={14} />
          <span>Platforms · Teams · AI</span>
        </div>
      </motion.div>

      <motion.h1
        className="text-5xl md:text-6xl font-black leading-[1.05] mb-10 tracking-tight"
        variants={itemVariants}
      >
        Every complex problem is just a{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
          puzzle
        </span>
        .
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
    <div className="space-y-3 text-xl leading-relaxed font-medium text-slate-600 dark:text-slate-400 mb-12">
      <p>
        Hi, I&rsquo;m{" "}
        <strong className="text-slate-900 dark:text-white font-bold">
          Cláudio
        </strong>{" "}
        <span className="text-base text-slate-400 dark:text-slate-500 font-normal">
          /klaw-dee-oh/
        </span>{" "}
        — a Brazilian-American born and raised in{" "}
        <strong className="text-slate-900 dark:text-white font-bold">
          Rio de Janeiro
        </strong>
        , now living in{" "}
        <strong className="text-slate-900 dark:text-white font-bold">
          New England
        </strong>
        . I grew up in Brazil&rsquo;s early-2000s tech scene, where you learned
        whatever the project needed by tomorrow. That made me a generalist by
        necessity and a{" "}
        <strong className="text-slate-900 dark:text-white font-bold">
          builder by nature
        </strong>
        .
      </p>
      <p>
        In 2004 I founded{" "}
        <strong className="text-slate-900 dark:text-white font-bold">
          Deus Ex Machina
        </strong>
        , a firm that salvaged failed software projects — money-back guarantee,
        30+ deliveries in three years. That kind of pace and pressure is what
        taught me the value of Lean, XP, automated testing, and reusable
        components. It also taught me that when you approach things from{" "}
        <em className="not-italic squiggle">
          first principles
        </em>
        ,{" "}
        any complex problem is just{" "}
        <em className="not-italic squiggle">
          a puzzle made of smaller puzzles
        </em>
        .
      </p>
      <p>
        Twenty-plus years, over twenty programming languages, and a handful of
        startups later, I&rsquo;m most energized by{" "}
        <span className="text-blue-600 dark:text-blue-400 font-bold">
          creating things that genuinely change how people work
        </span>
        . In the past that ranged from building frontend and backend frameworks,
        to infrastructure, to growing teams and leading product strategy. Right
        now it means building{" "}
        <em className="not-italic squiggle">
          Agentic AI
        </em>{" "}
        platforms where the technical and the human intersect.
      </p>
      <p className="text-lg">
        Off screen: tennis, Lego, mechanical puzzles, scuba diving, sci-fi,
        RPGs, videogames, reading, building a compiler for fun, and custom
        water-cooled PCs.
      </p>
    </div>
  );
}
