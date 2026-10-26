import {
  BrainCircuit,
  Database,
  Layout,
  Lightbulb,
  Server,
  ShieldCheck,
  Wrench,
} from 'lucide-react'

const icons = { AI: BrainCircuit, Database, Layout, Lightbulb, Server, ShieldCheck, Wrench }

// Resolves an icon by name (used by the data files) so data stays plain JavaScript.
export default function Icon({ name, ...props }) {
  const Component = icons[name] ?? Lightbulb
  return <Component aria-hidden="true" {...props} />
}
