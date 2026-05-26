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
            <li>Engineered TypeScript/React clinical charting components that <strong>reduced after-hours documentation time for ophthalmologists by an estimated 25%</strong>, based on stakeholder feedback during sprint reviews.</li>
            <li>Optimised Node.js/Express RESTful APIs handling patient scheduling, billing and EHR data — cutting average <strong>API response times by 40%</strong> through query analysis, indexing and payload restructuring.</li>
            <li>Designed <strong>MongoDB data models</strong> for high-volume clinical records, introducing compound indexing that reduced read latency on patient data queries by over 30%.</li>
            <li>Deployed and maintained production services on <strong>AWS Lambda and API Gateway</strong>, supporting zero-downtime release cycles across practice-critical workflows serving active clinical users daily.</li>
            <li>Drove <strong>CI/CD pipeline improvements</strong> using GitHub Actions, reducing deployment time and enforcing automated test gates that cut regression incidents in production.</li>
            <li>Partnered with ophthalmology stakeholders to translate domain-specific workflow requirements into intuitive UI features, <strong>reducing manual steps in core charting flows</strong>.</li>
          </ul>
        </div>
        <div className="exp-item reveal">
          <div className="exp-dot exp-dot-blue" />
          <div className="exp-date">March 2022 – October 2023</div>
          <div className="exp-title">Full-Stack Developer</div>
          <div className="exp-company">Banana Apps Ltd · Client: The Hut Group (Look Fantastic)</div>
          <div className="exp-tags">{["React","Node.js","MongoDB","AWS","GitHub Actions","E-commerce"].map(t => <span className="exp-tag" key={t}>{t}</span>)}</div>
          <ul className="exp-bullets">
            <li>Built and shipped React/Node.js features on a <strong>platform serving millions of concurrent global users</strong> across 100+ international e-commerce sites.</li>
            <li>Implemented lazy loading and code splitting across the React component tree, <strong>reducing initial page load time by 35%</strong> and improving Core Web Vitals scores across all international deployments.</li>
            <li>Refactored API call patterns and introduced a custom caching layer, <strong>reducing redundant server requests by ~60%</strong> and improving throughput under peak traffic conditions.</li>
            <li>Maintained and extended <strong>MongoDB-backed services</strong> supporting global product catalogues, user accounts and order management — handling tens of millions of records across multiple regions.</li>
            <li>Delivered features via AWS Lambda/API Gateway with <strong>multiple weekly releases</strong> and no major production incidents.</li>
            <li>Contributed to a <strong>20% improvement in release cycle speed</strong> through CI/CD automation improvements and stricter code review standards across the team.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}