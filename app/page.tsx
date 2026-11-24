import ThemeToggle from "@/components/ThemeToggle";
import { portfolio } from "@/Data/portfolio";



export default function Home() {
  return (
    <main
      id="home"
      className="min-h-screen overflow-hidden bg-[#080910] text-white selection:bg-violet-500/40"
    >
      
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#080910]/85 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500 text-lg font-bold shadow-lg shadow-violet-500/20">
              D
            </span>
            <span className="text-lg font-semibold tracking-tight">
              devfolio<span className="text-violet-400">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <a className="transition hover:text-white" href="#about">About</a>
            <a className="transition hover:text-white" href="#projects">Work</a>
            <a className="transition hover:text-white" href="#skills">Skills</a>
          </div>
<ThemeToggle />
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium transition hover:border-violet-400/60 hover:bg-violet-500/10"
          >
            Let&apos;s talk <span className="ml-1 text-violet-300">↗</span>
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[800px] -translate-x-1/2 rounded-full bg-violet-700/[0.13] blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
        />

        <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 pb-24 pt-20 sm:px-8 sm:pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-32 lg:pt-32">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 text-xs font-medium tracking-wide text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              AVAILABLE FOR NEW OPPORTUNITIES
            </div>

            <p className="mt-9 text-sm font-medium tracking-[0.22em] text-violet-300 uppercase">
              Hello, I&apos;m {portfolio.name}
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-7xl xl:text-[88px]">
              {portfolio.tagline}
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
              {portfolio.role} crafting thoughtful interfaces, reliable
              applications and digital experiences that make a difference.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-violet-500 px-6 py-3.5 text-sm font-semibold shadow-xl shadow-violet-950/40 transition hover:-translate-y-0.5 hover:bg-violet-400"
              >
                Explore my work
                <span className="transition group-hover:translate-x-1">↗</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-zinc-200 transition hover:border-white/30 hover:bg-white/[0.04]"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-500">
              <span>⌖ {portfolio.location}</span>
              <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />
              <span>Open to remote work</span>
            </div>
          </div>

          {/* Developer profile visual */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-br from-violet-600/20 via-transparent to-sky-500/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#10111c]/95 p-5 shadow-2xl shadow-black/40 sm:p-7">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-xs text-zinc-500">developer.tsx</span>
              </div>

              <div className="py-7 font-mono text-sm leading-8 sm:text-base">
                <p className="text-zinc-500">{"// A little about me"}</p>
                <p>
                  <span className="text-fuchsia-300">const</span>{" "}
                  <span className="text-sky-300">developer</span> = {"{"}
                </p>
                <p className="pl-5">
                  <span className="text-violet-300">name</span>:{" "}
                  <span className="text-emerald-300">&quot;{portfolio.name}&quot;</span>,
                </p>
                <p className="pl-5">
                  <span className="text-violet-300">role</span>:{" "}
                  <span className="text-emerald-300">&quot;{portfolio.role}&quot;</span>,
                </p>
                <p className="pl-5">
                  <span className="text-violet-300">passion</span>:{" "}
                  <span className="text-emerald-300">&quot;Building products&quot;</span>,
                </p>
                <p className="pl-5">
                  <span className="text-violet-300">learning</span>:{" "}
                  <span className="text-emerald-300">&quot;Always&quot;</span>
                </p>
                <p>{"};"}</p>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-zinc-500">CURRENTLY BUILDING</p>
                    <p className="mt-2 font-medium">Something meaningful</p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-xl text-violet-300">
                    ✳
                  </span>
                </div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-violet-500 to-sky-400" />
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript"].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute -right-3 top-12 hidden rounded-2xl border border-white/10 bg-[#181827] px-4 py-3 shadow-xl sm:block lg:-right-8">
              <p className="text-xs text-zinc-500">FOCUS</p>
              <p className="mt-1 text-sm font-medium">Build. Learn. Ship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y border-white/[0.07] bg-white/[0.018]">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-20 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:py-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-violet-300 uppercase">
              01 — About me
            </p>
            <h2 className="mt-5 max-w-sm text-3xl font-semibold tracking-tight sm:text-4xl">
              Turning ideas into useful experiences.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-zinc-300">
              {portfolio.about}
            </p>
            <p className="mt-5 leading-7 text-zinc-500">
              I enjoy turning complex ideas into clear, accessible and useful
              digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-violet-300 uppercase">
              02 — Selected work
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              Things I&apos;ve created.
            </h2>
          </div>
          <p className="max-w-md leading-7 text-zinc-500">
            A selection of projects exploring product design,
            application development and practical problem-solving.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.04]"
            >
              <div className={`relative m-3 flex h-52 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${project.style}`}>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="relative w-[78%] rounded-xl border border-white/20 bg-[#11121c]/85 p-4 shadow-2xl backdrop-blur-md transition duration-300 group-hover:scale-[1.03]">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs text-zinc-400">{project.title}</span>
                    <span className="text-sm text-violet-300">↗</span>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <div className="h-16 w-1/3 rounded-lg bg-white/[0.08]" />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 w-4/5 rounded bg-white/15" />
                      <div className="h-2 w-full rounded bg-white/[0.08]" />
                      <div className="h-2 w-3/5 rounded bg-white/[0.08]" />
                      <div className="h-5 w-1/2 rounded-md bg-violet-400/40" />
                    </div>
                  </div>
                </div>
                <span className="absolute bottom-4 right-5 text-2xl text-white/60">
                  {project.symbol}
                </span>
              </div>

              <div className="p-5 pt-3 sm:p-6">
                <p className="text-xs tracking-wide text-violet-300">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  Replace this preview and description with a real project,
                  its purpose and the value it provides.
                </p>
                <div className="mt-5 border-t border-white/[0.08] pt-4 text-xs text-zinc-400">
                  {project.stack}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-y border-white/[0.07] bg-white/[0.018]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8">
          <p className="text-xs font-semibold tracking-[0.22em] text-violet-300 uppercase">
            03 — My toolkit
          </p>
          <div className="mt-5 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              The tools behind the work.
            </h2>
            <div className="flex flex-wrap gap-3">
              {portfolio.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl border border-white/10 bg-[#10111a] px-4 py-3 text-sm text-zinc-300 transition hover:border-violet-400/40 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="relative overflow-hidden rounded-[32px] border border-violet-400/20 bg-[#10101b] p-8 sm:p-14 lg:p-16">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-36 h-96 w-96 rounded-full bg-violet-600/20 blur-[100px]" />
          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-violet-300 uppercase">
              04 — Let&apos;s connect
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Have a good idea?
              <br />
              <span className="text-zinc-500">Let&apos;s make it real.</span>
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-zinc-400">
              Have a project, an opportunity or just want to say hello?
              My inbox is open.
            </p>
            <a
              href={`mailto:${portfolio.email}`}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-violet-200"
            >
              Send me an email <span>↗</span>
            </a>
            <div className="mt-5 flex flex-wrap gap-4 text-sm text-zinc-400">
              <a href={portfolio.social.github} target="_blank" rel="noreferrer" className="transition hover:text-white">GitHub ↗</a>
              <a href={portfolio.social.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">LinkedIn ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-7 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <a href="#home" className="font-semibold text-zinc-300">
            devfolio<span className="text-violet-400">.</span>
          </a>
        <p>© 2026 {portfolio.name}. Crafted with care.</p>
          <a href="#home" className="transition hover:text-white">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
