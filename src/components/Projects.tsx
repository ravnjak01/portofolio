
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import projects from '../data/projects'

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-lime-400">
            PORTFOLIO / 02
          </p>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Selected Projects
                <span className="text-lime-400">.</span>
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-zinc-400">
                A collection of projects I've built, exploring
                full-stack development, backend systems and
                machine learning.
              </p>
            </div>

            <span className="text-sm text-zinc-500">
              {String(projects.length).padStart(2, '0')} Projects
            </span>
          </div>
        </div>

        {/* Project cards */}
        <div className="grid gap-6 lg:grid-cols-2">

          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className={`group flex min-h-[360px] flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/40 sm:p-9 ${
                project.slug === 'tendergo'
                  ? 'border-lime-400/20 bg-[#181A1F] lg:col-span-2'
                  : 'border-white/10 bg-[#15161A]'
              }`}
            >

              {/* Top */}
              <div className="mb-10 flex items-center justify-between">
                <span className="text-sm font-medium tracking-widest text-zinc-500">
                  PROJECT / {project.number}
                </span>

                {project.slug === 'tendergo' && (
                  <span className="rounded-full border border-lime-400/20 bg-lime-400/5 px-3 py-1.5 text-xs font-medium text-lime-400">
                    FEATURED PROJECT
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="mb-3 text-sm text-lime-400">
                  {project.category}
                </p>

                <h3 className="text-3xl font-bold tracking-tight text-white transition-colors group-hover:text-lime-400 sm:text-4xl">
                  {project.name}
                </h3>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="mt-8">
                  <p className="mb-4 text-xs font-medium tracking-widest text-zinc-500">
                    TECHNOLOGIES
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* View details */}
              <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                <span className="text-sm font-medium text-white transition-colors group-hover:text-lime-400">
                  View project details
                </span>

                <ArrowUpRight
                  size={20}
                  className="text-zinc-500 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime-400"
                />
              </div>

            </Link>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects
