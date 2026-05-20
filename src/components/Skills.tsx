const groups = [
  ["⚡", "Frontend", ["TypeScript", "React", "Next.js", "JavaScript ES6+", "Lazy Loading", "Code Splitting", "Responsive UI"]],
  ["🔧", "Backend", ["Node.js", "Express.js", "RESTful API Design", "OAuth 2.0", "OpenID Connect", "Spring Boot", "Python", "Java"]],
  ["☁️", "Cloud & Infrastructure", ["AWS Lambda", "API Gateway", "EC2", "GCP / BigQuery", "Serverless", "Docker", "CI/CD", "GitHub Actions"]],
  ["🗄️", "Data & Databases", ["MongoDB", "Sharding & Indexing", "MySQL", "SQL Server", "PostgreSQL", "Custom Caching"]],
  ["🧪", "Testing & Quality", ["TDD", "Unit Testing", "Integration Testing", "Postman", "Sauce Labs", "Code Reviews", "Agile / Scrum", "JIRA"]],
  ["🤖", "ML / AI & NLP", ["NLP", "TF-IDF", "Sentence Transformers", "PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NetworkX"]],
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label">// Technical arsenal</div>
      <h2 className="section-title">What I work with.</h2>
      <div className="divider" />
      <div className="skills-grid">
        {groups.map(([icon, title, tags], i) => (
          <div className="skill-card reveal" style={{ transitionDelay: `${i * 0.1}s` }} key={title as string}>
            <div className="skill-card-icon">{icon as string}</div>
            <h3>{title as string}</h3>
            <div className="skill-tags">
              {(tags as string[]).map((tag, index) => <span className={`tag ${index < 2 ? "accent" : ""}`} key={tag}>{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
