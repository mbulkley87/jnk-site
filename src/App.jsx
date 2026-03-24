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
      description: 'Swap this first image with the strongest Castle Creek Lodge exterior or outdoor project shot.',
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
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#f7f2e8]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#7b5b39] text-white shadow-sm">
              <Hammer size={18} />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7b5b39]">JNK Contracting</p>
              <p className="text-xs text-stone-500">Deep Creek area contractor</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-stone-700 transition hover:text-[#7b5b39]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <a
              href="tel:+13010000000"
              className="inline-flex items-center gap-2 rounded-full border border-[#7b5b39] px-5 py-2.5 text-sm font-semibold text-[#7b5b39] transition hover:bg-[#7b5b39] hover:text-white"
            >
              <Phone size={16} />
              Call for a Quote
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex rounded-xl border border-stone-300 bg-white p-2 text-stone-700 lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-stone-200 bg-[#f7f2e8] lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-stone-700 hover:bg-white hover:text-[#7b5b39]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+13010000000"
                onClick={() => setMenuOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#7b5b39] px-5 py-3 text-sm font-semibold text-white"
              >
                <Phone size={16} />
                Call for a Quote
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section className="relative overflow-hidden bg-stone-900">
          <img
            src={projects[0].src}
            alt="Mountain cabin project"
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/65 to-stone-950/40" />

          <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
            <div className="max-w-3xl">
              <p className="mb-5 inline-block rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-stone-100">
                Quality work for cabins, vacation homes, and mountain properties
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Building trust with quality work around Deep Creek.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200">
                JNK Contracting delivers decks, grading, retaining walls, excavation, and outdoor living improvements with the kind of craftsmanship local homeowners want to feel confident hiring.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-[#c8ad72] px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-[#d7bb7d]"
                >
                  View Recent Work
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Get a Free Estimate
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#d8c183] px-5 py-14 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-medium sm:text-4xl">Professional outdoor construction with a residential, mountain-home focus</h2>
            <p className="mt-4 text-lg text-stone-700">
              Deep Creek properties need more than generic contractor work - they need solutions built for slopes, weather, timber, stone, decks, and outdoor gathering spaces.
            </p>
            <a
              href="#services"
              className="mt-8 inline-flex items-center justify-center rounded-full border border-stone-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-800 transition hover:bg-stone-800 hover:text-white"
            >
              Explore Services
            </a>
          </div>
        </section>

        <section id="services" className="bg-white px-5 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7b5b39]">Services</p>
              <h2 className="mt-3 text-3xl font-medium sm:text-4xl">What JNK Contracting does best</h2>
              <p className="mt-4 text-lg leading-8 text-stone-600">
                Keep this section clean and straightforward. Homeowners want to quickly understand the kind of work you do and whether you look like the right fit for their property.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="rounded-3xl border border-stone-200 bg-stone-50 p-6 shadow-sm">
                    <div className="mb-4 inline-flex rounded-2xl bg-[#efe3cc] p-3 text-[#7b5b39]">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-stone-600">{service.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-stone-100 px-5 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7b5b39]">Recent Work</p>
              <h2 className="mt-3 text-3xl font-medium sm:text-4xl">Residential cabin-style visuals that feel local and credible</h2>
              <p className="mt-4 text-lg leading-8 text-stone-600">
                Use real project photos here as soon as possible. Lead with Castle Creek Lodge if that is the strongest visual. Avoid generic commercial imagery.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr,0.75fr]">
              <article className="overflow-hidden rounded-[32px] bg-white shadow-sm">
                <img src={projects[0].src} alt={projects[0].title} className="h-[420px] w-full object-cover" />
                <div className="p-7">
                  <h3 className="text-2xl font-semibold">{projects[0].title}</h3>
                  <p className="mt-3 text-base leading-7 text-stone-600">{projects[0].description}</p>
                </div>
              </article>

              <div className="grid gap-6">
                {projects.slice(1).map((project) => (
                  <article key={project.title} className="overflow-hidden rounded-[32px] bg-white shadow-sm">
                    <img src={project.src} alt={project.title} className="h-56 w-full object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-stone-600">{project.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white px-5 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr,0.95fr]">
            <div className="rounded-[32px] bg-stone-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7b5b39]">About</p>
              <h2 className="mt-3 text-3xl font-medium sm:text-4xl">Reliable work. Strong communication. Clean finished results.</h2>
              <p className="mt-5 text-lg leading-8 text-stone-600">
                JNK Contracting focuses on practical, well-built outdoor improvements for residential and vacation properties. The site should make that immediately clear through strong photos, clean structure, and straightforward messaging.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-stone-200 bg-white p-5">
                  <p className="font-semibold text-stone-900">Built for mountain terrain</p>
                  <p className="mt-2 text-sm leading-7 text-stone-600">Decks, slopes, walls, access work, and outdoor spaces designed for Deep Creek-area properties.</p>
                </div>
                <div className="rounded-3xl border border-stone-200 bg-white p-5">
                  <p className="font-semibold text-stone-900">Residential first</p>
                  <p className="mt-2 text-sm leading-7 text-stone-600">The branding should feel like cabins, timber, stone, decks, and outdoor living - not generic commercial construction.</p>
                </div>
              </div>
            </div>

            <div id="contact" className="rounded-[32px] bg-[#f3ead8] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7b5b39]">Contact Us</p>
              <h2 className="mt-3 text-3xl font-medium sm:text-4xl">Let’s talk about your project</h2>
              <p className="mt-4 text-lg leading-8 text-stone-700">
                Replace these placeholders with Jace’s real information before launch.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-3xl bg-white p-5">
                  <Phone size={18} className="mt-1 text-[#7b5b39]" />
                  <div>
                    <p className="font-semibold">Call or Text</p>
                    <p className="text-stone-600">(301) 000-0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-3xl bg-white p-5">
                  <Mail size={18} className="mt-1 text-[#7b5b39]" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-stone-600">jace@jnk-contracting.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-3xl bg-white p-5">
                  <MapPin size={18} className="mt-1 text-[#7b5b39]" />
                  <div>
                    <p className="font-semibold">Service Area</p>
                    <p className="text-stone-600">Deep Creek Lake, Garrett County, and nearby areas</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+13010000000"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7b5b39] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#684b2e]"
                >
                  <Phone size={16} />
                  Call Now
                </a>
                <a
                  href="mailto:jace@jnk-contracting.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#7b5b39] px-6 py-3 text-sm font-semibold text-[#7b5b39] transition hover:bg-[#7b5b39] hover:text-white"
                >
                  <Mail size={16} />
                  Email JNK
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
