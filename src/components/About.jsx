import { about } from '../data/site'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="section bg-surface">
      <div className="container-x">
        <SectionHeading eyebrow="About me" title="Backend-focused, building complete applications" />

        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {about.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <dl className="grid grid-cols-3 gap-3 pt-4">
              {about.highlights.map((item) => (
                <div key={item.label} className="card p-4 text-center">
                  <dt className="order-2 mt-1 text-xs text-muted">{item.label}</dt>
                  <dd className="text-2xl font-bold text-accent">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2">
            {about.focus.map((item, index) => (
              <li key={item.title}>
                <Reveal delay={index * 80} className="h-full">
                  <div className="card card-hover h-full p-5">
                    <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon name={item.icon} size={20} />
                    </span>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted">{item.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
