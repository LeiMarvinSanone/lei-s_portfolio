import { ArrowRight, Github, Instagram, Mail, User } from 'lucide-react'
import { site } from '../data/site'
import Typewriter from './Typewriter'

const socials = [
  { label: 'GitHub', href: site.github, Icon: Github },
  { label: 'Instagram', href: site.instagram, Icon: Instagram },
  { label: 'Email', href: `mailto:${site.email}`, Icon: Mail },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up">
          <p className="mb-4 font-mono text-sm text-accent">Hello, I&apos;m</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <Typewriter text={site.name} />
          </h1>
          <p className="mt-4 text-lg font-medium text-accent-soft sm:text-xl">{site.title}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{site.intro}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn-primary">
              View My Projects
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
            </a>
          </div>

          <ul className="mt-8 flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-muted transition hover:border-accent hover:text-accent hover:shadow-glow"
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-first flex justify-center animate-float lg:order-last">
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-full bg-accent/20 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-accent/60 bg-card shadow-glow sm:h-64 sm:w-64 lg:h-80 lg:w-80">
              {site.photo ? (
                <img
                  src={site.photo}
                  alt={`Portrait of ${site.name}`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-accent/60">
                  <User size={72} aria-hidden="true" />
                  <span className="font-mono text-xs text-muted">Your photo here</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}