"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Experience } from "@/data/experience";

const springEase = [0.16, 1, 0.3, 1] as const;

export function TimelineItem({
  job,
  index,
}: {
  job: Experience;
  index: number;
}) {
  const isCurrent = index === 0;
  const isLeft = index % 2 === 0;
  const [expanded, setExpanded] = useState(isCurrent);

  return (
    <div className="relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-12">
      {/* Mobile left-rail dot — vertically centered */}
      <div className="md:hidden absolute left-1.5 top-1/2 -translate-y-1/2 z-10">
        <div
          className={`w-3.5 h-3.5 rounded-full border-[2.5px] bg-[var(--bg)] dark:bg-[var(--bg-dark)] ${
            isCurrent
              ? "border-blue-500"
              : "border-blue-400 dark:border-blue-500"
          }`}
        />
        {isCurrent && (
          <div className="absolute inset-0 rounded-full border-2 border-blue-500/40 animate-ping" />
        )}
      </div>

      {/* Desktop center dot — vertically centered in row */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 items-center justify-center">
        <div
          className={`w-4 h-4 rounded-full border-[3px] bg-[var(--bg)] dark:bg-[var(--bg-dark)] ${
            isCurrent
              ? "border-blue-500 dark:border-blue-400"
              : "border-blue-500 dark:border-blue-400"
          }`}
        />
        {isCurrent && (
          <div className="absolute w-6 h-6 rounded-full border-2 border-blue-500/40 animate-ping" />
        )}
      </div>

      {/* Card */}
      <div
        onClick={() => setExpanded(!expanded)}
        role="button"
        aria-expanded={expanded}
        className={`group rounded-[2rem] border transition-all duration-500 cursor-pointer ${
          expanded ? "p-7" : "p-5"
        } ${
          isCurrent
            ? "bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-800/60 dark:to-blue-900/20 border-blue-200/60 dark:border-blue-500/30 shadow-lg shadow-blue-500/5"
            : "bg-white dark:bg-slate-800/40 border-slate-100 dark:border-slate-700 shadow-lg shadow-slate-200/50 dark:shadow-black/20 dark:hover:bg-slate-800/60"
        } ${expanded ? "hover:-translate-y-1 hover:shadow-xl" : ""} ${
          isLeft
            ? "md:col-start-1 md:col-end-2"
            : "md:col-start-2 md:col-end-3"
        }`}
      >
        {isCurrent && (
          <span className="absolute top-4 right-4 text-[9px] font-black font-mono text-blue-500 bg-blue-50 dark:bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-200/60 dark:border-blue-500/20 uppercase tracking-wider">
            Now
          </span>
        )}

        {/* Header — always visible */}
        <div className="w-full flex items-center gap-3 text-left">
          <Image
            src={job.logo}
            alt={`${job.company} logo`}
            width={32}
            height={32}
            className="rounded-lg shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-black tracking-tight group-hover:text-blue-500 transition-colors">
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:squiggle"
                onClick={(e) => e.stopPropagation()}
              >
                {job.company}
              </a>
            </h3>
            <p className="text-blue-500 font-bold text-xs uppercase tracking-wider">
              {job.role}
            </p>
          </div>
          <span className="text-[10px] font-black font-mono text-slate-400 bg-slate-50 dark:bg-slate-900 px-3 py-1 rounded-full border border-slate-100 dark:border-slate-800 shrink-0 hidden sm:inline">
            {job.period}
          </span>
          {!isCurrent && (
            <ChevronDown
              size={16}
              className={`text-slate-400 shrink-0 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          )}
        </div>

        {/* Expandable content */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: springEase }}
              className="overflow-hidden"
            >
              <div className="pt-4">
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  {job.description}
                </p>

                {/* Mobile: achievements inline */}
                {job.achievements.length > 0 && (
                  <div className="md:hidden mb-4 border-t border-slate-100 dark:border-slate-700/50 pt-3 mt-3">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-500/70 mb-2 block">
                      Key Milestones
                    </span>
                    <ul className="space-y-1.5">
                      {job.achievements.map((a) => (
                        <li
                          key={a}
                          className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40 mt-1.5 shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Achievements — desktop only, opposite side */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -10 : 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isLeft ? -10 : 10 }}
            transition={{ duration: 0.3, ease: springEase, delay: 0.05 }}
            className={`hidden md:flex flex-col justify-center ${
              isLeft
                ? "md:col-start-2 md:col-end-3"
                : "md:col-start-1 md:col-end-2 md:row-start-1"
            }`}
          >
            {job.achievements.length > 0 && (
              <div className={isLeft ? "pl-4" : "pr-4 text-right"}>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-500/70 mb-3 block">
                  Key Milestones
                </span>
                <ul
                  className={`space-y-2.5 ${isLeft ? "" : "flex flex-col items-end"}`}
                >
                  {job.achievements.map((a) => (
                    <li
                      key={a}
                      className={`flex items-start gap-2.5 text-sm text-slate-500 dark:text-slate-400 leading-snug ${
                        isLeft ? "" : "flex-row-reverse text-right"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40 mt-1.5 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
