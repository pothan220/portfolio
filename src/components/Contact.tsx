export default function Contact() {
  return (
    <section id="contact">
      <div className="section-label">// Get in touch</div>
      <h2 className="section-title">Let&apos;s build something.</h2>
      <div className="divider" />
      <div className="contact-section-grid reveal">
        <div className="contact-section">
          <p>Whether you&apos;re looking for a full-stack engineer to join your team, want to collaborate on something interesting, or just want to talk code — I&apos;m open to it.</p>
          <a href="mailto:pothan220@gmail.com" className="btn btn-primary" style={{ marginRight: "0.75rem" }}>Send a message ↗</a>
          <a href="https://drive.google.com/uc?export=download&id=1nalEgSZzUwgXcpCYeop1lQAIlEw6fRHr" className="btn btn-download">↓ Download CV</a>
        </div>
        <ul className="contact-info-list">
          <li><span className="ci-label">Email</span><span className="ci-value"><a href="mailto:pothan220@gmail.com">pothan220@gmail.com</a></span></li>
          <li><span className="ci-label">Phone</span><span className="ci-value"><a href="tel:+447375916050">+44 7375 916050</a></span></li>
          <li><span className="ci-label">Location</span><span className="ci-value">Leicester, UK</span></li>
          <li><span className="ci-label">Availability</span><span className="ci-value" style={{ color: "var(--accent)" }}>● Open to opportunities</span></li>
          <li>
  <span className="ci-label">LinkedIn</span>

  <span className="ci-value">
    <a
      href="https://www.linkedin.com/in/prathap220/"
      target="_blank"
      rel="noopener noreferrer"
    >
      linkedin.com/in/prathap220
    </a>
  </span>
</li>
          <li><span className="ci-label">Resume</span><span className="ci-value"><a href="/Pothan_CV.pdf" download="Pothan_Prathap_Puppala_CV.pdf">Pothan_Prathap_Puppala_CV.pdf</a></span></li>
       
       
        </ul>
      </div>
    </section>
  );
}
