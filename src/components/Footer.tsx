'use client';

import Logo from './Logo';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
];

const services = [
  'Website Design & Development',
  'Logo Design & Branding',
  'SEO',
  'Social Media Marketing',
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <Logo size={30} />
          <p>
            Professional web design, development, branding &amp; digital marketing
            services for UK businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  id={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  → {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="footer-heading">Contact Us</h3>

          <div className="footer-contact-item">
            <span className="icon" aria-hidden="true">📧</span>
            <a href="mailto:info@zeekazwebdesign.co.uk" id="footer-email">
              info@zeekazwebdesign.co.uk
            </a>
          </div>

          <div className="footer-contact-item">
            <span className="icon" aria-hidden="true">📞</span>
            <a href="tel:07400727047" id="footer-phone">
              07400 727047
            </a>
          </div>

          <div className="footer-contact-item">
            <span className="icon" aria-hidden="true">🌐</span>
            <p>zeekazwebdesign.co.uk</p>
          </div>

          <div className="footer-contact-item" style={{ marginTop: '16px' }}>
            <span className="icon" aria-hidden="true">⚙️</span>
            <div>
              <p style={{ fontSize: '0.82rem', marginBottom: '6px', color: 'var(--color-text-dim)' }}>Our Services</p>
              {services.map((s) => (
                <p key={s} style={{ fontSize: '0.8rem', marginBottom: '3px' }}>{s}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {year} Zeekaz Web Design. All rights reserved.</p>
        <p>Designed &amp; Built with ♥ in the UK</p>
      </div>
    </footer>
  );
}
