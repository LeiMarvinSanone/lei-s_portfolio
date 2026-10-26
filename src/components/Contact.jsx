import { useState } from 'react'
import { AlertCircle, CheckCircle2, Github, Instagram, Mail, Send } from 'lucide-react'
import { site } from '../data/site'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const emptyForm = { name: '', email: '', message: '' }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!emailPattern.test(values.email)) errors.email = 'Please enter a valid email address.'
  if (values.message.trim().length < 10) errors.message = 'Please write at least 10 characters.'
  return errors
}

const fieldClass = (hasError) =>
  `mt-2 w-full rounded-xl border bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40 ${
    hasError ? 'border-red-400/60' : 'border-line'
  }`

export default function Contact() {
  const [values, setValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      setStatus({ type: 'error', message: 'Please fix the highlighted fields and try again.' })
      return
    }

    // Real submission: only used when a form service URL is set in src/data/site.js.
    if (site.formEndpoint) {
      setStatus({ type: 'loading', message: 'Sending...' })
      try {
        const response = await fetch(site.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        })
        if (!response.ok) throw new Error('Request failed')
        setValues(emptyForm)
        setStatus({ type: 'success', message: 'Thanks! Your message has been sent.' })
      } catch {
        setStatus({
          type: 'error',
          message: `Something went wrong. Please email me directly at ${site.email}.`,
        })
      }
      return
    }

    // Fallback: no backend configured, so open the visitor's email app instead.
    const subject = encodeURIComponent(`Portfolio message from ${values.name}`)
    const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name} (${values.email})`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setStatus({
      type: 'success',
      message: 'Your email app should open with the message ready to send.',
    })
  }

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          lead="I'm open to collaborations, internships, opportunities to gain knowledge and improvements, and conversations about backend and full-stack development. Reach out through any of the options below."
        />

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="card card-hover flex items-center gap-4 p-5"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Mail size={20} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted">Email</span>
                    <span className="block truncate font-medium">{site.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover flex items-center gap-4 p-5"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Github size={20} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted">GitHub</span>
                    <span className="block font-medium">View my repositories</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover flex items-center gap-4 p-5"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Instagram size={20} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted">Instagram</span>
                    <span className="block font-medium">Follow me</span>
                  </span>
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8">
              <p className="mb-6 text-sm text-muted">
                {site.formEndpoint
                  ? 'Send me a message and I will get back to you.'
                  : 'No form service is connected yet, so sending will open your email app with the message prefilled.'}
              </p>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={fieldClass(errors.name)}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-300">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={fieldClass(errors.email)}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-300">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`${fieldClass(errors.message)} resize-y`}
                    placeholder="Tell me about your project or opportunity"
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-300">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="btn-primary mt-6 w-full disabled:opacity-60 sm:w-auto"
              >
                <Send size={16} aria-hidden="true" />
                {site.formEndpoint ? 'Send Message' : 'Open in Email App'}
              </button>

              <div role="status" aria-live="polite" className="mt-4 min-h-[1.5rem] text-sm">
                {status.type === 'success' && (
                  <p className="flex items-start gap-2 text-accent-soft">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                    {status.message}
                  </p>
                )}
                {status.type === 'error' && (
                  <p className="flex items-start gap-2 text-red-300">
                    <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                    {status.message}
                  </p>
                )}
                {status.type === 'loading' && <p className="text-muted">{status.message}</p>}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
