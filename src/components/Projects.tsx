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
    impact:
      "Implemented semantic scoring, concept mapping and retrieval logic without external AI APIs.",
  },

  {
    title: "Placements Management App",
    category: "MSc Final Project",
    role: "Full-Stack Developer",
    tags: ["Spring Boot", "Next.js", "PostgreSQL", "JWT", "REST API"],
    desc: "Developed a university placements management platform with role-based workflows for students, tutors and providers.",
    impact:
      "Built placement requests, approvals, visits, reports, notifications and analytics modules.",
  },

  {
    title: "Ophthalmology EHR Platform",
    category: "Healthcare Software",
    role: "Software Engineer",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "AWS Lambda"],
    desc: "Worked on a clinical charting system used by ophthalmology professionals for patient documentation workflows.",
    impact:
      "Improved reusable frontend components, API integrations and backend performance-focused features.",
  },

  {
    title: "Look Fantastic — Global E-commerce",
    category: "E-commerce Platform",
    role: "Full-Stack Developer",
    tags: ["React", "Node.js", "Express", "MongoDB", "AWS"],
    desc: "Contributed to a large-scale e-commerce platform supporting international product catalogue workflows.",
    impact:
      "Worked on frontend optimisation, lazy loading, caching and scalable backend improvements.",
  },

  {
    title: "RESTful API Architecture",
    category: "Backend Engineering",
    role: "API Developer",
    tags: ["Node.js", "Express.js", "REST", "OAuth 2.0", "Postman"],
    desc: "Designed and maintained APIs for scheduling, billing, integrations and product catalogue management.",
    impact:
      "Focused on authentication, endpoint design, query optimisation and reliable API responses.",
  },

  {
    title: "AWS Serverless Infrastructure",
    category: "Cloud / DevOps",
    role: "Cloud Developer",
    tags: ["AWS Lambda", "API Gateway", "EC2", "GitHub Actions", "Docker"],
    desc: "Supported cloud-based services using AWS Lambda, API Gateway and deployment automation pipelines.",
    impact:
      "Improved release reliability using CI/CD workflows and deployment-focused automation.",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-label">// Featured work</div>

      <h2 className="section-title">
        Selected project experience.
      </h2>

      <div className="divider" />

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            category={project.category}
            role={project.role}
            desc={project.desc}
            impact={project.impact}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  category,
  role,
  desc,
  impact,
  tags,
}: ProjectCardProps) {
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
          <span className="impact-label">
            Contribution
          </span>

          <p>{impact}</p>
        </div>

        <div className="project-tech">
          {tags.map((tag, i) => (
            <span
              className={`tag ${i < 2 ? "accent" : ""}`}
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}