import { useEffect, useState } from 'react'
import { ChevronDown, ExternalLink, FolderGit2, Github } from 'lucide-react'

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false)
  const detailsId = `project-details-${project.id}`

  const [hovering, setHovering] = useState(false)
  const [tapped, setTapped] = useState(false)
  const [current, setCurrent] = useState(0)
  const previewVisible = hovering || tapped

  const shots = project.screenshots?.length
    ? project.screenshots
    : project.image
      ? [project.image]
      : []

  // While hovering, move to the next screenshot every 1.2 seconds.
  useEffect(() => {
    if (!hovering || shots.length < 2) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const timer = setInterval(() => {
      setCurrent((value) => (value + 1) % shots.length)
    }, 1200)
    return () => clearInterval(timer)
  }, [hovering, shots.length])

  const handleLeave = () => {
    setHovering(false)
    setTapped(false)
    setCurrent(0)
  }

  return (
    <article className="card card-hover flex h-full flex-col overflow-hidden">
      <button
        type="button"
        aria-label={`${previewVisible ? 'Hide' : 'Preview'} screenshots for ${project.title}`}
        className={`group relative block w-full overflow-hidden border-b border-line bg-surface text-left ${
          project.mobile ? 'aspect-[4/3]' : 'aspect-video'
        }`}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={handleLeave}
        onFocus={() => setHovering(true)}
        onBlur={handleLeave}
        onClick={() => {
          if (window.matchMedia('(hover: none)').matches) {
            if (!tapped) setTapped(true)
            else if (shots.length > 1) setCurrent((value) => (value + 1) % shots.length)
            else setTapped(false)
          } else if (shots.length > 1) {
            setCurrent((value) => (value + 1) % shots.length)
          }
        }}
      >
        {shots.length > 0 ? (
          shots.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Screenshot ${index + 1} of ${project.title}`}
              loading="lazy"
              className={`absolute inset-0 h-full w-full transition-all duration-500 ${
                project.mobile ? 'object-contain p-3' : 'object-cover'
              } ${index === current && previewVisible ? 'scale-100 opacity-100' : 'scale-[1.03] opacity-0'}`}
            />
          ))
        ) : (
          <div className="flex h-full w-full items-center justify-center text-accent/60">
            <FolderGit2 size={44} aria-hidden="true" />
            <span className="sr-only">Image placeholder for {project.title}</span>
          </div>
        )}

        {shots.length > 1 && previewVisible && (
          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5" aria-hidden="true">
            {shots.map((src, index) => (
              <span
                key={src}
                className={`h-1.5 w-1.5 rounded-full transition ${
                  index === current ? 'bg-accent' : 'bg-ink/40'
                }`}
              />
            ))}
          </div>
        )}

        <span className="absolute left-3 top-3 rounded-full border border-line bg-bg/80 px-3 py-1 font-mono text-xs text-accent backdrop-blur">
          {project.category}
        </span>
        {shots.length > 0 && (
          <span className={`absolute inset-0 flex items-center justify-center bg-gradient-to-t from-bg/80 via-bg/25 to-transparent text-center transition-opacity duration-300 ${previewVisible ? 'pointer-events-none opacity-0' : 'opacity-100'}`}>
            <span className="rounded-full border border-line bg-bg/80 px-4 py-2 text-sm font-medium text-ink backdrop-blur">
              {project.title}<span className="ml-2 text-accent">View screenshots</span>
            </span>
          </span>
        )}
        {project.placeholder && (
          <span className="absolute right-3 top-3 rounded-full border border-line bg-bg/80 px-3 py-1 font-mono text-xs text-muted backdrop-blur">
            Placeholder
          </span>
        )}
      </button>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <li key={item} className="badge">
              {item}
            </li>
          ))}
        </ul>

        {project.details && (
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded}
              aria-controls={detailsId}
              className="inline-flex min-h-[44px] items-center gap-1 text-sm font-medium text-accent transition hover:text-accent-soft"
            >
              {expanded ? 'Hide Details' : 'View Details'}
              <ChevronDown
                size={16}
                aria-hidden="true"
                className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
              />
            </button>
            <p
              id={detailsId}
              hidden={!expanded}
              className="mt-1 text-sm leading-relaxed text-muted"
            >
              {project.details}
            </p>
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-3 pt-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-4"
            >
              <Github size={16} aria-hidden="true" />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-4"
            >
              <ExternalLink size={16} aria-hidden="true" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
