import "./SectionTitle.css";

export default function SectionTitle({ subtitle, title, center = false }) {
  return (
    <div className={`section-title ${center ? "center" : ""}`}>
      {subtitle && <span className="section-title__subtitle">{subtitle}</span>}
      <h2 className="section-title__title">{title}</h2>
    </div>
  );
}