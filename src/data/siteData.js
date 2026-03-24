import {
  Hammer,
  Trees,
  Mountain,
  Flame,
  ShieldCheck,
  House,
} from 'lucide-react';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const heroContent = {
  eyebrow: 'Residential contractor for cabins, homes, and outdoor projects',
  title: 'Quality outdoor construction for Deep Creek and Garrett County homes.',
  text:
    'JNK Contracting specializes in decks, retaining walls, grading, excavation, fire pits, and outdoor property improvements built for mountain terrain and residential living.',
};

export const introBandContent = {
  title: 'Built for the way mountain properties actually live and age',
  text:
    'Around Deep Creek, outdoor work needs to hold up to slope, water, weather, timber, and year-round use. JNK Contracting focuses on practical, well-built residential improvements that feel right for cabins, vacation homes, and local properties.',
  buttonText: 'Explore Services',
  buttonHref: '#services',
};

export const servicesContent = {
  kicker: 'Services',
  title: 'Outdoor construction work homeowners actually need',
  text:
    'From deck work and site prep to grading, retaining walls, and fire pit areas, JNK Contracting focuses on the kinds of residential projects that improve how a property looks, functions, and holds up over time.',
};

export const services = [
  {
    title: 'Deck Construction & Repair',
    text:
      'New deck builds, repairs, resurfacing, stairs, railings, and structural improvements for cabins, vacation homes, and residential properties.',
    icon: Hammer,
  },
  {
    title: 'Retaining Walls & Grading',
    text:
      'Slope-focused grading, drainage-minded site work, and retaining wall solutions built for the terrain common around Deep Creek and Garrett County.',
    icon: Mountain,
  },
  {
    title: 'Excavation & Site Prep',
    text:
      'Clearing, groundwork, access improvements, prep for outdoor projects, and practical site solutions that set the job up the right way.',
    icon: Trees,
  },
  {
    title: 'Fire Pits & Outdoor Living',
    text:
      'Outdoor gathering spaces, paver pads, hardscape features, and cabin-friendly improvements that make mountain properties more usable and more inviting.',
    icon: Flame,
  },
];

export const projectsContent = {
  kicker: 'Recent Work',
  title: 'Show the kind of work local homeowners want to hire',
  text:
    'The biggest upgrade you can make from here is replacing stock photos with real Deep Creek-area project images. Prioritize finished residential work, strong exterior shots, deck photos, grading work, steps, retaining walls, and fire pit spaces.',
};

export const projects = [
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

export const aboutContent = {
  kicker: 'About JNK',
  title: 'Dependable workmanship with a local, residential feel',
  text:
    'JNK Contracting is built around the kind of outdoor construction work that matters most to homeowners in the Deep Creek area - practical improvements, solid craftsmanship, and finished results that look like they belong on the property.',
};

export const highlights = [
  {
    title: 'Built for mountain properties',
    text:
      'Experience with the slopes, weather, grades, drainage, and outdoor conditions that make Deep Creek projects different.',
    icon: Mountain,
  },
  {
    title: 'Residential-first approach',
    text:
      'Work that feels right for cabins, vacation homes, and personal residences - not generic commercial construction.',
    icon: House,
  },
  {
    title: 'Clear communication',
    text:
      'Straightforward quotes, dependable scheduling, and practical recommendations homeowners can feel good about.',
    icon: ShieldCheck,
  },
];

export const contactInfo = {
  phoneDisplay: '(304) 698-6647',
  phoneHref: 'tel:+13046986647',
  emailDisplay: 'info@jnk-contracting.com',
  emailHref: 'mailto:info@jnk-contracting.com',
  serviceArea: 'Deep Creek Lake, Garrett County, and surrounding areas',
};