import { contact, cta } from '../data/content';
import { LinkedInIcon, MailIcon } from '../components/Icons';

export default function Contact() {
  return (
    <section id="contact" className="portfolio-cta">
      <div className="portfolio-cta-container">
        <div className="portfolio-cta-accent-line portfolio-cta-reveal" data-reveal="is-visible" />
        <h2 className="portfolio-cta-heading portfolio-cta-reveal delay-1" data-reveal="is-visible">
          {cta.heading}
        </h2>
        <p className="portfolio-cta-description portfolio-cta-reveal delay-2" data-reveal="is-visible">
          {cta.description}
        </p>
        <div className="portfolio-cta-actions portfolio-cta-reveal delay-3" data-reveal="is-visible">
          <a href={`mailto:${contact.email}`} className="portfolio-cta-button">
            {cta.buttonLabel}
          </a>
          <div className="portfolio-cta-links">
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="portfolio-cta-link">
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
            <a href={`mailto:${contact.email}`} className="portfolio-cta-link">
              <MailIcon />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
