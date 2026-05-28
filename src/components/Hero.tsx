export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      <div className="hero-glow2" />
      <div className="hero-tag">Software Engineer  · Leicester, UK</div>
      <h1>Pothan<br /><span>Prathap</span><br />Puppala.</h1>
      <p className="hero-sub">Building scalable full-stack systems — from Ophthalmology EHR platforms to global e-commerce serving millions. 3 years shipping production code in TypeScript, React, and AWS.</p>
      <div className="hero-cta">
        <a href="#experience" className="btn btn-primary">View Work ↓</a>
        <a href="#contact" className="btn btn-ghost">Get in touch</a>
        <a href="/Pothan_CV.pdf" download="Pothan_Prathap_Puppala_CV.pdf" className="btn btn-download">↓ Download CV</a>
      </div>
      <div className="hero-stats">
        <div className="stat-item"><div className="stat-num">3+</div><div className="stat-label">Years Experience</div></div>
        <div className="stat-item"><div className="stat-num">100+</div><div className="stat-label">International Sites</div></div>
        <div className="stat-item"><div className="stat-num">40%</div><div className="stat-label">API Perf Gain</div></div>
      </div>
    </section>
  );
}
