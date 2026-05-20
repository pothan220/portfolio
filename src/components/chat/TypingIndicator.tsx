// src/components/chat/TypingIndicator.tsx
'use client'

export function TypingIndicator() {
  return (
    <div className="flex gap-2.5 msg-in">
      <div className="w-7 h-7 rounded-full bg-ink text-cream font-serif text-sm flex items-center justify-center shrink-0">P</div>
      <div className="bg-[#f0ece4] px-4 py-3.5 rounded-2xl rounded-bl-sm flex gap-1.5 items-center">
        {[0, 0.18, 0.36].map((d, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-ink-faint block"
            style={{ animation: `typingBounce 1.1s ${d}s ease-in-out infinite` }} />
        ))}
      </div>
    </div>
  )
}
