import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, site } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the link of the section currently in view.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const linkClass = (href) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      active === href ? 'text-accent' : 'text-muted hover:text-ink'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || open
          ? 'border-b border-line bg-bg/90 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Main">
        <a
          href="#home"
          className="flex items-center gap-2 font-mono text-lg font-medium text-ink"
          onClick={() => setOpen(false)}
        >
          <img src={site.logo} alt="" className="h-8 w-8 object-contain" />
          {site.brand}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={linkClass(link.href)}
                aria-current={active === link.href ? 'true' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary hidden md:inline-flex">
          Let&apos;s Talk
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink transition hover:border-accent md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden ${open ? 'block' : 'hidden'}`}
      >
        <ul className="container-x flex flex-col gap-1 pb-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`block ${linkClass(link.href)} py-3`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a href="#contact" className="btn-primary w-full" onClick={() => setOpen(false)}>
              Let&apos;s Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
