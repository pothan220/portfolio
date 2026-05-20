export default function Education() {
  return (
    <section id="education">
      <div className="section-label">// Education</div>
      <h2 className="section-title">Academic background.</h2>
      <div className="divider" />
      <div className="edu-card reveal">
        <div className="edu-degree">MSc Advanced Computer Science</div>
        <div className="edu-uni">University of Leicester</div>
        <div className="edu-year">2024 – 2025</div>
        <div className="skill-tags" style={{ marginTop: "1.2rem" }}>
          {["Machine Learning","NLP","Deep Learning","PyTorch","TensorFlow","Pandas","Advanced Algorithms","Spring Boot"].map(t => <span className="tag" key={t}>{t}</span>)}
        </div>
      </div>
    </section>
  );
}
