// src/components/chat/ChatInput.tsx
'use client'

import { useRef, KeyboardEvent } from 'react'

export function ChatInput({ onSend, disabled }: { onSend: (t: string) => void; disabled?: boolean }) {
  const ref = useRef<HTMLTextAreaElement>(null)

  const submit = () => {
    const val = ref.current?.value.trim()
    if (!val || disabled) return
    onSend(val)
    if (ref.current) { ref.current.value = ''; ref.current.style.height = 'auto' }
  }

  const onKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submit() }
  }

  return (
    <div className="px-6 pb-5 pt-3 border-t border-border bg-paper shrink-0">
      <div className="flex items-end gap-2 bg-white border border-border rounded-xl px-4 py-2.5 focus-within:border-ink transition-colors">
        <textarea ref={ref} rows={1} disabled={disabled} onKeyDown={onKey}
          onChange={e => { e.target.style.height = 'auto'; e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px' }}
          placeholder="Ask about experience, projects, skills…"
          className="flex-1 resize-none bg-transparent outline-none text-sm text-ink placeholder:text-ink-faint leading-relaxed min-h-[22px] max-h-[120px] font-sans disabled:opacity-40" />
        <button onClick={submit} disabled={disabled}
          className="w-8 h-8 rounded-lg bg-ink text-cream flex items-center justify-center shrink-0 hover:bg-accent transition-colors disabled:bg-border disabled:cursor-not-allowed">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </div>
      <p className="text-[0.65rem] text-ink-faint text-center mt-1.5 tracking-wide">Enter to send · Shift+Enter for new line</p>
    </div>
  )
}
