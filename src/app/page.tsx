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
import { interests } from "@/data/site";

export default function Home() {
  return (
    <div className="min-h-screen transition-colors duration-500 bg-[var(--bg)] text-slate-900 dark:bg-[var(--bg-dark)] dark:text-slate-100">
      {/* Ambient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full blur-[120px] transition-colors duration-1000 bg-blue-100/60 dark:bg-blue-900/20" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full blur-[120px] transition-colors duration-1000 bg-rose-100/60 dark:bg-rose-900/15" />
      </div>

      <Nav />

      <main className="relative max-w-6xl mx-auto px-6 md:px-8 pt-12">
        <Hero />

        {/* ─── Focus Areas ─── */}
        <AnimatedSection className="mb-32">
          <section id="focus" className="scroll-mt-20">
            <div className="flex items-center space-x-6 mb-12">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
                What I Build Around
              </h2>
              <div className="h-px flex-grow bg-slate-200 dark:bg-slate-800" />
            </div>

            <FocusGraphSection />
          </section>
        </AnimatedSection>

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
                        {/* Mobile left-rail dot */}
                        <div className="md:hidden absolute left-1.5 top-7 z-10">
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

                        {/* Desktop center dot */}
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 z-10 items-center justify-center">
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
                              : "bg-white dark:bg-slate-800/40 border-slate-100 dark:border-slate-700 dark:hover:bg-slate-800/60"
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
                                {job.company}
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

            <div className="grid md:grid-cols-3 gap-5">
              {/* Published — spans 2 cols */}
              <div className="md:col-span-2 p-7 rounded-[2rem] border bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-500/10 dark:to-blue-500/10 border-indigo-200/60 dark:border-indigo-500/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/5">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{interests.published.emoji}</span>
                  <div>
                    <h3 className="text-lg font-black mb-2 tracking-tight">
                      {interests.published.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {interests.published.body}
                    </p>
                  </div>
                </div>
              </div>

              {/* Reading */}
              <div className="p-7 rounded-[2rem] border bg-white dark:bg-slate-800/40 border-slate-100 dark:border-slate-700 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                <span className="text-3xl block mb-3">
                  {interests.reading.emoji}
                </span>
                <h3 className="text-base font-black mb-2 tracking-tight">
                  {interests.reading.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {interests.reading.body}
                </p>
              </div>

              {/* Curious */}
              <div className="p-7 rounded-[2rem] border bg-white dark:bg-slate-800/40 border-slate-100 dark:border-slate-700 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                <span className="text-3xl block mb-3">
                  {interests.curious.emoji}
                </span>
                <h3 className="text-base font-black mb-2 tracking-tight">
                  {interests.curious.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {interests.curious.body}
                </p>
              </div>

              {/* Hobbies — spans 2 cols */}
              <div className="md:col-span-2 p-7 rounded-[2rem] border bg-white dark:bg-slate-800/40 border-slate-100 dark:border-slate-700 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{interests.hobbies.emoji}</span>
                  <div>
                    <h3 className="text-base font-black mb-2 tracking-tight">
                      {interests.hobbies.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {interests.hobbies.body}
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

            <div className="grid lg:grid-cols-2 gap-6">
              {bookCategories.map((category) => (
                <div
                  key={category.label}
                  className="rounded-[2rem] border overflow-hidden bg-white dark:bg-slate-800/40 border-slate-100 dark:border-slate-700"
                >
                  <div className="px-7 py-5 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-wider uppercase text-blue-500 font-bold">
                      {category.label}
                    </span>
                    <span className="font-mono text-[10px] text-slate-400">
                      {category.books.length} books
                    </span>
                  </div>
                  <ul className="divide-y divide-slate-50 dark:divide-slate-700/50">
                    {category.books.map((book) => (
                      <li
                        key={book.title}
                        className="group px-7 py-3.5 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors duration-200 flex items-center gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/30 group-hover:bg-blue-500 shrink-0 transition-colors duration-200" />
                        <div className="min-w-0">
                          <span className="text-sm font-semibold group-hover:text-blue-500 transition-colors duration-300 block truncate">
                            {book.title}
                          </span>
                          <span className="text-xs text-slate-400 block mt-0.5">
                            {book.author}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
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
