'use client';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" aria-label="Hero banner">
      <div className="hero-content">
        {/* Left: Text */}
        <div className="hero-text">
          <div className="hero-badge" aria-label="UK-based web agency">
            🇬🇧 UK-Based Digital Agency
          </div>

          <h1 className="hero-title">
            <span className="gradient-text">Zeekaz</span>
            <br />
            Web Design
          </h1>

          <p className="hero-description">
            We craft stunning websites, powerful brands, and data-driven digital
            strategies that help UK businesses grow online.
          </p>

          <div className="hero-actions">
            <button
              id="hero-cta-primary"
              className="btn-primary"
              onClick={() => scrollTo('contact')}
              aria-label="Get a free quote"
            >
              ✦ Get a Free Quote
            </button>
            <button
              id="hero-cta-secondary"
              className="btn-secondary"
              onClick={() => scrollTo('services')}
              aria-label="View our services"
            >
              Our Services →
            </button>
          </div>
        </div>

        {/* Right: Stats card */}
        <div className="hero-visual">
          <div className="hero-card animate-float">
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5★</span>
                <span className="stat-label">Client Rating</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24h</span>
                <span className="stat-label">Response Time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
