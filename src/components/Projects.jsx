export default function Projects({ kicker, title, text, projects }) {
  return (
    <section id="projects" className="section section-soft">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">{kicker}</p>
          <h2 className="section-title">{title}</h2>
          <p className="section-text">{text}</p>
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
  );
}