import { about } from '../data/content';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <p className="about-eyebrow">{about.eyebrow}</p>
          <h2 className="about-title">
            {about.titleStart}
            <span>{about.titleHighlight}</span>
          </h2>
          {about.paragraphs.map((p) => (
            <p key={p} className="about-text">
              {p}
            </p>
          ))}
          <div className="about-highlights">
            {about.highlights.map((h) => (
              <span key={h} className="about-highlight">
                {h}
              </span>
            ))}
          </div>
        </div>
        <div className="about-card">
          <div className="about-stat">
            <span className="about-stat-number">{about.statNumber}</span>
            <span className="about-stat-label">
              {about.statLabel[0]}
              <br />
              {about.statLabel[1]}
            </span>
          </div>
          <h3 className="about-tools-title">{about.toolsTitle}</h3>
          <div className="about-tools">
            {about.tools.map((t) => (
              <div key={t.name} className="about-tool">
                <span className="about-tool-dot">{t.short}</span>
                {t.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
