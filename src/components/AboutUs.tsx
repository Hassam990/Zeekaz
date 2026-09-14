'use client';

export default function AboutUs() {
  return (
    <section id="about" className="about" aria-label="About Zeekaz Web Design">
      <div className="container">
        <div className="about-inner">
          {/* Left: Text */}
          <div className="about-text">
            <div className="section-tag">Who We Are</div>
            <h2 className="section-title">Your Digital Growth Partner in the UK</h2>
            <p className="about-para">
              At <strong style={{ color: '#f0f4ff' }}>Zeekaz Web Design</strong>, we are
              a passionate team of designers, developers, and digital marketers dedicated
              to helping businesses thrive in the digital world.
            </p>
            <p className="about-para">
              Based in the UK, we work with startups and established businesses alike,
              delivering tailored digital solutions that are modern, results-driven, and
              built to last. We don&apos;t just build websites — we build brands.
            </p>

            <ul className="about-features" aria-label="Key strengths">
              <li>Custom-designed websites that reflect your brand</li>
              <li>Mobile-first, responsive, and lightning-fast</li>
              <li>SEO-optimised from the ground up</li>
              <li>Transparent communication & fast turnaround</li>
              <li>Affordable pricing with premium quality</li>
            </ul>
          </div>

          {/* Right: Visual card */}
          <div className="about-visual">
            <div className="about-card-main">
              <span className="about-icon-large" aria-hidden="true">🚀</span>
              <div className="about-card-title">Ready to Launch?</div>
              <p className="about-card-text">
                Whether you&apos;re starting fresh or rebranding, we&apos;ll take your
                vision and turn it into a powerful digital reality — on time and within
                budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
