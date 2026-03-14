import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section";
import { Footer } from "@/components/footer";
import { TimelineItem } from "@/components/timeline-item";
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

              <StaggerContainer className="space-y-6 md:space-y-8">
                {experience.map((job, i) => (
                  <StaggerItem key={job.company}>
                    <TimelineItem job={job} index={i} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <p className="text-[13px] text-slate-400 dark:text-slate-500 mt-8 text-center">
              Previous experience includes DXM Technology (Founder), Perlink Consulting, FGV, and A&C Tecnologia.
            </p>
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

            <div className="grid lg:grid-cols-2 gap-6">
              {bookCategories.map((category) => {
                const featured = category.books.filter((b) => b.featured);
                const others = category.books.filter((b) => !b.featured);

                return (
                  <div key={category.label} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-wider uppercase text-blue-500 font-bold">
                        {category.label}
                      </span>
                      <span className="font-mono text-[10px] text-slate-400">
                        {category.books.length} books
                      </span>
                    </div>

                    {/* Featured books — accent bar + inline */}
                    <div className="space-y-1">
                      {featured.map((book) => (
                        <a
                          key={book.title}
                          href={`https://www.google.com/search?q=${encodeURIComponent(`${book.title} ${book.author}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2.5 py-1 hover:translate-x-1 transition-transform duration-200"
                        >
                          <div className="w-0.5 h-4 rounded-full bg-blue-500/25 group-hover:bg-blue-500 transition-colors duration-200 shrink-0" />
                          <span className="text-[13px] font-bold group-hover:text-blue-500 transition-colors duration-200 truncate">
                            {book.title}
                          </span>
                          <span className="text-[11px] text-slate-400 dark:text-slate-500 shrink-0 hidden sm:inline">
                            {book.author}
                          </span>
                        </a>
                      ))}
                    </div>

                    {/* Other books — compact flowing text */}
                    {others.length > 0 && (
                      <div className="px-1 flex flex-wrap gap-x-1 gap-y-0.5 leading-relaxed">
                        {others.map((book, i) => (
                          <span key={book.title} className="inline">
                            <a
                              href={`https://www.google.com/search?q=${encodeURIComponent(`${book.title} ${book.author}`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[13px] text-slate-400 dark:text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                            >
                              {book.title}
                            </a>
                            {i < others.length - 1 && (
                              <span className="text-slate-200 dark:text-slate-700/70 mx-0.5">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <p className="text-[13px] text-slate-400 dark:text-slate-500 mt-6 text-center">
              ...and many more fiction and nonfiction. Currently 65% into my personal goal of reading all{" "}
              <a
                href="https://en.wikipedia.org/wiki/Hugo_Award_for_Best_Novel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Hugo Award winners
              </a>
              .
            </p>
          </section>
        </AnimatedSection>

        <Footer />
      </main>
    </div>
  );
}
