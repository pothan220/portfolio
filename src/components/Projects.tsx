type ProjectCardProps = {
  title: string;
  category: string;
  role: string;
  desc: string;
  impact: string;
  tags: string[];
};

const projects: ProjectCardProps[] = [
  {
    title: "SentiMap — AI Research Analysis",
    category: "AI / NLP Project",
    role: "Research & Development",
    tags: ["NLP", "TF-IDF", "Sentence Transformers", "NetworkX", "Python"],
    desc: "Built a research analysis platform that identifies relationships between academic concepts using NLP techniques and graph-based visualisation.",
    impact: "Implemented semantic scoring, concept mapping and retrieval logic without external AI APIs — fully custom NLP pipeline.",
  },
 
  {
    title: "Ophthalmology EHR Platform",
    category: "Healthcare Software",
    role: "Software Engineer",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "AWS Lambda"],
    desc: "Production clinical charting system used daily by ophthalmology practices for patient documentation and scheduling workflows.",
    impact: "Delivered reusable frontend components, EHR data integrations and backend performance improvements — 40% API response gain.",
  },
  {
    title: "Look Fantastic — Global E-commerce",
    category: "E-commerce Platform",
    role: "Full-Stack Developer",
    tags: ["React", "Node.js", "Express", "MongoDB", "AWS"],
    desc: "Contributed to Europe's #1 premium beauty retailer — a platform serving millions of users across 100+ international sites.",
    impact: "Reduced page load time by 35% via lazy loading and code splitting. Cut redundant API requests by ~60% with custom caching.",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-label">// Featured work</div>
      <h2 className="section-title">Selected project experience.</h2>
      <div className="divider" />
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ title, category, role, desc, impact, tags }: ProjectCardProps) {
  return (
    <article className="project-card reveal">
      <div className="project-topline">
        <span>{category}</span>
        <span>{role}</span>
      </div>
      <div className="project-body">
        <h3 className="project-name">{title}</h3>
        <p className="project-desc">{desc}</p>
        <div className="project-impact">
          <span className="impact-label">Contribution</span>
          <p>{impact}</p>
        </div>
        <div className="project-tech">
          {tags.map((tag, i) => (
            <span className={`tag ${i < 2 ? "accent" : ""}`} key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}