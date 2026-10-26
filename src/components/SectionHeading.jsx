export default function SectionHeading({ eyebrow, title, lead }) {
  return (
    <div className="mb-12">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  )
}
