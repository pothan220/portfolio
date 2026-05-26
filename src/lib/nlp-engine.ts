export type KnowledgeEntry = {
  id: string;
  tags: string[];
  keywords: string[];
  syns: string[][];
  answer: string;
  followUps: string[];
};

const STOP_WORDS = new Set([
  "a","an","the","is","are","was","were","be","been","have","has","do","does","did","will","would","could","should","i","me","my","we","our","you","your","he","his","she","her","it","its","they","them","what","which","who","this","that","and","but","or","not","just","tell","please","want","know","like","can","get","give","show","explain","any","some","all","most","much","at","by","for","in","of","on","to","with","about"
]);

export const KB: KnowledgeEntry[] = [
  
   { id:"intro", 
    tags:["who","about","pothan","introduction"], keywords:["who","about","pothan","tell","introduce","overview","summary"],
    syns: [["who","about","introduce","overview"]],
    answer: `**Pothan Prathap Puppala** is a Full-Stack Software Engineer based in **Leicester, UK** with 3 years of production experience.\n\nHe has built scalable systems in two demanding domains:\n\n🏥 **Healthcare tech** — Ophthalmology EHR at Nextech\n🛍️ **Global e-commerce** — Look Fantastic / The Hut Group\n\nCore stack: **TypeScript · React · Node.js · AWS**`,
    followUps: ["What companies has he worked at?","What is his tech stack?","Tell me about his projects"]
  },
  {
    id: "experience",
    tags: ["experience","career","work","history"],
    keywords: ["experience","career","worked","background","history","years","job"],
    syns: [["experience","career","background","history"]],
    answer: `**3 years** of hands-on production experience:\n\n**Nextech** *(Aug 2025 – Present)*\nFull-Stack on Ophthalmology EHR — React, TypeScript, Node.js, MongoDB, AWS.\n\n**Banana Apps / The Hut Group** *(Mar 2022 – Oct 2023)*\nFull-Stack on Look Fantastic — Europe's #1 beauty retailer, 100+ international sites, millions of users.`,
    followUps: ["Tell me about Nextech","Tell me about The Hut Group","What were his key achievements?"]
  },
  {
    id: "nextech",
    tags: ["nextech","ehr","healthcare","ophthalmology","clinical"],
    keywords: ["nextech","ehr","ophthalmology","clinical","healthcare","medical","patient","doctor"],
    syns: [["ehr","electronic health record","clinical"],["ophthalmology","eye","doctor"]],
    answer: `At **Nextech** (Ophthalmology EHR platform):\n\nReact/TypeScript components that reduced after-hours documentation for ophthalmologists by an estimated **25%**\n\nRESTful APIs for patient scheduling and billing — **40% API response time improvement**\n\nMongoDB compound indexing — **30% reduction in read latency** on patient data queries\n\n**AWS Lambda + API Gateway** with zero-downtime deployments\n\nCI/CD via GitHub Actions`,
    followUps: ["What AWS services did he use?","Tell me about The Hut Group","What databases does he use?"]
  },
  {
    id: "thg",
    tags: ["hut group","look fantastic","banana apps","ecommerce","beauty"],
    keywords: ["hut","look","fantastic","banana","ecommerce","beauty","retail","global","international"],
    syns: [["hut group","thg","look fantastic"],["ecommerce","e-commerce","retail"]],
    answer: `At **The Hut Group / Look Fantastic**:\n\nPlatform serving **millions of concurrent global users** across 100+ international sites\n\n**35% page load reduction** via React lazy loading and code splitting\n\nCustom caching layer reducing **redundant server requests by ~60%** under peak traffic\n\nMongoDB for product catalogues and order management — tens of millions of records\n\n**20% faster release cycle** through CI/CD and Agile improvements`,
    followUps: ["What is his React experience?","Tell me about Nextech","Tell me about his projects"]
  },
  {
    id: "sentimap",
    tags: ["sentimap","nlp","ai","sentiment","transformer","research","project"],
    keywords: ["sentimap","nlp","sentiment","transformer","tfidf","networkx","research","analysis","project","projects"],
    syns: [["sentimap","sentiment map","ai project","nlp project"],["nlp","natural language processing","text analysis"]],
    answer: `**SentiMap** — AI research analysis platform (MSc project):\n\n**TF-IDF** — extracts high-signal terms from research documents\n\n**Sentence Transformers** — dense vector embeddings for semantic similarity\n\n**NetworkX** — builds a graph of concept relationships\n\nFully custom NLP pipeline built from scratch — no external AI APIs.\n\nPothan's standout project, built entirely himself during his MSc.`,
    followUps: ["What other ML skills does he have?","Tell me about his MSc","What is his full stack?"]
  },
  {
    id: "skills",
    tags: ["skills","stack","technologies","tools"],
    keywords: ["skills","stack","tech","technologies","languages","frameworks","tools","know"],
    syns: [["skills","stack","technologies","tools"]],
    answer: `**Full technical stack:**\n\n**Frontend:** TypeScript · React · Next.js · JavaScript ES6+\n**Backend:** Node.js · Express · Python · Java\n**Cloud:** AWS Lambda · API Gateway · EC2 · GCP · Docker · GitHub Actions\n**Databases:** MongoDB · MySQL · PostgreSQL · SQL Server\n**Testing:** TDD · Postman · Sauce Labs · Code Reviews\n**ML/AI:** PyTorch · TensorFlow · Scikit-learn · Pandas · NLP · TF-IDF · Sentence Transformers`,
    followUps: ["Tell me about his AWS experience","What ML projects has he built?","What databases does he use?"]
  },
  {
    id: "aws",
    tags: ["aws","cloud","lambda","serverless","devops"],
    keywords: ["aws","lambda","cloud","serverless","ec2","api gateway","deploy","infrastructure","devops"],
    syns: [["aws","amazon web services","cloud"],["lambda","serverless"],["deploy","deployment","ci/cd"]],
    answer: `**Production AWS experience** across both roles:\n\n**AWS Lambda** — serverless compute for clinical and e-commerce APIs\n\n**API Gateway** — RESTful API management with zero-downtime releases\n\n**EC2** — compute for longer-running workloads\n\n**GitHub Actions** — CI/CD pipelines with automated test gates\n\nAlso: **GCP/BigQuery** and **Docker**\n\nMultiple weekly releases in production at The Hut Group.`,
    followUps: ["Tell me about his database experience","What is his full stack?","Tell me about Nextech"]
  },
    { id:"contact", tags:["contact","hire","available","email","opportunity"], 
    keywords:["contact","hire","available","email","phone","reach","opportunity","job","open","pothan","how","touch","get"],
    syns: [["hire","recruit","opportunity","job"],["contact","email","reach"]],
    answer: `Pothan is **open to new opportunities** 🟢\n\n📧 pothan220@gmail.com\n📞 +44 7375 916050\n📍 Leicester, UK\n\nOpen to remote, hybrid, or on-site roles. Click **Download CV** at the top to grab his resume!`,
    followUps: ["What is his experience?","What is his tech stack?","Tell me about his projects"]
  },
  {
    id: "react",
    tags: ["react","frontend","ui","component","nextjs"],
    keywords: ["react","frontend","ui","component","hooks","nextjs","next"],
    syns: [["react","reactjs"],["nextjs","next.js"]],
    answer: `**Strong React experience in production:**\n\nReact + TypeScript at Nextech (complex clinical UIs) and The Hut Group (high-traffic global B2C)\n\n**Lazy loading + code splitting** — 35% page load reduction across 100+ international sites\n\n**Next.js** for personal and MSc project work\n\nCustom hooks, performance optimisation, responsive design`,
    followUps: ["What about his Node.js experience?","Tell me about The Hut Group","What is his full stack?"]
  },
  {
    id: "msc",
    tags: ["msc","masters","university","leicester","education"],
    keywords: ["msc","masters","university","leicester","education","degree","academic"],
    syns: [["msc","masters","postgraduate","degree"]],
    answer: `**MSc Advanced Computer Science** — University of Leicester *(2024–2025)*\n\nFocus areas: Machine learning · Deep learning · NLP · Advanced algorithms\n\n**Project:**\n**SentiMap** — custom NLP research analysis tool built from scratch using TF-IDF, Sentence Transformers and NetworkX. No external AI APIs.`,
    followUps: ["Tell me about SentiMap","What ML frameworks does he use?","Is Pothan available to hire?"]
  }
];

export const FALLBACK: KnowledgeEntry = {
  id: "fallback",
  tags: [],
  keywords: [],
  syns: [],
  answer: `I'm not quite sure about that one. I can tell you about:\n\nExperience — Nextech and The Hut Group\n\nProjects — SentiMap (NLP/AI), EHR Platform, Look Fantastic\n\nSkills — React, TypeScript, Node.js, AWS, ML/NLP\n\nContact — how to reach Pothan`,
  followUps: ["Tell me about his experience","What is his tech stack?","How can I contact Pothan?"]
};

function buildIdf(kb: KnowledgeEntry[]) {
  const df: Record<string, number> = {};
  const N = kb.length;
  kb.forEach((e) => {
    const seen = new Set([...e.keywords, ...e.tags]);
    seen.forEach((t) => (df[t] = (df[t] || 0) + 1));
  });
  const idf: Record<string, number> = {};
  Object.keys(df).forEach((t) => (idf[t] = Math.log(N / df[t]) + 1));
  return idf;
}

function buildSynMap(kb: KnowledgeEntry[]) {
  const map: Record<string, string> = {};
  kb.forEach((e) => e.syns.forEach((group) => {
    const canonical = group[0];
    group.forEach((word) => word.split(" ").forEach((token) => (map[token] = canonical)));
  }));
  return map;
}

function lev(a: string, b: string) {
  const dp = Array.from({ length: a.length + 1 }, (_, i) => Array.from({ length: b.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)));
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[a.length][b.length];
}

function fuzzy(a: string, b: string) {
  if (a === b) return 1;
  if (a.includes(b) || b.includes(a)) return 0.85;
  const maxLength = Math.max(a.length, b.length);
  if (maxLength === 0) return 1;
  const distance = lev(a, b);
  if (distance > maxLength * 0.4) return 0;
  return 1 - distance / maxLength;
}

function normalise(text: string) {
  return text.toLowerCase().replace(/[^\w\s]/g, " ").split(/\s+/).filter((w) => w.length > 1 && !STOP_WORDS.has(w));
}

const IDF = buildIdf(KB);
const SYNMAP = buildSynMap(KB);

export function nlpSearch(query: string): KnowledgeEntry {
  const tokens = normalise(query);
  const expanded = [...new Set([...tokens, ...tokens.map((t) => SYNMAP[t] || t)])];
  if (!expanded.length) return FALLBACK;
  let best: KnowledgeEntry | null = null;
  let bestScore = 0;
  KB.forEach((entry) => {
    let score = 0;
    expanded.forEach((token) => {
      const idf = IDF[token] || 1;
      entry.keywords.forEach((kw) => { const s = fuzzy(token, kw); if (s > 0) score += s * 2 * idf; });
      entry.tags.forEach((tag) => tag.split(" ").forEach((tt) => { const s = fuzzy(token, tt); if (s > 0) score += s * idf; }));
    });
    const norm = score / Math.max(expanded.length, 1);
    if (norm > bestScore) { bestScore = norm; best = entry; }
  });
  return bestScore >= 0.15 && best ? best : FALLBACK;
}