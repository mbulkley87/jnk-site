export default function About({ kicker, title, text, highlights }) {
  return (
    <div className="about-card">
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      <p>{text}</p>

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
  );
}