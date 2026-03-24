import { useState } from 'react';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Hammer,
  Trees,
  Mountain,
  Flame,
  ShieldCheck,
  House,
  ChevronRight,
} from 'lucide-react';

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
      text: 'New deck builds, repairs, resurfacing, stairs, railings, and structural improvements for cabins, vacation homes, and residential properties.',
      icon: Hammer,
    },
    {
      title: 'Retaining Walls & Grading',
      text: 'Slope-focused grading, drainage-minded site work, and retaining wall solutions built for the terrain common around Deep Creek and Garrett County.',
      icon: Mountain,
    },
    {
      title: 'Excavation & Site Prep',
      text: 'Clearing, groundwork, access improvements, prep for outdoor projects, and practical site solutions that set the job up the right way.',
      icon: Trees,
    },
    {
      title: 'Fire Pits & Outdoor Living',
      text: 'Outdoor gathering spaces, paver pads, hardscape features, and cabin-friendly improvements that make mountain properties more usable and more inviting.',
      icon: Flame,
    },
  ];

  const highlights = [
    {
      title: 'Built for mountain properties',
      text: 'Experience with the slopes, weather, grades, drainage, and outdoor conditions that make Deep Creek projects different.',
      icon: Mountain,
    },
    {
      title: 'Residential-first approach',
      text: 'Work that feels right for cabins, vacation homes, and personal residences - not generic commercial construction.',
      icon: House,
    },
    {
      title: 'Clear communication',
      text: 'Straightforward quotes, dependable scheduling, and practical recommendations homeowners can feel good about.',
      icon: ShieldCheck,
    },
  ];

  const projects = [
    {
      src: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1600&q=80',
      title: 'Mountain Home Exterior Improvements',
      description:
        'Use your strongest real photo here - ideally a Deep Creek property shot that immediately communicates cabin, craftsmanship, and curb appeal.',
    },
    {
      src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
      title: 'Decks, Stairs & Outdoor Access',
      description:
        'Feature warm, residential photos with timber, railings, steps, and finished outdoor spaces rather than generic stock construction imagery.',
    },
    {
      src: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1600&q=80',
      title: 'Grading, Walls & Site Work',
      description:
        'Show terrain-focused work, clean finished grades, and practical site improvements that feel relevant to local mountain properties.',
    },
  ];

  const phoneDisplay = '(301) 000-0000';
  const phoneHref = 'tel:+13010000000';
  const emailDisplay = 'jace@jnk-contracting.com';
  const emailHref = 'mailto:jace@jnk-contracting.com';

  return (
    <>
      <style>{`
        :root {
          --bg: #f6f1e8;
          --surface: #ffffff;
          --surface-soft: #f1eadf;
          --surface-alt: #ebe1d1;
          --text: #221d17;
          --text-soft: #655d52;
          --border: #ddd0bc;
          --brand: #6a4f34;
          --brand-dark: #533d28;
          --accent: #ccb07a;
          --accent-dark: #b89962;
          --shadow: 0 20px 50px rgba(34, 29, 23, 0.08);
          --shadow-soft: 0 10px 25px rgba(34, 29, 23, 0.06);
          --radius-xl: 30px;
          --radius-lg: 22px;
          --radius-md: 16px;
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
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        img {
          display: block;
          max-width: 100%;
        }

        button {
          font: inherit;
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
          z-index: 60;
          background: rgba(246, 241, 232, 0.94);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(106, 79, 52, 0.12);
        }

        .topbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          min-height: 82px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
        }

        .brand-mark {
          width: 48px;
          height: 48px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--brand);
          color: white;
          box-shadow: 0 10px 24px rgba(106, 79, 52, 0.22);
          flex-shrink: 0;
        }

        .brand-copy {
          min-width: 0;
        }

        .brand-title {
          margin: 0;
          font-size: 0.9rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
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
        }

        .nav-link {
          position: relative;
          font-size: 0.97rem;
          font-weight: 600;
          color: #4c443b;
          padding: 6px 0;
          transition: color 0.2s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 2px;
          background: var(--brand);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.2s ease;
        }

        .nav-link:hover {
          color: var(--brand);
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .quote-button,
        .hero-primary,
        .hero-secondary,
        .section-button,
        .contact-primary,
        .contact-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .quote-button {
          padding: 13px 22px;
          border-radius: 999px;
          background: var(--brand);
          color: white;
          font-weight: 700;
          white-space: nowrap;
          box-shadow: var(--shadow-soft);
        }

        .quote-button:hover,
        .contact-primary:hover {
          background: var(--brand-dark);
          transform: translateY(-1px);
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
          background: transparent;
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
          overflow: hidden;
          background: #1f1913;
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
          opacity: 0.54;
        }

        .hero-overlay {
          background: rgba(20, 15, 10, 0.42);
        }

        .hero-gradient {
          background: linear-gradient(
            90deg,
            rgba(20, 15, 10, 0.92) 0%,
            rgba(20, 15, 10, 0.72) 48%,
            rgba(20, 15, 10, 0.25) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 1;
          padding: 120px 0 132px;
        }

        .hero-copy {
          max-width: 760px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 22px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          color: #f7efe1;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 0.76rem;
          font-weight: 800;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(2.8rem, 5vw, 5rem);
          line-height: 1.04;
          color: white;
          letter-spacing: -0.04em;
          font-weight: 800;
          max-width: 820px;
        }

        .hero p {
          margin: 22px 0 0;
          max-width: 720px;
          font-size: 1.12rem;
          line-height: 1.82;
          color: rgba(255, 255, 255, 0.88);
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .hero-primary,
        .hero-secondary,
        .section-button,
        .contact-primary,
        .contact-secondary {
          padding: 15px 24px;
          border-radius: 999px;
          font-weight: 700;
        }

        .hero-primary,
        .section-button {
          background: var(--accent);
          color: #20170f;
        }

        .hero-primary:hover,
        .section-button:hover {
          background: var(--accent-dark);
          transform: translateY(-1px);
        }

        .hero-secondary {
          background: transparent;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.28);
        }

        .hero-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .intro-band {
          background: #d7c28b;
          padding: 70px 0;
          text-align: center;
        }

        .intro-band h2 {
          margin: 0;
          font-size: clamp(2rem, 3vw, 3rem);
          line-height: 1.18;
          font-weight: 700;
          color: #241b12;
        }

        .intro-band p {
          max-width: 880px;
          margin: 18px auto 0;
          font-size: 1.08rem;
          line-height: 1.82;
          color: #4f463c;
        }

        .intro-band-actions {
          margin-top: 28px;
          display: flex;
          justify-content: center;
        }

        .section {
          padding: 90px 0;
        }

        .section-white {
          background: white;
        }

        .section-soft {
          background: #f2ece2;
        }

        .section-header {
          max-width: 760px;
          margin-bottom: 42px;
        }

        .section-kicker {
          margin: 0 0 12px;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--brand);
        }

        .section-title {
          margin: 0;
          font-size: clamp(2rem, 3vw, 3.2rem);
          line-height: 1.14;
          font-weight: 750;
          color: var(--text);
        }

        .section-text {
          margin: 18px 0 0;
          font-size: 1.04rem;
          line-height: 1.86;
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
        .highlight-card {
          box-shadow: var(--shadow);
        }

        .service-card {
          background: #f8f4ec;
          border: 1px solid #e5dbcb;
          border-radius: var(--radius-xl);
          padding: 28px;
        }

        .service-icon {
          width: 54px;
          height: 54px;
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
        .highlight-card h3 {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.3;
        }

        .service-card p,
        .project-card p,
        .about-card p,
        .contact-panel p,
        .contact-item p,
        .highlight-card p {
          margin: 14px 0 0;
          color: var(--text-soft);
          line-height: 1.82;
        }

        .projects-layout {
          display: grid;
          grid-template-columns: 1.26fr 0.74fr;
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
          height: 450px;
        }

        .project-card.secondary img {
          height: 235px;
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
          grid-template-columns: 1.02fr 0.98fr;
          gap: 28px;
        }

        .about-card {
          background: #f8f4ec;
          border-radius: var(--radius-xl);
          padding: 34px;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 28px;
        }

        .highlight-card {
          background: white;
          border: 1px solid #e5dbcb;
          border-radius: var(--radius-lg);
          padding: 22px;
        }

        .highlight-icon {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #f1e6d3;
          color: var(--brand);
          margin-bottom: 14px;
        }

        .contact-panel {
          background: #f0e4d2;
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
          color: var(--text);
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

        .contact-secondary {
          background: transparent;
          color: var(--brand);
          border: 1px solid var(--brand);
        }

        .contact-secondary:hover {
          background: var(--brand);
          color: white;
        }

        .footer {
          background: #241b12;
          color: rgba(255, 255, 255, 0.82);
          padding: 26px 0;
        }

        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .footer p {
          margin: 0;
          font-size: 0.95rem;
        }

        .footer a {
          color: white;
          font-weight: 600;
        }

        @media (max-width: 1150px) {
          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .projects-layout,
          .two-column {
            grid-template-columns: 1fr;
          }

          .highlights-grid {
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
            padding: 88px 0 96px;
          }

          .hero h1 {
            font-size: clamp(2.2rem, 10vw, 3.6rem);
          }

          .hero p,
          .intro-band p,
          .section-text {
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
          .section-button,
          .contact-primary,
          .contact-secondary,
          .quote-button,
          .mobile-cta {
            width: 100%;
          }

          .intro-band {
            padding: 54px 0;
          }

          .section {
            padding: 70px 0;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .project-card.featured img {
            height: 310px;
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

          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
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
              <div className="brand-copy">
                <p className="brand-title">JNK Contracting</p>
                <p className="brand-subtitle">Deep Creek and Garrett County contractor</p>
              </div>
            </a>

            <nav className="nav-links" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="desktop-cta">
              <a href={phoneHref} className="quote-button">
                <Phone size={16} />
                Call for a Quote
              </a>
            </div>

            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
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
                <a href={phoneHref} className="mobile-cta" onClick={() => setMenuOpen(false)}>
                  <Phone size={16} />
                  Call for a Quote
                </a>
              </div>
            </div>
          )}
        </header>

        <main id="home">
          <section className="hero">
            <img className="hero-bg" src={projects[0].src} alt="Mountain home exterior" />
            <div className="hero-overlay" />
            <div className="hero-gradient" />

            <div className="container hero-content">
              <div className="hero-copy">
                <div className="eyebrow">
                  Residential contractor for cabins, homes, and outdoor projects
                </div>
                <h1>Quality outdoor construction for Deep Creek and Garrett County homes.</h1>
                <p>
                  JNK Contracting specializes in decks, retaining walls, grading, excavation,
                  fire pits, and outdoor property improvements built for mountain terrain and
                  residential living.
                </p>

                <div className="hero-actions">
                  <a href="#projects" className="hero-primary">
                    View Recent Work
                    <ChevronRight size={16} />
                  </a>
                  <a href="#contact" className="hero-secondary">
                    Get a Free Estimate
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="intro-band">
            <div className="container">
              <h2>Built for the way mountain properties actually live and age</h2>
              <p>
                Around Deep Creek, outdoor work needs to hold up to slope, water, weather,
                timber, and year-round use. JNK Contracting focuses on practical, well-built
                residential improvements that feel right for cabins, vacation homes, and local properties.
              </p>
              <div className="intro-band-actions">
                <a href="#services" className="section-button">
                  Explore Services
                </a>
              </div>
            </div>
          </section>

          <section id="services" className="section section-white">
            <div className="container">
              <div className="section-header">
                <p className="section-kicker">Services</p>
                <h2 className="section-title">Outdoor construction work homeowners actually need</h2>
                <p className="section-text">
                  From deck work and site prep to grading, retaining walls, and fire pit areas,
                  JNK Contracting focuses on the kinds of residential projects that improve how a
                  property looks, functions, and holds up over time.
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
                <h2 className="section-title">Show the kind of work local homeowners want to hire</h2>
                <p className="section-text">
                  The biggest upgrade you can make from here is replacing stock photos with real
                  Deep Creek-area project images. Prioritize finished residential work, strong exterior
                  shots, deck photos, grading work, steps, retaining walls, and fire pit spaces.
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
                <p className="section-kicker">About JNK</p>
                <h2 className="section-title">Dependable workmanship with a local, residential feel</h2>
                <p>
                  JNK Contracting is built around the kind of outdoor construction work that matters
                  most to homeowners in the Deep Creek area - practical improvements, solid craftsmanship,
                  and finished results that look like they belong on the property.
                </p>

                <div className="highlights-grid">
                  {highlights.map((item) => {
                    const Icon = item.icon;
                    return (
                      <article key={item.title} className="highlight-card">
                        <div className="highlight-icon">
                          <Icon size={20} />
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </article>
                    );
                  })}
                </div>
              </div>

              <div id="contact" className="contact-panel">
                <p className="section-kicker">Contact</p>
                <h2 className="section-title">Talk through your project</h2>
                <p>
                  Need help with an outdoor project, slope issue, retaining wall, deck work, or a
                  cabin property improvement? Reach out to JNK Contracting to start the conversation.
                </p>

                <div className="contact-list">
                  <div className="contact-item">
                    <Phone size={18} className="contact-icon" />
                    <div>
                      <strong>Call or Text</strong>
                      <p>{phoneDisplay}</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <Mail size={18} className="contact-icon" />
                    <div>
                      <strong>Email</strong>
                      <p>{emailDisplay}</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <MapPin size={18} className="contact-icon" />
                    <div>
                      <strong>Service Area</strong>
                      <p>Deep Creek Lake, Garrett County, and surrounding areas</p>
                    </div>
                  </div>
                </div>

                <div className="contact-actions">
                  <a href={phoneHref} className="contact-primary">
                    <Phone size={16} />
                    Call Now
                  </a>
                  <a href={emailHref} className="contact-secondary">
                    <Mail size={16} />
                    Email JNK
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container footer-inner">
            <p>© {new Date().getFullYear()} JNK Contracting. All rights reserved.</p>
            <p>
              Serving <a href="#contact">Deep Creek Lake and Garrett County</a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}