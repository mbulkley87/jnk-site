import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Hammer, Trees, Mountain, Flame } from 'lucide-react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    {
      title: 'Deck Construction & Repair',
      text: 'New builds, structural repairs, resurfacing, and outdoor upgrades designed for cabins, vacation homes, and mountain properties.',
      icon: Hammer,
    },
    {
      title: 'Retaining Walls & Grading',
      text: 'Slope management, drainage-minded grading, and retaining wall work built for the steep terrain common around Deep Creek.',
      icon: Mountain,
    },
    {
      title: 'Excavation & Site Prep',
      text: 'Clearing, groundwork, access improvements, and site preparation for property upgrades and outdoor construction projects.',
      icon: Trees,
    },
    {
      title: 'Fire Pits & Outdoor Living',
      text: 'Patios, gathering areas, hardscape features, and outdoor spaces that feel warm, finished, and built to last.',
      icon: Flame,
    },
  ];

  const projects = [
    {
      src: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1600&q=80',
      title: 'Featured Mountain Home Project',
      description: 'Replace this first image with the strongest Castle Creek Lodge exterior or outdoor project shot.',
    },
    {
      src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
      title: 'Cabin-Style Decks & Outdoor Spaces',
      description: 'Use warm residential photos that feel rustic, local, and built for mountain living.',
    },
    {
      src: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1600&q=80',
      title: 'Grading, Access, and Property Improvements',
      description: 'Show terrain work, outdoor upgrades, and clean finished craftsmanship.',
    },
  ];

  return (
    <>
      <style>{`
        :root {
          --bg: #f6f2ea;
          --surface: #ffffff;
          --surface-soft: #f1eadf;
          --surface-muted: #ebe3d4;
          --text: #231f1a;
          --text-soft: #665f55;
          --border: #ddd3c2;
          --brand: #6f5437;
          --brand-dark: #5c452d;
          --accent: #ccb174;
          --shadow: 0 18px 45px rgba(35, 31, 26, 0.08);
          --radius-xl: 32px;
          --radius-lg: 24px;
          --radius-md: 18px;
          --container: 1200px;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: var(--bg);
          color: var(--text);
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        img {
          display: block;
          max-width: 100%;
        }

        .site-shell {
          min-height: 100vh;
          background: var(--bg);
        }

        .container {
          width: min(var(--container), calc(100% - 32px));
          margin: 0 auto;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(246, 242, 234, 0.94);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(111, 84, 55, 0.12);
        }

        .topbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          min-height: 84px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
        }

        .brand-mark {
          width: 46px;
          height: 46px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--brand);
          color: white;
          box-shadow: 0 10px 25px rgba(111, 84, 55, 0.18);
          flex-shrink: 0;
        }

        .brand-title {
          margin: 0;
          font-size: 0.92rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--brand);
        }

        .brand-subtitle {
          margin: 4px 0 0;
          font-size: 0.84rem;
          color: var(--text-soft);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
        }

        .nav-link {
          font-size: 0.98rem;
          font-weight: 600;
          color: #4e463e;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--brand);
        }

        .quote-button,
        .hero-primary,
        .hero-secondary,
        .band-button,
        .contact-primary,
        .contact-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: none;
          cursor: pointer;
          font: inherit;
          transition: all 0.2s ease;
        }

        .quote-button {
          border-radius: 999px;
          border: 1px solid var(--brand);
          padding: 13px 22px;
          color: var(--brand);
          background: transparent;
          font-weight: 700;
          white-space: nowrap;
        }

        .quote-button:hover,
        .contact-secondary:hover {
          background: var(--brand);
          color: white;
        }

        .mobile-toggle {
          display: none;
          width: 46px;
          height: 46px;
          border-radius: 14px;
          border: 1px solid var(--border);
          background: white;
          color: var(--text);
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .mobile-nav {
          display: none;
          padding: 0 0 18px;
        }

        .mobile-nav-inner {
          display: grid;
          gap: 8px;
          padding-top: 8px;
        }

        .mobile-link {
          padding: 14px 16px;
          border-radius: 16px;
          font-weight: 600;
          color: #4e463e;
        }

        .mobile-link:hover {
          background: white;
        }

        .mobile-cta {
          margin-top: 8px;
          border-radius: 999px;
          padding: 14px 18px;
          background: var(--brand);
          color: white;
          font-weight: 700;
          justify-content: center;
        }

        .hero {
          position: relative;
          background: #221d17;
          overflow: hidden;
        }

        .hero-bg,
        .hero-overlay,
        .hero-gradient {
          position: absolute;
          inset: 0;
        }

        .hero-bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.5;
        }

        .hero-overlay {
          background: rgba(20, 16, 12, 0.45);
        }

        .hero-gradient {
          background: linear-gradient(90deg, rgba(20,16,12,0.92) 0%, rgba(20,16,12,0.70) 50%, rgba(20,16,12,0.28) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          padding: 110px 0 130px;
        }

        .hero-copy {
          max-width: 760px;
        }

        .eyebrow {
          display: inline-block;
          margin-bottom: 22px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          color: #f7efe1;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 0.78rem;
          font-weight: 700;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(2.7rem, 5vw, 4.8rem);
          line-height: 1.06;
          color: white;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .hero p {
          margin: 22px 0 0;
          max-width: 700px;
          font-size: 1.15rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.88);
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .hero-primary,
        .hero-secondary,
        .band-button,
        .contact-primary,
        .contact-secondary {
          padding: 15px 26px;
          border-radius: 999px;
          font-weight: 700;
        }

        .hero-primary,
        .band-button {
          background: var(--accent);
          color: #20180f;
        }

        .hero-primary:hover,
        .band-button:hover {
          transform: translateY(-1px);
          background: #d6bc82;
        }

        .hero-secondary {
          border: 1px solid rgba(255,255,255,0.3);
          color: white;
          background: transparent;
        }

        .hero-secondary:hover {
          background: rgba(255,255,255,0.1);
        }

        .intro-band {
          background: #d7c182;
          text-align: center;
          padding: 68px 0;
        }

        .intro-band h2 {
          margin: 0;
          font-size: clamp(2rem, 3vw, 3rem);
          line-height: 1.2;
          font-weight: 600;
        }

        .intro-band p {
          max-width: 900px;
          margin: 18px auto 0;
          font-size: 1.12rem;
          line-height: 1.8;
          color: #4f473d;
        }

        .section {
          padding: 88px 0;
        }

        .section-white {
          background: white;
        }

        .section-soft {
          background: #f1ece3;
        }

        .section-header {
          max-width: 760px;
          margin-bottom: 42px;
        }

        .section-kicker {
          margin: 0 0 12px;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--brand);
        }

        .section-title {
          margin: 0;
          font-size: clamp(2rem, 3vw, 3.2rem);
          line-height: 1.15;
          font-weight: 600;
          color: var(--text);
        }

        .section-text {
          margin: 18px 0 0;
          font-size: 1.06rem;
          line-height: 1.9;
          color: var(--text-soft);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
        }

        .service-card,
        .project-card,
        .about-card,
        .contact-panel,
        .contact-item,
        .about-mini {
          box-shadow: var(--shadow);
        }

        .service-card {
          background: #f8f5ee;
          border: 1px solid #e4dccd;
          border-radius: var(--radius-xl);
          padding: 28px;
        }

        .service-icon {
          width: 52px;
          height: 52px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #efe3cc;
          color: var(--brand);
          margin-bottom: 18px;
        }

        .service-card h3,
        .project-card h3,
        .about-mini h3 {
          margin: 0;
          font-size: 1.28rem;
          line-height: 1.3;
        }

        .service-card p,
        .project-card p,
        .about-card p,
        .about-mini p,
        .contact-panel p,
        .contact-item p {
          margin: 14px 0 0;
          color: var(--text-soft);
          line-height: 1.82;
        }

        .projects-layout {
          display: grid;
          grid-template-columns: 1.28fr 0.72fr;
          gap: 24px;
          align-items: start;
        }

        .project-stack {
          display: grid;
          gap: 24px;
        }

        .project-card {
          overflow: hidden;
          background: white;
          border-radius: var(--radius-xl);
        }

        .project-card.featured img {
          height: 430px;
        }

        .project-card.secondary img {
          height: 230px;
        }

        .project-card img {
          width: 100%;
          object-fit: cover;
        }

        .project-content {
          padding: 28px;
        }

        .two-column {
          display: grid;
          grid-template-columns: 1fr 0.96fr;
          gap: 28px;
        }

        .about-card {
          background: #f8f5ee;
          border-radius: var(--radius-xl);
          padding: 34px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 28px;
        }

        .about-mini {
          background: white;
          border: 1px solid #e4dccd;
          border-radius: var(--radius-lg);
          padding: 22px;
        }

        .contact-panel {
          background: #f2e8d7;
          border-radius: var(--radius-xl);
          padding: 34px;
        }

        .contact-list {
          display: grid;
          gap: 16px;
          margin-top: 28px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: white;
          border-radius: var(--radius-lg);
          padding: 20px;
        }

        .contact-item strong {
          display: block;
          margin-bottom: 4px;
        }

        .contact-icon {
          color: var(--brand);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .contact-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 28px;
        }

        .contact-primary {
          background: var(--brand);
          color: white;
        }

        .contact-primary:hover {
          background: var(--brand-dark);
        }

        .contact-secondary {
          background: transparent;
          color: var(--brand);
          border: 1px solid var(--brand);
        }

        @media (max-width: 1100px) {
          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .projects-layout,
          .two-column {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 900px) {
          .nav-links,
          .desktop-cta {
            display: none;
          }

          .mobile-toggle {
            display: inline-flex;
          }

          .mobile-nav {
            display: block;
          }

          .hero-content {
            padding: 86px 0 96px;
          }

          .hero h1 {
            font-size: clamp(2.2rem, 10vw, 3.4rem);
          }

          .hero p,
          .intro-band p,
          .section-text,
          .about-card p {
            font-size: 1rem;
          }
        }

        @media (max-width: 680px) {
          .container {
            width: min(var(--container), calc(100% - 22px));
          }

          .topbar-inner {
            min-height: 76px;
          }

          .brand-title {
            font-size: 0.82rem;
            letter-spacing: 0.18em;
          }

          .brand-subtitle {
            font-size: 0.78rem;
          }

          .hero-actions,
          .contact-actions {
            flex-direction: column;
          }

          .hero-primary,
          .hero-secondary,
          .band-button,
          .contact-primary,
          .contact-secondary,
          .quote-button,
          .mobile-cta {
            width: 100%;
          }

          .intro-band {
            padding: 52px 0;
          }

          .section {
            padding: 68px 0;
          }

          .services-grid,
          .about-grid {
            grid-template-columns: 1fr;
          }

          .project-card.featured img {
            height: 300px;
          }

          .project-card.secondary img {
            height: 220px;
          }

          .project-content,
          .service-card,
          .about-card,
          .contact-panel {
            padding: 22px;
          }
        }
      `}</style>

      <div className="site-shell">
        <header className="topbar">
          <div className="container topbar-inner">
            <a href="#home" className="brand">
              <div className="brand-mark">
                <Hammer size={18} />
              </div>
              <div>
                <p className="brand-title">JNK Contracting</p>
                <p className="brand-subtitle">Deep Creek area contractor</p>
              </div>
            </a>

            <nav className="nav-links">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="desktop-cta">
              <a href="tel:+13010000000" className="quote-button">
                <Phone size={16} />
                Call for a Quote
              </a>
            </div>

            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {menuOpen && (
            <div className="mobile-nav">
              <div className="container mobile-nav-inner">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="mobile-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a href="tel:+13010000000" className="mobile-cta" onClick={() => setMenuOpen(false)}>
                  <Phone size={16} />
                  Call for a Quote
                </a>
              </div>
            </div>
          )}
        </header>

        <main id="home">
          <section className="hero">
            <img className="hero-bg" src={projects[0].src} alt="Mountain cabin project" />
            <div className="hero-overlay" />
            <div className="hero-gradient" />

            <div className="container hero-content">
              <div className="hero-copy">
                <div className="eyebrow">Quality work for cabins, vacation homes, and mountain properties</div>
                <h1>Building trust with quality work around Deep Creek.</h1>
                <p>
                  JNK Contracting delivers decks, grading, retaining walls, excavation, and outdoor living improvements with the kind of craftsmanship local homeowners want to feel confident hiring.
                </p>
                <div className="hero-actions">
                  <a href="#projects" className="hero-primary">View Recent Work</a>
                  <a href="#contact" className="hero-secondary">Get a Free Estimate</a>
                </div>
              </div>
            </div>
          </section>

          <section className="intro-band">
            <div className="container">
              <h2>Professional outdoor construction with a residential, mountain-home focus</h2>
              <p>
                Deep Creek properties need more than generic contractor work - they need solutions built for slopes, weather, timber, stone, decks, and outdoor gathering spaces.
              </p>
              <a href="#services" className="band-button">Explore Services</a>
            </div>
          </section>

          <section id="services" className="section section-white">
            <div className="container">
              <div className="section-header">
                <p className="section-kicker">Services</p>
                <h2 className="section-title">What JNK Contracting does best</h2>
                <p className="section-text">
                  Keep this section clean and straightforward. Homeowners want to quickly understand the kind of work you do and whether you look like the right fit for their property.
                </p>
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

          <section id="projects" className="section section-soft">
            <div className="container">
              <div className="section-header">
                <p className="section-kicker">Recent Work</p>
                <h2 className="section-title">Residential cabin-style visuals that feel local and credible</h2>
                <p className="section-text">
                  Use real project photos here as soon as possible. Lead with Castle Creek Lodge if that is the strongest visual. Avoid generic commercial imagery.
                </p>
              </div>

              <div className="projects-layout">
                <article className="project-card featured">
                  <img src={projects[0].src} alt={projects[0].title} />
                  <div className="project-content">
                    <h3>{projects[0].title}</h3>
                    <p>{projects[0].description}</p>
                  </div>
                </article>

                <div className="project-stack">
                  {projects.slice(1).map((project) => (
                    <article key={project.title} className="project-card secondary">
                      <img src={project.src} alt={project.title} />
                      <div className="project-content">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="section section-white">
            <div className="container two-column">
              <div className="about-card">
                <p className="section-kicker">About</p>
                <h2 className="section-title">Reliable work. Strong communication. Clean finished results.</h2>
                <p>
                  JNK Contracting focuses on practical, well-built outdoor improvements for residential and vacation properties. The site should make that immediately clear through strong photos, clean structure, and straightforward messaging.
                </p>
                <div className="about-grid">
                  <article className="about-mini">
                    <h3>Built for mountain terrain</h3>
                    <p>Decks, slopes, walls, access work, and outdoor spaces designed for Deep Creek-area properties.</p>
                  </article>
                  <article className="about-mini">
                    <h3>Residential first</h3>
                    <p>The branding should feel like cabins, timber, stone, decks, and outdoor living - not generic commercial construction.</p>
                  </article>
                </div>
              </div>

              <div id="contact" className="contact-panel">
                <p className="section-kicker">Contact Us</p>
                <h2 className="section-title">Let’s talk about your project</h2>
                <p>Replace these placeholders with Jace’s real information before launch.</p>

                <div className="contact-list">
                  <div className="contact-item">
                    <Phone size={18} className="contact-icon" />
                    <div>
                      <strong>Call or Text</strong>
                      <p>(301) 000-0000</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <Mail size={18} className="contact-icon" />
                    <div>
                      <strong>Email</strong>
                      <p>jace@jnk-contracting.com</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <MapPin size={18} className="contact-icon" />
                    <div>
                      <strong>Service Area</strong>
                      <p>Deep Creek Lake, Garrett County, and nearby areas</p>
                    </div>
                  </div>
                </div>

                <div className="contact-actions">
                  <a href="tel:+13010000000" className="contact-primary">
                    <Phone size={16} />
                    Call Now
                  </a>
                  <a href="mailto:jace@jnk-contracting.com" className="contact-secondary">
                    <Mail size={16} />
                    Email JNK
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
