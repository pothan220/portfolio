// src/components/chat/MessageBubble.tsx
'use client'

import type { ChatMessage } from '@/types'

function parse(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/^[-•]\s(.+)$/gm, '<li>$1</li>')
    .replace(/(<li>[\s\S]*?<\/li>\n?)+/g, m => `<ul class="my-1 pl-4 space-y-0.5 list-disc">${m}</ul>`)
    .replace(/\n\n/g, '</p><p class="mt-2">')
    .replace(/\n/g, '<br/>')
}

export function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === 'user'
  return (
    <div className={`flex gap-2.5 msg-in ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`w-7 h-7 rounded-full shrink-0 mt-0.5 flex items-center justify-center text-xs ${
        isUser ? 'bg-border text-ink-soft' : 'bg-ink text-cream font-serif text-sm'
      }`}>
        {isUser ? '👤' : 'P'}
      </div>
      <div className={`max-w-[520px] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
        isUser
          ? 'bg-ink text-cream rounded-br-sm'
          : 'bg-[#f0ece4] text-ink rounded-bl-sm'
      }`}>
        <div dangerouslySetInnerHTML={{ __html: `<p>${parse(message.content)}</p>` }}
          className="[&_strong]:font-semibold [&_ul]:my-1" />
      </div>
    </div>
  )
}
