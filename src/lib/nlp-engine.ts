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
  { id:"intro", tags:["who","about","pothan","introduction"], keywords:["who","about","pothan","tell","introduce","overview","summary"], syns:[["who","about","introduce","overview"]], answer:`**Pothan Prathap Puppala** is a Senior Full-Stack Software Engineer based in **Leicester, UK** with ~3 years of production experience.\n\nHe's built scalable systems in two demanding domains:\n🏥 **Healthcare tech** — Ophthalmology EHR at Nextech\n🛍️ **Global e-commerce** — Look Fantastic / The Hut Group\n\nCore stack: **TypeScript · React · Node.js · AWS**`, followUps:["What companies has he worked at?","What is his tech stack?","Tell me about his projects"] },
  { id:"experience", tags:["experience","career","work","history"], keywords:["experience","career","worked","background","history","years","job"], syns:[["experience","career","background","history"]], answer:`**~3 years** of hands-on production experience:\n\n**Nextech** *(Aug 2025 – Present)*\nFull-Stack on Ophthalmology EHR — React, TypeScript, Node.js, MongoDB, AWS.\n\n**Banana Apps / The Hut Group** *(Mar 2022 – Oct 2023)*\nFull-Stack on Look Fantastic — Europe's #1 beauty retailer, 100+ international sites, millions of users.`, followUps:["Tell me about Nextech","Tell me about The Hut Group","What were his key achievements?"] },
  { id:"nextech", tags:["nextech","ehr","healthcare","ophthalmology","clinical"], keywords:["nextech","ehr","ophthalmology","clinical","healthcare","medical","patient","doctor"], syns:[["ehr","electronic health record","clinical"],["ophthalmology","eye","doctor"]], answer:`At **Nextech** (Ophthalmology EHR platform):\n\n→ React/TypeScript components reducing after-hours documentation for doctors\n→ RESTful APIs for patient scheduling & billing → **40% API response improvement**\n→ **AWS Lambda + API Gateway** zero-downtime deployments\n→ MongoDB data models for high-volume clinical records\n→ CI/CD via GitHub Actions`, followUps:["What AWS services did he use?","Tell me about The Hut Group","What databases does he use?"] },
  { id:"thg", tags:["hut group","look fantastic","banana apps","ecommerce","beauty"], keywords:["hut","look","fantastic","banana","ecommerce","beauty","retail","global","international"], syns:[["hut group","thg","look fantastic"],["ecommerce","e-commerce","retail"]], answer:`At **The Hut Group / Look Fantastic**:\n\n→ Platform serving **millions of concurrent global users**\n→ **35% page load reduction** via React lazy loading & code splitting\n→ **500+ concurrent users** handled with custom caching\n→ MongoDB for product catalogues & order management\n→ **20% faster release cycle** through Agile & CI/CD`, followUps:["What is his React experience?","Tell me about Nextech","Tell me about his projects"] },
  { id:"sentimap", tags:["sentimap","nlp","ai","sentiment","transformer","research"], keywords:["sentimap","nlp","sentiment","transformer","tfidf","networkx","research","analysis"], syns:[["sentimap","sentiment map","ai project","nlp project"],["nlp","natural language processing","text analysis"]], answer:`**SentiMap** — AI-powered research analysis platform:\n\n**How it works:**\n→ **TF-IDF** — extracts high-signal terms from research docs\n→ **Sentence Transformers** — dense vector embeddings for semantic similarity\n→ **NetworkX** — builds a graph of concept relationships\n→ Custom NLP pipeline from scratch\n\n**No external AI APIs** — Pothan built the whole NLP stack himself. This is his standout AI project.`, followUps:["What other ML skills does he have?","Tell me about his MSc","What is his full stack?"] },
  { id:"placement", tags:["placement","msc","project","spring boot","university"], keywords:["placement","msc","masters","university","leicester","spring","springboot","postgresql","jwt"], syns:[["msc","masters","postgraduate","degree"],["placement","placements management"]], answer:`**Placements Management App** — MSc final project:\n\n→ **Spring Boot** backend with role-based access control\n→ **PostgreSQL** database\n→ **JWT authentication**\n→ **Next.js** frontend\n→ Full RESTful API architecture\n\nBuilt to track university placement processes end-to-end.`, followUps:["Tell me about SentiMap","What ML frameworks does he use?","Is Pothan available to hire?"] },
  { id:"skills", tags:["skills","stack","technologies","tools"], keywords:["skills","stack","tech","technologies","languages","frameworks","tools","know"], syns:[["skills","stack","technologies","tools"]], answer:`**Full technical stack:**\n\n**Frontend:** TypeScript · React · Next.js · JavaScript ES6+\n**Backend:** Node.js · Express · Spring Boot · Python · Java\n**Cloud:** AWS Lambda · API Gateway · EC2 · GCP · Docker · GitHub Actions\n**Databases:** MongoDB · MySQL · PostgreSQL · SQL Server\n**Testing:** TDD · Postman · Sauce Labs · Code Reviews\n**ML/AI:** PyTorch · TensorFlow · Scikit-learn · Pandas · NLP · TF-IDF · Sentence Transformers`, followUps:["Tell me about his AWS experience","What ML projects has he built?","What databases does he use?"] },
  { id:"aws", tags:["aws","cloud","lambda","serverless","devops"], keywords:["aws","lambda","cloud","serverless","ec2","api gateway","deploy","infrastructure","devops"], syns:[["aws","amazon web services","cloud"],["lambda","serverless"],["deploy","deployment","ci/cd"]], answer:`**Production AWS experience** across both roles:\n\n→ **AWS Lambda** — serverless compute for clinical & e-commerce APIs\n→ **API Gateway** — RESTful API management, zero-downtime\n→ **EC2** — compute for longer-running workloads\n→ **GitHub Actions** — CI/CD pipelines\n→ Also: **GCP/BigQuery** and **Docker**\n\nMultiple weekly releases in production at The Hut Group.`, followUps:["Tell me about his database experience","What is his full stack?","Tell me about Nextech"] },
  { id:"contact", tags:["contact","hire","available","email","opportunity"], keywords:["contact","hire","available","email","phone","reach","opportunity","job","open"], syns:[["hire","recruit","opportunity","job"],["contact","email","reach"]], answer:`Pothan is **open to new opportunities** 🟢\n\n📧 pothan220@gmail.com\n📞 +44 7375 916050\n📍 Leicester, UK\n\nOpen to remote, hybrid, or on-site roles. Click **Download CV** at the top to grab his resume!`, followUps:["What is his experience?","What is his tech stack?","Tell me about his projects"] },
  { id:"react", tags:["react","frontend","ui","component","nextjs"], keywords:["react","frontend","ui","component","hooks","nextjs","next"], syns:[["react","reactjs"],["nextjs","next.js"]], answer:`**Strong React experience in production:**\n\n→ React + TypeScript at Nextech (complex clinical UIs) and The Hut Group (high-traffic B2C)\n→ **Lazy loading + code splitting** → 35% page load reduction across 100+ sites\n→ **Next.js** for MSc placement project and personal work\n→ Custom hooks, performance optimisation, responsive design`, followUps:["What about his Node.js experience?","Tell me about The Hut Group","What is his full stack?"] },
  { id:"msc", tags:["msc","masters","university","leicester","education"], keywords:["msc","masters","university","leicester","education","degree","academic"], syns:[["msc","masters","postgraduate","degree"]], answer:`**MSc Advanced Computer Science** — University of Leicester *(2024–2025)*\n\nFocus areas: Machine learning · Deep learning · NLP · Advanced algorithms\n\n**Projects:**\n→ **SentiMap** — NLP research analysis tool (TF-IDF + Sentence Transformers + NetworkX)\n→ **Placements Manager** — Spring Boot + PostgreSQL + JWT + Next.js`, followUps:["Tell me about SentiMap","Tell me about the Placements project","What ML frameworks does he use?"] }
];

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

export const FALLBACK: KnowledgeEntry = {
  id: "fallback",
  tags: [],
  keywords: [],
  syns: [],
  answer: `I'm not quite sure about that one. I can tell you about:\n\n→ **Experience** — Nextech & The Hut Group\n→ **Projects** — SentiMap, Placements App, EHR, Look Fantastic\n→ **Skills** — React, TypeScript, Node.js, AWS, ML/NLP\n→ **Contact** — how to reach Pothan`,
  followUps: ["Tell me about his experience", "What is his tech stack?", "How can I contact Pothan?"]
};

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
