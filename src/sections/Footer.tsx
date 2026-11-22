import { contact, footerLinks, site } from '../data/content';
import { ArrowUpIcon, LinkedInRoundedIcon, MailIcon } from '../components/Icons';

export default function Footer() {
  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-wrapper">
        <div className="footer-header">
          <h2 className="footer-title">{site.name}</h2>
          <p className="footer-subtitle">{site.tagline}</p>
        </div>

        <nav className="footer-navigation" aria-label="Footer Navigation">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="footer-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-meta">
          <div className="footer-social">
            <a href={`mailto:${contact.email}`} className="social-link" aria-label="Email">
              <MailIcon />
              <span>Email</span>
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <LinkedInRoundedIcon />
              <span>LinkedIn</span>
            </a>
          </div>

          <p className="footer-copy">{site.copyright}</p>

          <button className="back-to-top" aria-label="Scroll back to top" onClick={toTop}>
            <span>Back to Top</span>
            <ArrowUpIcon />
          </button>
        </div>
      </div>
    </footer>
  );
}
