import { Github, Instagram, Mail } from 'lucide-react'
import { navLinks, site } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  const socials = [
    { label: 'GitHub', href: site.github, Icon: Github },
    { label: 'Instagram', href: site.instagram, Icon: Instagram },
    { label: 'Email', href: `mailto:${site.email}`, Icon: Mail },
  ]

  return (
    <footer className="relative border-t border-line bg-surface">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
        aria-hidden="true"
      />
      <div className="container-x flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="flex items-center gap-2 font-mono text-lg">
            <img src={site.logo} alt="" className="h-8 w-8 object-contain" />
            {site.brand}
          </p>
          <p className="mt-2 text-sm text-muted">
            &copy; {year} {site.name}. All rights reserved.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex items-center gap-3">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-muted transition hover:border-accent hover:text-accent"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}