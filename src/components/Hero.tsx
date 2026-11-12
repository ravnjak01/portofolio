import { ArrowDown, ArrowUpRight } from 'lucide-react'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pt-24" // Dodan bg-black da osiguraš pozadinu
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 py-20 lg:grid-cols-2">

        {/* Left content */}
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-lime-400" />
            <span className="text-xs font-medium tracking-wide text-lime-400">
              OPEN TO OPPORTUNITIES
            </span>
          </div>

          <p className="mb-4 text-lg text-zinc-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Muharem
            <br />
            <span className="text-zinc-500">Ravnjak.</span>
          </h1>

          <h2 className="mt-8 text-xl font-medium text-zinc-200 sm:text-2xl">
            Software Engineer & Full-Stack Developer
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-zinc-400">
            I build modern web and mobile applications,
            focusing on backend development, scalable systems
            and practical software solutions.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-300"
            >
              Explore my work
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:border-white/40"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <a
              href="https://github.com/ravnjak01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-zinc-400 transition hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            <span className="h-5 w-px bg-white/20" />

            <span className="text-sm text-zinc-500">
              Based in Bosnia and Herzegovina
            </span>
          </div>
        </div>

        {/* Right content */}
        <div className="relative hidden lg:block">
          <div className="absolute -inset-10 rounded-full bg-lime-400/5 blur-3xl" />

          <div className="relative rounded-2xl border border-white/10 bg-[#18191D] p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="text-sm font-medium text-zinc-400">
                PROFILE / 01
              </span>
              <span className="text-xs text-zinc-600">
                DEVELOPER
              </span>
            </div>

            <div className="py-10">
              <p className="text-sm text-zinc-500">
                Areas of focus
              </p>

              <h3 className="mt-3 text-3xl font-semibold text-white">
                Building reliable
                <br />
                digital solutions.
              </h3>

              <p className="mt-5 leading-7 text-zinc-400">
                From backend architecture to user-facing
                applications, I enjoy turning ideas into
                functional software.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="mb-4 text-xs font-medium tracking-widest text-zinc-500">
                TECHNOLOGIES
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  'C#',
                  '.NET',
                  'React',
                  'TypeScript',
                  'Flutter',
                  'Python',
                  'SQL',
                  'Docker',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator - PREMJEŠTEN OVDJE (sada je ispravno unutar <section relative>) */}
      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-zinc-500 transition hover:text-lime-400 md:block"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  )
}

export default Hero