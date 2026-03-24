import { motion } from 'framer-motion';
import {
  Phone,
  Hammer,
  Mountain,
  BadgeCheck,
  Mail,
  MapPin,
  Trees,
  ShieldCheck,
  ChevronRight,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      title: 'Deck Construction & Repair',
      text: 'New builds, structural repairs, resurfacing, and upgrades designed for mountain homes and vacation properties.',
      icon: Hammer,
    },
    {
      title: 'Retaining Walls & Grading',
      text: 'Slope management, drainage-minded grading, and retaining wall solutions built for steep Deep Creek terrain.',
      icon: Mountain,
    },
    {
      title: 'Excavation & Site Prep',
      text: 'Clearing, prep work, groundwork, and project-ready site shaping for outdoor improvements and new installations.',
      icon: Trees,
    },
    {
      title: 'Fire Pits & Outdoor Living',
      text: 'Gathering spaces, hardscape features, and custom outdoor areas that feel finished, practical, and built to last.',
      icon: BadgeCheck,
    },
  ];

  const projects = [
    {
      src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
      title: 'Featured Mountain Property Project',
      tag: 'Showcase project',
      description: 'Replace this with your strongest Castle Creek Lodge image so the site immediately feels high-end and local.',
    },
    {
      src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
      title: 'Decks, Timber, and Outdoor Spaces',
      tag: 'Deep Creek style',
      description: 'Use warm, rustic property photos that feel like cabins, lodges, and mountain homes - not commercial jobsites.',
    },
    {
      src: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1600&q=80',
      title: 'Grading, Access, and Improvements',
      tag: 'Property improvements',
      description: 'Add another strong exterior project image that shows terrain work, outdoor upgrades, or finished craftsmanship.',
    },
  ];

  const highlights = [
    'Serving Deep Creek Lake, Garrett County, and nearby areas',
    'Responsive estimates and clear communication',
    'Built for mountain homes, vacation rentals, and outdoor living',
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-stone-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-600/90 text-white shadow-lg shadow-amber-700/20">
              <Hammer size={18} />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.22em] text-amber-300">JNK CONTRACTING</p>
              <p className="text-xs text-stone-400">Deep Creek area contractor</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            <a href="#services" className="text-sm text-stone-300 transition hover:text-white">Services</a>
            <a href="#projects" className="text-sm text-stone-300 transition hover:text-white">Projects</a>
            <a href="#about" className="text-sm text-stone-300 transition hover:text-white">About</a>
            <a href="#contact" className="text-sm text-stone-300 transition hover:text-white">Contact</a>
          </nav>

          <div className="hidden lg:block">
            <a
              href="tel:+13010000000"
              className="inline-flex items-center gap-2 rounded-2xl bg-amber-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-500"
            >
              <Phone size={16} />
              Call for a Quote
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex rounded-xl border border-white/10 p-2 text-stone-200 lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-stone-950 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-6">
              <a href="#services" onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 text-stone-300 hover:bg-white/5 hover:text-white">Services</a>
              <a href="#projects" onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 text-stone-300 hover:bg-white/5 hover:text-white">Projects</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 text-stone-300 hover:bg-white/5 hover:text-white">About</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 text-stone-300 hover:bg-white/5 hover:text-white">Contact</a>
              <a
                href="tel:+13010000000"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-600 px-5 py-3 text-sm font-semibold text-white"
              >
                <Phone size={16} />
                Call for a Quote
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden border-b border-white/10">
          <div className="absolute inset-0">
            <img
              src={projects[0].src}
              alt="Mountain home construction"
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/55" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_22%)]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr,0.95fr] lg:px-8 lg:py-24">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <div className="mb-5 inline-flex rounded-full border border-amber-400/25 bg-amber-500/10 px-4 py-2 text-xs font-medium tracking-wide text-amber-200 sm:text-sm">
                Quality outdoor construction for mountain homes and vacation properties
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Deep Creek-style craftsmanship that looks right and lasts.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">
                JNK Contracting delivers decks, grading, retaining walls, excavation, and outdoor living improvements built for the unique terrain and character of Garrett County properties.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-500"
                >
                  View Projects
                  <ChevronRight size={16} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  Get a Free Estimate
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
                    <p className="text-sm leading-6 text-stone-200">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="grid gap-4 self-end sm:grid-cols-2 lg:grid-cols-1"
            >
              <div className="rounded-[28px] border border-white/10 bg-stone-900/75 p-6 shadow-2xl shadow-black/30 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Built for local terrain</p>
                <h2 className="mt-3 text-2xl font-bold">Decks, slopes, walls, and outdoor spaces with mountain property experience.</h2>
                <p className="mt-3 text-sm leading-6 text-stone-300">
                  This site should feel local, warm, and residential - like cabins, vacation homes, timber, stone, and outdoor gathering spaces.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Services</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Professional work tailored to Deep Creek properties</h2>
            <p className="mt-4 text-stone-300">
              Focus the message on the work homeowners actually care about: quality, durability, clean results, and a contractor who understands the property type.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeUp}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="rounded-[28px] border border-white/10 bg-stone-900/70 p-6 shadow-lg shadow-black/20"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-amber-500/15 p-3 text-amber-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-400">{service.text}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="projects" className="border-y border-white/10 bg-stone-900/40">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
            >
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Projects</p>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Lead with warm, residential, mountain-home visuals</h2>
                <p className="mt-4 text-stone-300">
                  Swap out the placeholders with cabin, deck, grading, fire pit, and property-improvement photos. Lead with Castle Creek Lodge if that is the strongest first impression.
                </p>
              </div>
            </motion.div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeUp}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="group overflow-hidden rounded-[30px] border border-white/10 bg-stone-950"
                >
                  <div className="overflow-hidden">
                    <img
                      src={project.src}
                      alt={project.title}
                      className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">{project.tag}</p>
                    <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-stone-400">{project.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[1.05fr,0.95fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="rounded-[30px] border border-white/10 bg-stone-900/70 p-6 sm:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">About JNK Contracting</p>
              <h2 className="mt-3 text-3xl font-bold">Reliable work. Strong communication. Clean finished results.</h2>
              <p className="mt-5 text-base leading-8 text-stone-300">
                JNK Contracting focuses on practical, well-built outdoor improvements for residential and vacation properties. The goal of this site is to show quality work, local credibility, and the kind of craftsmanship homeowners want to feel confident hiring.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <ShieldCheck className="text-amber-300" size={22} />
                  <p className="mt-3 font-semibold">Professional and dependable</p>
                  <p className="mt-2 text-sm leading-6 text-stone-400">Position the brand around responsiveness, trust, and getting the details right.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <MapPin className="text-amber-300" size={22} />
                  <p className="mt-3 font-semibold">Built for Deep Creek properties</p>
                  <p className="mt-2 text-sm leading-6 text-stone-400">Mountain terrain, cabins, decks, retaining walls, grading, and outdoor living spaces.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              id="contact"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="rounded-[30px] border border-amber-400/20 bg-gradient-to-br from-amber-500/15 to-amber-500/5 p-6 sm:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">Contact</p>
              <h2 className="mt-3 text-3xl font-bold">Get a Free Estimate</h2>
              <p className="mt-4 text-stone-200">
                Replace these placeholders with Jace’s actual information before launch.
              </p>

              <div className="mt-6 space-y-4 text-sm sm:text-base">
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/15 p-4">
                  <Phone size={18} className="mt-0.5 text-amber-300" />
                  <div>
                    <p className="font-semibold">Call or Text</p>
                    <p className="text-stone-300">(301) 000-0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/15 p-4">
                  <Mail size={18} className="mt-0.5 text-amber-300" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-stone-300">jace@jnk-contracting.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/15 p-4">
                  <MapPin size={18} className="mt-0.5 text-amber-300" />
                  <div>
                    <p className="font-semibold">Service Area</p>
                    <p className="text-stone-300">Deep Creek Lake, Garrett County, and nearby areas</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+13010000000"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-100"
                >
                  <Phone size={18} />
                  Call Now
                </a>
                <a
                  href="mailto:jace@jnk-contracting.com"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  <Mail size={18} />
                  Email JNK
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
