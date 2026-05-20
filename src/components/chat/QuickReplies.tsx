// src/components/chat/QuickReplies.tsx
'use client'

export function QuickReplies({ options, onSelect }: { options: string[]; onSelect: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2 pl-9 mt-1">
      {options.map(opt => (
        <button key={opt} onClick={() => onSelect(opt)}
          className="px-3.5 py-1.5 rounded-full text-xs border border-border bg-paper text-ink-soft hover:border-accent hover:text-accent hover:bg-accent/5 transition-all">
          {opt}
        </button>
      ))}
    </div>
  )
}
