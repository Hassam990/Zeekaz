'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);

      const sections = ['home', 'services', 'about', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar-inner">
          <div
            className="nav-logo"
            onClick={() => scrollTo('#home')}
            role="button"
            tabIndex={0}
            aria-label="Go to homepage"
            onKeyDown={(e) => e.key === 'Enter' && scrollTo('#home')}
          >
            <Logo size={34} />
          </div>

          <ul className={`nav-links${menuOpen ? ' open' : ''}`} role="list">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={activeSection === link.href.replace('#', '') ? 'active' : ''}
                  aria-current={activeSection === link.href.replace('#', '') ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
                className="nav-cta"
                id="nav-cta-btn"
              >
                Get a Quote
              </a>
            </li>
          </ul>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            id="hamburger-btn"
          >
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </nav>
    </>
  );
}
