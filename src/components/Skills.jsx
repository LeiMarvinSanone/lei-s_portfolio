import { skillCategories } from '../data/skills'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Technical skills"
          title="Tools and technologies I work with"
          lead="A snapshot of the technologies I use to build and ship applications."
        />

        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <li key={category.title}>
              <Reveal delay={index * 70} className="h-full">
                <div className="card card-hover h-full p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon name={category.icon} size={20} />
                    </span>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="badge">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
