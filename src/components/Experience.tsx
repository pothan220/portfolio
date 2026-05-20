export default function Experience() {
  return (
    <section id="experience">
      <div className="section-label">// Work history</div>
      <h2 className="section-title">Where I&apos;ve built things.</h2>
      <div className="divider" />
      <div className="exp-timeline">
        <div className="exp-item reveal">
          <div className="exp-dot" />
          <div className="exp-date">Aug 2025 – Present</div>
          <div className="exp-title">Full-Stack Developer</div>
          <div className="exp-company">Nextech · Ophthalmology EHR Platform</div>
          <div className="exp-tags">{["React","TypeScript","Node.js","AWS Lambda","MongoDB","Agile"].map(t => <span className="exp-tag" key={t}>{t}</span>)}</div>
          <ul className="exp-bullets">
            <li>Developed TypeScript/React front-end components that <strong>streamlined clinical charting workflows</strong>, directly reducing after-hours documentation for Ophthalmologists.</li>
            <li>Designed and maintained RESTful APIs handling patient scheduling, billing and EHR data integrations, achieving up to <strong>40% improvement in API response times</strong>.</li>
            <li>Deployed production services on <strong>AWS Lambda and API Gateway</strong> with zero-downtime releases.</li>
            <li>Implemented <strong>MongoDB data models</strong> for clinical records, optimizing query throughput for high-volume patient data.</li>
            <li>Collaborated with clinical stakeholders to translate Ophthalmology-specific requirements into intuitive UI features.</li>
            <li>Maintained <strong>CI/CD pipelines</strong> using GitHub Actions with automated testing and peer review.</li>
          </ul>
        </div>
        <div className="exp-item reveal">
          <div className="exp-dot exp-dot-blue" />
          <div className="exp-date">March 2022 – October 2023</div>
          <div className="exp-title">Full-Stack Developer</div>
          <div className="exp-company">Banana Apps Ltd · Client: The Hut Group (Look Fantastic)</div>
          <div className="exp-tags">{["React","Node.js","MongoDB","AWS","GitHub Actions","E-commerce"].map(t => <span className="exp-tag" key={t}>{t}</span>)}</div>
          <ul className="exp-bullets">
            <li>Built and shipped React/Node.js features on a <strong>platform serving millions of concurrent global users</strong>.</li>
            <li>Implemented lazy loading and code splitting, <strong>reducing initial page load time by 35%</strong> across 100+ international sites.</li>
            <li>Introduced custom caching strategies, <strong>scaling to 500+ concurrent users</strong> without service degradation.</li>
            <li>Maintained <strong>MongoDB-backed services</strong> for product catalogues, user accounts and order management globally.</li>
            <li>Delivered features via AWS Lambda/API Gateway with multiple weekly releases.</li>
            <li>Contributed to a <strong>20% improvement in release cycle speed</strong> through Agile and CI/CD improvements.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
