'use client';

const services = [
  {
    icon: '🖥️',
    title: 'Website Design & Development',
    description:
      'From sleek landing pages to full e-commerce platforms, we build fast, responsive, and beautiful websites tailored to your brand.',
    tag: 'Most Popular',
    id: 'service-web',
  },
  {
    icon: '✏️',
    title: 'Logo Design & Branding',
    description:
      'We create memorable logos and complete brand identities that make your business stand out and leave a lasting impression.',
    tag: 'Creative',
    id: 'service-logo',
  },
  {
    icon: '🔍',
    title: 'SEO',
    description:
      'Boost your search engine rankings with our proven SEO strategies. Drive organic traffic and grow your online visibility.',
    tag: 'Growth',
    id: 'service-seo',
  },
  {
    icon: '📱',
    title: 'Social Media Marketing',
    description:
      'Engage your audience and grow your brand across social platforms with compelling content and targeted campaigns.',
    tag: 'Engagement',
    id: 'service-smm',
  },
];

export default function Services() {
  return (
    <section id="services" className="services" aria-label="Our services">
      <div className="container">
        <div className="services-header">
          <div className="section-tag">What We Do</div>
          <h2 className="section-title">Services We Offer</h2>
          <p className="section-subtitle">
            Everything you need to build a powerful digital presence — from design
            to marketing.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.id} className="service-card" id={service.id}>
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <span className="service-tag">✦ {service.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
