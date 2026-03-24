import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import IntroBand from './components/IntroBand';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import {
  navLinks,
  services,
  projects,
  highlights,
  contactInfo,
  heroContent,
  introBandContent,
  aboutContent,
  servicesContent,
  projectsContent,
} from './data/siteData';

export default function App() {
  return (
    <div className="site-shell">
      <Header navLinks={navLinks} phoneHref={contactInfo.phoneHref} />

      <main id="home">
        <Hero
          imageSrc={projects[0].src}
          eyebrow={heroContent.eyebrow}
          title={heroContent.title}
          text={heroContent.text}
        />

        <IntroBand
          title={introBandContent.title}
          text={introBandContent.text}
          buttonText={introBandContent.buttonText}
          buttonHref={introBandContent.buttonHref}
        />

        <Services
          kicker={servicesContent.kicker}
          title={servicesContent.title}
          text={servicesContent.text}
          services={services}
        />

        <Projects
          kicker={projectsContent.kicker}
          title={projectsContent.title}
          text={projectsContent.text}
          projects={projects}
        />

        <section id="about" className="section section-white">
          <div className="container two-column">
            <About
              kicker={aboutContent.kicker}
              title={aboutContent.title}
              text={aboutContent.text}
              highlights={highlights}
            />

            <Contact contactInfo={contactInfo} />
          </div>
        </section>
      </main>

      <Footer serviceArea={contactInfo.serviceArea} />
    </div>
  );
}