import { useEffect, useState } from 'react';
import { contact, navLinks, site } from '../data/content';
import { LinkedInSquareIcon, MailOutlineIcon } from '../components/Icons';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu if the screen is resized to desktop width.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="navbar-container">
        <div className="navbar-header">
          <a href="#home" className="navbar-logo" aria-label="Madu Dheeksha Home">
            {site.name}
          </a>
          <button
            className="navbar-toggle"
            aria-expanded={open}
            aria-controls="navbar-menu"
            aria-label="Toggle navigation"
            onClick={() => setOpen((o) => !o)}
          >
            <svg className="hamburger-icon" viewBox="0 0 24 24" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
        <div id="navbar-menu" className={`navbar-menu${open ? ' is-open' : ''}`}>
          <div className="navbar-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="navbar-social">
            <a href={contact.linkedin} className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <LinkedInSquareIcon />
            </a>
            <a href={`mailto:${contact.email}`} className="social-link" aria-label="Email">
              <MailOutlineIcon />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
