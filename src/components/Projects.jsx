import { useState } from 'react'
import { projectCategories, projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const visible = filter === 'All' ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="section bg-surface">
      <div className="container-x">
        <SectionHeading
          eyebrow="Featured projects"
          title="Things I have built"
          lead="Here are some of the projects I've developed and collaborated on. I'm continuously learning and building new things, and I'm looking forward to add more projects to this collection as I grow as a developer."
        />

        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className={`min-h-[44px] rounded-full border px-5 text-sm font-medium transition ${
                filter === category
                  ? 'border-accent bg-accent text-bg shadow-glow'
                  : 'border-line text-muted hover:border-accent hover:text-ink'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="text-muted">No projects in this category yet.</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project, index) => (
              <li key={project.id}>
                <Reveal delay={index * 70} className="h-full">
                  <ProjectCard project={project} />
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
