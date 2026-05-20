const bars = [
  ["TypeScript / JavaScript", 95], ["React / Next.js", 92], ["Node.js / Express", 90],
  ["AWS (Lambda, API GW, EC2)", 82], ["MongoDB / MySQL", 85], ["Python / ML / NLP", 70]
];

export default function About() {
  return (
    <section id="about">
      <div className="section-label">// About me</div>
      <h2 className="section-title">Engineer by craft,<br />problem-solver by nature.</h2>
      <div className="divider" />
      <div className="about-grid reveal">
        <div className="about-text">
          <p>I&apos;m a <strong>Full-Stack Software Engineer</strong> with approximately 3 years of hands-on experience building scalable web applications across two highly demanding domains — <strong>healthcare technology</strong> and <strong>global e-commerce</strong>.</p>
          <p>Proficient in <strong>TypeScript, JavaScript, React</strong> and <strong>Node.js</strong>, with solid exposure to AWS cloud infrastructure, RESTful API design and CI/CD pipelines. Comfortable working in fast-paced Agile teams and contributing to code quality through reviews and test-driven development.</p>
          <p>Recently completed an <strong>MSc in Advanced Computer Science</strong> at the University of Leicester, expanding into AI, NLP, machine learning, and intelligent software systems alongside modern full-stack engineering practices.</p>
          <ul className="contact-list">
            <li><span className="contact-icon">✉</span><a href="mailto:pothanpuppala@gmail.com">pothan220@gmail.com</a></li>
            <li><span className="contact-icon">✆</span><a href="tel:+447375916050">+44 7375 916050</a></li>
            <li><span className="contact-icon">⚑</span><span>Leicester, UK</span></li>
            <li><span className="contact-icon">↓</span><a href="https://drive.google.com/uc?export=download&id=1nalEgSZzUwgXcpCYeop1lQAIlEw6fRHr" download="Pothan_Prathap_Puppala_CV.pdf">Download Resume (PDF)</a></li>
            <li><span className="contact-icon">in</span><a href="https://www.linkedin.com/in/prathap220/"target="_blank" rel="noopener noreferrer">linkedin.com/in/prathap220</a></li>
          </ul>
        </div>
        <div className="about-right">
          <div className="section-label">// Core proficiency</div>
          <div className="skill-bar-wrap">
            {bars.map(([label, value]) => (
              <div className="skill-bar-item" key={label as string}>
                <div className="skill-bar-label"><span>{label}</span><span>{value}%</span></div>
                <div className="skill-bar-track"><div className="skill-bar-fill" data-width={value} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
