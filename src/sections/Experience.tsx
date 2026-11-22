import { experience } from '../data/content';

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-header animate-on-scroll delay-1" data-reveal="is-visible">
          <p className="experience-label">{experience.label}</p>
          <h2 className="experience-title">{experience.title}</h2>
          <p className="experience-meta">{experience.meta}</p>
        </div>
        <div className="experience-content animate-on-scroll delay-2" data-reveal="is-visible">
          <div className="experience-quote-wrapper">
            <span className="experience-quote-mark" aria-hidden="true">
              “
            </span>
            <blockquote className="experience-quote">
              <p>{experience.quote}</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
