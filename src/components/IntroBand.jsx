export default function IntroBand({ title, text, buttonText, buttonHref }) {
  return (
    <section className="intro-band">
      <div className="container">
        <h2>{title}</h2>
        <p>{text}</p>

        <div className="intro-band-actions">
          <a href={buttonHref} className="section-button">
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}