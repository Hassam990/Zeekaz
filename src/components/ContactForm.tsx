'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialState: FormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setForm(initialState);
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact" aria-label="Contact us">
      <div className="container">
        <div className="contact-header">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="section-subtitle">
            Ready to start your project? Fill in the form and we&apos;ll get back
            to you within 24 hours.
          </p>
        </div>

        <div className="contact-inner">
          {/* Left: Contact info */}
          <aside className="contact-info">
            <h3>Contact Details</h3>
            <p>
              Reach out to us directly or fill in the form and we&apos;ll be in
              touch shortly.
            </p>

            <div
              className="contact-detail"
              role="group"
              aria-label="Email contact"
            >
              <div className="contact-detail-icon" aria-hidden="true">📧</div>
              <div className="contact-detail-text">
                <span>Email</span>
                <a href="mailto:info@zeekazwebdesign.co.uk" id="contact-email-link">
                  info@zeekazwebdesign.co.uk
                </a>
              </div>
            </div>

            <div
              className="contact-detail"
              role="group"
              aria-label="Phone contact"
            >
              <div className="contact-detail-icon" aria-hidden="true">📞</div>
              <div className="contact-detail-text">
                <span>Phone</span>
                <a href="tel:07400727047" id="contact-phone-link">
                  07400 727047
                </a>
              </div>
            </div>

            <div
              className="contact-detail"
              role="group"
              aria-label="Website"
            >
              <div className="contact-detail-icon" aria-hidden="true">🌐</div>
              <div className="contact-detail-text">
                <span>Website</span>
                <p>zeekazwebdesign.co.uk</p>
              </div>
            </div>
          </aside>

          {/* Right: Form */}
          <div className="contact-form-wrap">
            {status === 'success' ? (
              <div className="form-success" role="alert" aria-live="polite">
                <span className="form-success-icon">🎉</span>
                <h3>Message Sent!</h3>
                <p>
                  Thank you for reaching out. We&apos;ll get back to you within
                  24–48 hours. Check your inbox for a confirmation email.
                </p>
                <button
                  className="btn-secondary"
                  style={{ marginTop: '24px' }}
                  onClick={() => setStatus('idle')}
                  id="send-another-btn"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name *</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone Number</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="07XXX XXXXXX"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-service">Service Interested In</label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service...</option>
                      <option value="Website Design & Development">
                        Website Design &amp; Development
                      </option>
                      <option value="Logo Design & Branding">
                        Logo Design &amp; Branding
                      </option>
                      <option value="SEO">SEO</option>
                      <option value="Social Media Marketing">
                        Social Media Marketing
                      </option>
                      <option value="Multiple Services">Multiple Services</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Your Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us about your project or what you need help with..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>

                {status === 'error' && (
                  <p className="form-error-msg" role="alert">
                    ⚠️ {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  className="form-submit"
                  id="contact-submit-btn"
                  disabled={status === 'loading'}
                  aria-busy={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>⏳ Sending...</>
                  ) : (
                    <>✉️ Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
