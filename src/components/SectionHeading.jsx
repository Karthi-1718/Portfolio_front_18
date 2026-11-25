export default function SectionHeading({ eyebrow, title, children, id }) {
  return <div className="section-heading" id={id}><p className="eyebrow"><span />{eyebrow}</p><h2>{title}</h2>{children && <p className="section-intro">{children}</p>}</div>;
}
