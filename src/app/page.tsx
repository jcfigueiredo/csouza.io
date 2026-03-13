import Image from "next/image";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section";
import { Footer } from "@/components/footer";
import { experience } from "@/data/experience";
import { bookCategories } from "@/data/books";
import { focusAreas, interests } from "@/data/site";

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

            <StaggerContainer className="flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <StaggerItem key={area.label}>
                  <div className="group relative px-5 py-3 rounded-2xl border transition-all duration-300 cursor-default bg-white dark:bg-slate-800/40 border-slate-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500/40 hover:shadow-md hover:shadow-blue-500/5 hover:-translate-y-0.5">
                    <span className="mr-2">{area.emoji}</span>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {area.label}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
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

              <StaggerContainer className="space-y-12 md:space-y-16">
                {experience.map((job, i) => {
                  const isLeft = i % 2 === 0;

                  return (
                    <StaggerItem key={job.company}>
                      <div className="relative md:grid md:grid-cols-2 md:gap-12">
                        {/* Timeline dot */}
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 z-10 items-center justify-center">
                          <div className="w-4 h-4 rounded-full border-[3px] border-blue-500 dark:border-blue-400 bg-[var(--bg)] dark:bg-[var(--bg-dark)]" />
                        </div>

                        {/* Card */}
                        <div
                          className={`group p-7 rounded-[2rem] border transition-all duration-500 hover:-translate-y-1 bg-white dark:bg-slate-800/40 border-slate-100 dark:border-slate-700 hover:shadow-xl dark:hover:bg-slate-800/60 ${
                            isLeft
                              ? "md:col-start-1 md:col-end-2"
                              : "md:col-start-2 md:col-end-3"
                          }`}
                        >
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
                            <span className="text-[10px] font-black font-mono text-slate-400 bg-slate-50 dark:bg-slate-900 px-3 py-1 rounded-full border border-slate-100 dark:border-slate-800 shrink-0">
                              {job.period}
                            </span>
                          </div>

                          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                            {job.description}
                          </p>

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

                        {/* Empty space on the other side (desktop only) */}
                        <div
                          className={`hidden md:block ${
                            isLeft
                              ? "md:col-start-2 md:col-end-3"
                              : "md:col-start-1 md:col-end-2 md:row-start-1"
                          }`}
                        />
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
