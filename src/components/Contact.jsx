import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact({ contactInfo }) {
  return (
    <div id="contact" className="contact-panel">
      <p className="section-kicker">Contact</p>
      <h2 className="section-title">Talk through your project</h2>
      <p>
        Need help with an outdoor project, slope issue, retaining wall, deck work, or a
        cabin property improvement? Reach out to JNK Contracting to start the conversation.
      </p>

      <div className="contact-list">
        <div className="contact-item">
          <Phone size={18} className="contact-icon" />
          <div>
            <strong>Call or Text</strong>
            <p>{contactInfo.phoneDisplay}</p>
          </div>
        </div>

        <div className="contact-item">
          <Mail size={18} className="contact-icon" />
          <div>
            <strong>Email</strong>
            <p>{contactInfo.emailDisplay}</p>
          </div>
        </div>

        <div className="contact-item">
          <MapPin size={18} className="contact-icon" />
          <div>
            <strong>Service Area</strong>
            <p>{contactInfo.serviceArea}</p>
          </div>
        </div>
      </div>

      <div className="contact-actions">
        <a href={contactInfo.phoneHref} className="contact-primary">
          <Phone size={16} />
          Call Now
        </a>

        <a href={contactInfo.emailHref} className="contact-secondary">
          <Mail size={16} />
          Email JNK
        </a>
      </div>
    </div>
  );
}