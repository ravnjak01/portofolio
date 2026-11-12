
import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import projects from '../data/projects'

function ProjectDetails() {
  const { slug } = useParams()

  const project = projects.find(
    (item) => item.slug === slug
  )

 const [activeImage, setActiveImage] = useState<number | null>(null)

  if (!project) {
    return <Navigate to="/#projects" replace />
  }

  const showPrevious = () => {
  setActiveImage((current) => {
    if (current === null) return null

    return current === 0
      ? project.gallery.length - 1
      : current - 1
  })
}

const showNext = () => {
  setActiveImage((current) => {
    if (current === null) return null

    return current === project.gallery.length - 1
      ? 0
      : current + 1
  })
}

  return (
    <main className="min-h-screen bg-[#101114] px-6 pb-24 pt-32">

      <div className="mx-auto max-w-5xl">

        {/* Back button */}
        <Link
          to="/#projects"
          className="mb-12 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-lime-400"
        >
          <ArrowLeft size={17} />
          Back to projects
        </Link>

        {/* Project header */}
        <div className="border-b border-white/10 pb-12">

          <p className="mb-5 text-sm font-medium tracking-[0.2em] text-lime-400">
            PROJECT / {project.number}
          </p>

          <p className="mb-3 text-sm text-zinc-500">
            {project.category}
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            {project.name}
            <span className="text-lime-400">.</span>
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
            {project.description}
          </p>

          {/* GitHub */}
         {project.githubUrl && (
  <a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub repository"
    className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:border-lime-400/50 hover:text-lime-400"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
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

    View on GitHub

    <ArrowUpRight size={17} />
  </a>
)}

        </div>

        {/* Technologies */}
        <section className="border-b border-white/10 py-12">
          <p className="mb-6 text-xs font-medium tracking-[0.2em] text-zinc-500">
            TECHNOLOGIES
          </p>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Key features */}
        <section className="border-b border-white/10 py-12">
          <p className="mb-8 text-xs font-medium tracking-[0.2em] text-zinc-500">
            KEY FEATURES
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            {project.features.map((feature, index) => (
              <div
                key={feature}
                className="flex items-start gap-4"
              >
                <span className="text-sm font-medium text-lime-400">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <p className="text-sm leading-7 text-zinc-300">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section className="border-b border-white/10 py-12">
          <p className="mb-5 text-xs font-medium tracking-[0.2em] text-zinc-500">
            ARCHITECTURE
          </p>

          <div className="space-y-3">
  {project.architecture.map((item) => (
    <div
      key={item.layer}
      className="flex flex-col gap-1 rounded-xl border border-white/10 bg-[#181A1F] p-5 sm:flex-row sm:items-center sm:gap-6"
    >
      <span className="w-28 shrink-0 text-xs font-medium tracking-[0.2em] text-lime-400">
        {item.layer.toUpperCase()}
      </span>
      <p className="text-sm leading-7 text-zinc-300">
        {item.description}
      </p>
    </div>
  ))}
</div>
        </section>

        {/* Gallery */}
        <section className="py-12">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-lime-400">
                VISUAL SHOWCASE
              </p>

              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Project Gallery<span className="text-lime-400">.</span>
              </h2>
            </div>

            <span className="text-sm text-zinc-500">
              {project.gallery.length} Images
            </span>
          </div>

            {}
          <div className="grid gap-6 sm:grid-cols-2">

            {project.gallery.map((image, index) => {
      const isMobile = image.isMobile; 

      return (
        <button
          key={image.src}
          onClick={() => setActiveImage(index)}
          className="group overflow-hidden rounded-xl border border-white/10 bg-[#181A1F] text-left transition hover:border-lime-400/40 flex flex-col justify-between"
        >
          <div className={`overflow-hidden flex items-center justify-center bg-black/40 ${isMobile ? 'aspect-[9/16] max-h-[450px] p-4' : 'aspect-video'}`}>
            <img
              src={image.src}
              alt={image.title}
              loading="lazy"
              className={`transition duration-500 group-hover:scale-105 ${
                isMobile 
                  ? 'h-full w-auto object-contain rounded-lg shadow-xl border border-white/10' // Mobilne slike izgledaju kao pravi telefon
                  : 'h-full w-full object-cover object-top' // Desktop slike ostaju preko cijelog okvira
              }`}
            />
          </div>

          <div className="flex items-center justify-between p-4 mt-auto border-t border-white/5">
            <span className="text-sm text-zinc-300">
              {image.title}
            </span>

            <ArrowUpRight
              size={17}
              className="text-zinc-500 transition group-hover:text-lime-400"
            />
          </div>
        </button>
      )
    })}

          </div>
        </section>

        {/* Bottom navigation */}
        <div className="border-t border-white/10 pt-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-lime-400"
          >
            <ArrowLeft size={17} />
            Back to all projects
          </Link>
        </div>

      </div>

      {/* Image lightbox */}
      {activeImage !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-5"
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={() => setActiveImage(null)}
            aria-label="Close image"
            className="absolute right-6 top-6 text-white transition hover:text-lime-400"
          >
            <X size={28} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              showPrevious()
            }}
            aria-label="Previous image"
            className="absolute left-3 z-10 rounded-full border border-white/20 bg-black/50 p-3 text-white transition hover:text-lime-400 sm:left-8"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            className="max-h-[85vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.gallery[activeImage].src}
              alt={project.gallery[activeImage].title}
              className="max-h-[75vh] max-w-full rounded-lg object-contain"
            />

            <p className="mt-4 text-center text-sm text-zinc-300">
              {project.gallery[activeImage].title}
              {' · '}
              {activeImage + 1} / {project.gallery.length}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            aria-label="Next image"
            className="absolute right-3 z-10 rounded-full border border-white/20 bg-black/50 p-3 text-white transition hover:text-lime-400 sm:right-8"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

    </main>
  )
}

export default ProjectDetails
