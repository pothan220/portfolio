// src/components/layout/LeftPanel.tsx
'use client'

const STATS = [
  { num: '3+',  label: 'Years experience'          },
  { num: '40%', label: 'API response improvement'  },
  { num: '100+',label: 'International sites'       },
  { num: '35%', label: 'Page load reduction'       },
]

const CORE_STACK = [
  'TypeScript','React','Node.js','AWS',
  'Next.js','Express','MongoDB','Docker',
  'CI/CD','PostgreSQL','Python','PyTorch','TensorFlow','Spring Boot',
]

const PROJECTS = [
  { icon:'🧠', name:'SentiMap',            desc:'AI research analysis — NLP, TF-IDF, Sentence Transformers, NetworkX.',   tags:['NLP','TF-IDF','Python','NetworkX'] },
  { icon:'🏥', name:'Ophthalmology EHR',   desc:'Clinical charting at Nextech — 40% API improvement, zero-downtime AWS.',  tags:['React','TypeScript','Node.js','AWS'] },
  { icon:'🛍️', name:'Look Fantastic',      desc:'Europe\'s #1 beauty retailer — 35% load reduction, 500+ concurrent users.',tags:['React','Node.js','MongoDB'] },
  { icon:'🎓', name:'Placements Manager',  desc:'MSc project — Spring Boot + PostgreSQL + JWT + Next.js.',                  tags:['Spring Boot','PostgreSQL','Next.js'] },
]

export function LeftPanel() {
  return (
    <aside className="w-[400px] shrink-0 bg-cream border-r border-border sticky top-0 h-screen overflow-y-auto flex flex-col p-8">

      {/* Avatar */}
      <div className="flex items-center gap-3 mb-7">
        <div className="w-11 h-11 rounded-full bg-ink flex items-center justify-center font-serif text-cream text-base shrink-0">
          PP
        </div>
        <div>
          <p className="font-semibold text-sm text-ink leading-tight">Pothan Prathap Puppala</p>
          <p className="text-[0.72rem] text-ink-faint mt-0.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block status-pulse" />
            Available for opportunities
          </p>
        </div>
      </div>

      {/* Headline */}
      <h1 className="font-serif text-[1.9rem] leading-[1.15] text-ink">Senior<br/>Software<br/>Engineer.</h1>
      <p className="text-[0.82rem] text-ink-soft leading-relaxed mt-2 mb-6">
        Full-stack engineer building scalable products across healthcare tech and global e-commerce. Leicester, UK.
      </p>

      <hr className="border-border" />

      {/* Stats */}
      <div className="grid grid-cols-2 gap-2 my-5">
        {STATS.map(s => (
          <div key={s.num} className="bg-paper border border-border rounded-lg p-3">
            <div className="font-serif text-[1.5rem] text-accent leading-none">{s.num}</div>
            <div className="text-[0.65rem] text-ink-faint mt-1 leading-snug">{s.label}</div>
          </div>
        ))}
      </div>

      <hr className="border-border" />

      {/* Projects */}
      <div className="my-5">
        <Label>Featured Projects</Label>
        <div className="flex flex-col gap-2 mt-2">
          {PROJECTS.map(p => (
            <div key={p.name} className="bg-paper border border-border rounded-lg p-3">
              <div className="flex items-center gap-1.5 mb-1">
                <span>{p.icon}</span>
                <span className="text-[0.82rem] font-semibold text-ink">{p.name}</span>
              </div>
              <p className="text-[0.72rem] text-ink-faint leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-1 mt-1.5">
                {p.tags.map(t => (
                  <span key={t} className="px-1.5 py-0.5 rounded text-[0.62rem] border border-border text-ink-faint bg-cream">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-border" />

      {/* Stack */}
      <div className="my-5">
        <Label>Core Stack</Label>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {CORE_STACK.map(s => (
            <span key={s} className={`px-2.5 py-1 rounded-full text-[0.68rem] border ${
              ['TypeScript','React','Node.js','AWS'].includes(s)
                ? 'bg-accent/10 border-accent/30 text-accent'
                : 'bg-paper border-border text-ink-soft'
            }`}>{s}</span>
          ))}
        </div>
      </div>

      <hr className="border-border" />

      {/* Education */}
      <div className="my-5">
        <Label>Education</Label>
        <p className="text-[0.82rem] font-medium text-ink mt-1">MSc Advanced Computer Science</p>
        <p className="text-[0.72rem] text-ink-faint">University of Leicester · 2024–2025</p>
      </div>

      <hr className="border-border" />

      {/* Contact */}
      <div className="my-5">
        <Label>Contact</Label>
        <div className="flex flex-col gap-1.5 mt-2">
          <ContactRow icon="✉" label="pothan220@gmail.com"  href="mailto:pothan220@gmail.com" />
          <ContactRow icon="✆" label="+44 7375 916050"       href="tel:+447375916050" />
          <ContactRow icon="📍" label="Leicester, UK" />
        </div>
      </div>

    </aside>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-[0.65rem] uppercase tracking-[0.14em] text-ink-faint">{children}</p>
}

function ContactRow({ icon, label, href }: { icon: string; label: string; href?: string }) {
  const content = (
    <span className="flex items-center gap-2 text-[0.8rem] text-ink-soft hover:text-accent transition-colors">
      <span className="w-6 h-6 rounded bg-paper border border-border flex items-center justify-center text-xs shrink-0">{icon}</span>
      {label}
    </span>
  )
  return href ? <a href={href}>{content}</a> : <span>{content}</span>
}
