export default function About() {
  return (
    <section id="about">
      <div className="section-label">// About me</div>
      <h2 className="section-title">Engineer by craft,<br />problem-solver by nature.</h2>
      <div className="divider" />
      <div className="about-grid reveal">
        <div className="about-text">
          <p>I&apos;ve shipped production software for clinical workflows used by real healthcare teams — and I know the difference between code that works and code that holds up.</p>
          <p>I&apos;m a <strong>Full-Stack Software Engineer</strong> with 3 years of experience across <strong>healthcare technology</strong> and <strong>global e-commerce</strong>. My day-to-day is React, TypeScript, Node.js, MongoDB and AWS — building backend systems and frontend experiences that don&apos;t fall over when real users hit them.</p>
          <p>At Nextech Systems I work on production healthcare applications where slow or broken isn&apos;t an option. Before that I built and maintained e-commerce platforms serving millions of users across 100+ international sites. I recently completed an <strong>MSc in Advanced Computer Science</strong> at the University of Leicester, which pushed me deep into AI, NLP and machine learning on top of my engineering foundations.</p>
          <p>What I actually enjoy: picking apart a messy codebase, finding where the performance dies, and fixing it properly. Building APIs other developers find a pleasure to work with. Shipping things that matter to the people using them.</p>
          
        </div>
        <div className="about-right">
          <div className="section-label">// Core proficiency</div>
          <div className="skill-tags" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1rem" }}>
            {["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Express.js", "AWS Lambda", "API Gateway", "MongoDB", "MySQL", "PostgreSQL", "Docker", "GitHub Actions", "CI/CD", "REST APIs", "Python", "NLP", "TDD"].map((tag, i) => (
              <span className={`tag ${i < 4 ? "accent" : ""}`} key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}