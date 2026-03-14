import Image from "next/image";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section";
import { Footer } from "@/components/footer";
import { FocusGraphSection } from "@/components/focus-graph-section";
import { experience } from "@/data/experience";
import { bookCategories } from "@/data/books";
import { beyondCode, type InterestAccent } from "@/data/site";

const emojiBg: Record<InterestAccent, string> = {
  indigo: "bg-indigo-100 dark:bg-indigo-500/15",
  amber: "bg-amber-100 dark:bg-amber-500/15",
  cyan: "bg-cyan-100 dark:bg-cyan-500/15",
  violet: "bg-violet-100 dark:bg-violet-500/15",
  rose: "bg-rose-100 dark:bg-rose-500/15",
  emerald: "bg-emerald-100 dark:bg-emerald-500/15",
  sky: "bg-sky-100 dark:bg-sky-500/15",
};

export default function Home() {
  return (
    <div className="min-h-screen transition-colors duration-500 bg-[var(--bg)] text-slate-900 dark:bg-[var(--bg-dark)] dark:text-slate-100">
      {/* Ambient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full blur-[120px] transition-colors duration-1000 bg-blue-100/60 dark:bg-blue-900/20" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full blur-[120px] transition-colors duration-1000 bg-rose-100/60 dark:bg-rose-900/15" />
      </div>

      <Nav />

      <main className="relative max-w-6xl mx-auto px-6 md:px-8 pt-6">
        <Hero />

        {/* ─── Focus Areas ─── */}
        {/* <AnimatedSection className="mb-32">
          <section id="focus" className="scroll-mt-20">
            <div className="flex items-center space-x-6 mb-12">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
                What I Build Around
              </h2>
              <div className="h-px flex-grow bg-slate-200 dark:bg-slate-800" />
            </div>

            <FocusGraphSection />
          </section>
        </AnimatedSection> */}

        {/* ─── Timeline ─── */}
        <AnimatedSection className="mb-32">
          <section id="work" className="scroll-mt-20">
            <div className="flex items-center space-x-6 mb-12">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
                The Journey
              </h2>
              <div className="h-px flex-grow bg-slate-200 dark:bg-slate-800" />
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Center line — hidden on mobile */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

              {/* Mobile left rail */}
              <div className="md:hidden absolute left-3 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />

              <StaggerContainer className="space-y-10 md:space-y-16">
                {experience.map((job, i) => {
                  const isLeft = i % 2 === 0;
                  const isCurrent = i === 0;

                  return (
                    <StaggerItem key={job.company}>
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
                          className={`group p-7 rounded-[2rem] border transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                            isCurrent
                              ? "bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-800/60 dark:to-blue-900/20 border-blue-200/60 dark:border-blue-500/30 shadow-lg shadow-blue-500/5"
                              : "bg-white dark:bg-slate-800/40 border-slate-100 dark:border-slate-700 shadow-lg shadow-slate-200/50 dark:shadow-black/20 dark:hover:bg-slate-800/60"
                          } ${
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

                          <div className="flex items-center gap-3 mb-4">
                            <Image
                              src={job.logo}
                              alt={`${job.company} logo`}
                              width={32}
                              height={32}
                              className="rounded-lg"
                            />
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg font-black tracking-tight group-hover:text-blue-500 transition-colors">
                                <a
                                  href={job.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:underline decoration-blue-500/30 underline-offset-4"
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
                          </div>

                          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                            {job.description}
                          </p>

                          {/* Mobile: achievements inline */}
                          {job.achievements.length > 0 && (
                            <ul className="md:hidden mb-4 space-y-1.5">
                              {job.achievements.map((a) => (
                                <li
                                  key={a}
                                  className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400"
                                >
                                  <span className="w-1 h-1 rounded-full bg-blue-500/50 mt-1.5 shrink-0" />
                                  {a}
                                </li>
                              ))}
                            </ul>
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

                        {/* Achievements — desktop only, opposite side */}
                        <div
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
                              <ul className={`space-y-2.5 ${isLeft ? "" : "flex flex-col items-end"}`}>
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
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </section>
        </AnimatedSection>

        {/* ─── Beyond the Code ─── */}
        <AnimatedSection className="mb-32">
          <section id="interests" className="scroll-mt-20">
            <div className="flex items-center space-x-6 mb-12">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
                Beyond the Code
              </h2>
              <div className="h-px flex-grow bg-slate-200 dark:bg-slate-800" />
            </div>

            <StaggerContainer className="grid md:grid-cols-3 gap-4">
              {beyondCode.map((item) => {
                const isWide = item.span === 2;
                const inner = (
                  <>
                    <div
                      className={`w-11 h-11 rounded-xl ${emojiBg[item.accent]} flex items-center justify-center text-xl shrink-0 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300`}
                    >
                      {item.emoji}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-black tracking-tight mb-1 group-hover:text-blue-500 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </>
                );

                return (
                  <StaggerItem
                    key={item.title}
                    className={isWide ? "md:col-span-2" : ""}
                  >
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-4 p-6 rounded-[1.5rem] border bg-white dark:bg-slate-800/40 border-slate-100 dark:border-slate-700 shadow-lg shadow-slate-200/50 dark:shadow-black/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500/30"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="group flex items-start gap-4 p-6 rounded-[1.5rem] border bg-white dark:bg-slate-800/40 border-slate-100 dark:border-slate-700 shadow-lg shadow-slate-200/50 dark:shadow-black/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                        {inner}
                      </div>
                    )}
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </section>
        </AnimatedSection>

        {/* ─── Full Bookshelf ─── */}
        <AnimatedSection className="mb-20">
          <section id="bookshelf" className="scroll-mt-20">
            <div className="flex items-center space-x-6 mb-12">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
                Bookshelf
              </h2>
              <div className="h-px flex-grow bg-slate-200 dark:bg-slate-800" />
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              {bookCategories.map((category) => (
                <div
                  key={category.label}
                  className="rounded-[1.5rem] border overflow-hidden bg-white dark:bg-slate-800/40 border-slate-100 dark:border-slate-700"
                >
                  <div className="px-5 py-3.5 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-wider uppercase text-blue-500 font-bold">
                      {category.label}
                    </span>
                    <span className="font-mono text-[10px] text-slate-400">
                      {category.books.length}
                    </span>
                  </div>
                  <div className="px-5 py-4 flex flex-wrap gap-x-1 gap-y-0.5 leading-relaxed">
                    {category.books.map((book, i) => (
                      <span key={book.title} className="inline">
                        <a
                          href={`https://www.google.com/search?q=${encodeURIComponent(`${book.title} ${book.author}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm hover:text-blue-500 transition-colors duration-200 ${
                            book.featured
                              ? "font-bold text-slate-800 dark:text-slate-100"
                              : "text-slate-400 dark:text-slate-500"
                          }`}
                        >
                          {book.title}
                        </a>
                        {i < category.books.length - 1 && (
                          <span className="text-slate-300 dark:text-slate-700 mx-0.5">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        <Footer />
      </main>
    </div>
  );
}
