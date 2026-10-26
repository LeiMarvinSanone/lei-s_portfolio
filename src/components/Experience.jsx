import { experience } from '../data/experience'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section bg-surface">
      <div className="container-x">
        <SectionHeading
          eyebrow="Experience and education"
          title="My journey so far"
          lead="A summary of my professional experience, internships, on going courses, projects, and educational background, highlighting the skills and knowledge I've gained and still acquiring along the way."
        />

        <ol className="relative ml-3 space-y-8 border-l border-line">
          {experience.map((item, index) => (
            <li key={item.id} className="pl-8">
              <span
                className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg shadow-glow"
                aria-hidden="true"
              />
              <Reveal delay={index * 80}>
                <div className="card p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent">{item.type}</p>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-accent-soft">
                    {item.organization} &middot; {item.period}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
