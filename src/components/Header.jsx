import { useState } from 'react';
import { Menu, X, Phone, Hammer } from 'lucide-react';

export default function Header({ navLinks, phoneHref }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
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
  );
}