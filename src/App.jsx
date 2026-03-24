import { motion } from 'framer-motion';
import { Phone, Hammer, Mountain, Image as ImageIcon, BadgeCheck, Mail, MapPin } from 'lucide-react';

export default function App() {
  const services = [
    {
      title: 'Deck Construction & Repair',
      text: 'New builds, repairs, structural fixes, resurfacing, and upgrades that improve both appearance and durability.',
      icon: Hammer,
    },
    {
      title: 'Retaining Walls & Grading',
      text: 'Slope management, leveling, drainage-minded grading, and retaining wall work built for mountain properties.',
      icon: Mountain,
    },
    {
      title: 'Excavation & Land Prep',
      text: 'Site prep, clearing, groundwork, and project-ready grading for outdoor improvements and new construction.',
      icon: BadgeCheck,
    },
    {
      title: 'Fire Pits & Outdoor Spaces',
      text: 'Custom outdoor gathering areas designed to feel finished, practical, and built to last.',
      icon: ImageIcon,
    },
  ];

  const projects = [
    {
      src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80',
      title: 'Featured Project',
      tag: 'Lead with this',
      description: 'Replace this first image with the strongest Castle Creek Lodge photo. This should be the immediate show-stopper.',
    },
    {
      src: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1400&q=80',
      title: 'Outdoor Construction',
      tag: 'Decks - walls - grading',
      description: 'Use a clean finished shot that shows quality, scale, and craftsmanship at a glance.',
    },
    {
      src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80',
      title: 'Property Improvements',
      tag: 'Before / after ready',
      description: 'Swap in another strong finished project or a dramatic before-and-after once Jace sends photos.',
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_22%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="mb-5 inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-xs font-medium tracking-wide text-orange-200 sm:text-sm">
              Garrett County - Deep Creek Lake - Surrounding Areas
            </div>

            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              JNK Contracting Services
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
              High-quality outdoor construction and property improvements with a focus on craftsmanship, reliability, and results that look as good as they perform.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+13010000000"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-400"
              >
                <Phone size={18} />
                Call for a Quote
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                View Projects
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-2xl font-bold">Local</p>
                <p className="mt-1 text-sm text-neutral-400">Built for mountain properties</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-2xl font-bold">Responsive</p>
                <p className="mt-1 text-sm text-neutral-400">Fast estimates and communication</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-2xl font-bold">Custom</p>
                <p className="mt-1 text-sm text-neutral-400">Work tailored to the property</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative z-10"
          >
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/30">
              <div className="relative overflow-hidden rounded-[22px]">
                <img
                  src={projects[0].src}
                  alt={projects[0].title}
                  className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[520px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="mb-2 inline-flex rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                    Featured Work
                  </p>
                  <h2 className="text-2xl font-bold sm:text-3xl">Showcase the Best Project First</h2>
                  <p className="mt-2 max-w-lg text-sm text-neutral-200 sm:text-base">
                    Use the strongest Castle Creek Lodge image here to instantly make the site feel premium and credible.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-300">Services</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Built to convert visitors into calls</h2>
          <p className="mt-4 text-neutral-300">
            Keep the structure simple. Show the work, explain the core services, and make it obvious how to get in touch.
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
                className="rounded-[26px] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-orange-500/15 p-3 text-orange-300">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-400">{service.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="projects" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-300">Recent Projects</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Lead with the strongest visuals</h2>
              <p className="mt-4 text-neutral-300">
                Mobile-friendly cards, strong imagery, and short project captions are all you need for a polished first version.
              </p>
            </div>
            <a href="#contact" className="text-sm font-semibold text-orange-300 hover:text-orange-200">
              Request an estimate →
            </a>
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
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-neutral-900"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-72"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">{project.tag}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-400">{project.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[1.1fr,0.9fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="rounded-[28px] border border-white/10 bg-white/5 p-6 sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-300">Why this works</p>
            <h2 className="mt-3 text-3xl font-bold">Simple beats complicated</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="font-semibold">Fast to launch</p>
                <p className="mt-2 text-sm text-neutral-400">One page, clear structure, and easy photo swaps keep this moving.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="font-semibold">Looks great on mobile</p>
                <p className="mt-2 text-sm text-neutral-400">Stacked sections, large tap targets, and responsive grids make it phone-friendly.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="font-semibold">Trust-building</p>
                <p className="mt-2 text-sm text-neutral-400">Strong photos and local positioning do most of the heavy lifting.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="font-semibold">Easy to expand later</p>
                <p className="mt-2 text-sm text-neutral-400">You can add reviews, more projects, and a logo later without rebuilding everything.</p>
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
            className="rounded-[28px] border border-orange-400/20 bg-gradient-to-br from-orange-500/15 to-orange-500/5 p-6 sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-200">Contact</p>
            <h2 className="mt-3 text-3xl font-bold">Get a Free Estimate</h2>
            <p className="mt-4 text-neutral-200">
              Replace the placeholders below before launch, then this section is ready to go.
            </p>

            <div className="mt-6 space-y-4 text-sm sm:text-base">
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/15 p-4">
                <Phone size={18} className="mt-0.5 text-orange-300" />
                <div>
                  <p className="font-semibold">Call or Text</p>
                  <p className="text-neutral-300">(301) 000-0000</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/15 p-4">
                <Mail size={18} className="mt-0.5 text-orange-300" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-neutral-300">jace@jnk-contracting.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/15 p-4">
                <MapPin size={18} className="mt-0.5 text-orange-300" />
                <div>
                  <p className="font-semibold">Service Area</p>
                  <p className="text-neutral-300">Deep Creek Lake, Garrett County, and nearby areas</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+13010000000"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-100"
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
    </div>
  );
}
