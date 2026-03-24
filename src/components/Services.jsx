export default function Services({ kicker, title, text, services }) {
  return (
    <section id="services" className="section section-white">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">{kicker}</p>
          <h2 className="section-title">{title}</h2>
          <p className="section-text">{text}</p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article key={service.title} className="service-card">
                <div className="service-icon">
                  <Icon size={22} />
                </div>

                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}