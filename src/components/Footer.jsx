export default function Footer({ serviceArea }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} JNK Contracting. All rights reserved.</p>
        <p>Serving {serviceArea}</p>
      </div>
    </footer>
  );
}