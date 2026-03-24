import { ChevronRight } from 'lucide-react';

export default function Hero({ imageSrc, eyebrow, title, text }) {
  return (
    <section className="hero">
      <img className="hero-bg" src={imageSrc} alt="Mountain home exterior" />
      <div className="hero-overlay" />
      <div className="hero-gradient" />

      <div className="container hero-content">
        <div className="hero-copy">
          <div className="eyebrow">{eyebrow}</div>

          <h1>{title}</h1>

          <p>{text}</p>

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
  );
}