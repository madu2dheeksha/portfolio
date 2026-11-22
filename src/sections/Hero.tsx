import { hero, resumeUrl, site } from '../data/content';

export default function Hero() {
  return (
    <section id="home" className="portfolio-hero">
      <div className="portfolio-hero-container">
        <div className="hero-content-wrapper">
          <h1 className="hero-headline">{site.name}</h1>
          <p className="hero-body-text">{site.tagline}</p>
          <div className="hero-cta-container">
            <a href={hero.buttonHref} className="hero-primary-btn">
              {hero.buttonLabel}
            </a>
            {resumeUrl && (
              <a href={resumeUrl} className="hero-secondary-btn" download>
                Download Resume
              </a>
            )}
          </div>
        </div>
        <div className="hero-visual-wrapper">
          <div className="paper-cutout-accent" />
          <div className="portrait-container">
            <img
              src={site.profileImage}
              alt={site.profileAlt}
              className="portrait-image"
              width={900}
              height={1200}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
