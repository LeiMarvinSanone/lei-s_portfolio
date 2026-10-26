import { certificates } from '../data/certificates'
import CertificateCard from './CertificateCard'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Certificates and achievements"
          title="Learning and recognition"
          lead="A collection of certificates, completed courses, and achievements that reflect my continuous learning, skill development, and growth as a developer and student."
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <li key={certificate.id}>
              <Reveal delay={(index % 3) * 70} className="h-full">
                <CertificateCard certificate={certificate} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
