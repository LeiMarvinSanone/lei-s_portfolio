import { Award } from 'lucide-react'

export default function CertificateCard({ certificate }) {
  return (
    <article className="card card-hover flex h-full flex-col overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden border-b border-line bg-surface">
        {certificate.image ? (
          <img
            src={certificate.image}
            alt={`Certificate: ${certificate.title}`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-accent/60">
            <Award size={40} aria-hidden="true" />
            <span className="sr-only">Certificate preview placeholder</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold leading-snug">{certificate.title}</h3>
        <p className="mt-1 text-sm text-accent-soft">{certificate.issuer}</p>

        <dl className="mt-3 space-y-1 text-sm text-muted">
          <div className="flex gap-2">
            <dt className="sr-only">Date issued</dt>
            <dd>{certificate.date}</dd>
          </div>
          {certificate.credentialId && (
            <div className="flex gap-2">
              <dt>Credential ID:</dt>
              <dd className="font-mono text-xs leading-5">{certificate.credentialId}</dd>
            </div>
          )}
        </dl>
      </div>
    </article>
  )
}