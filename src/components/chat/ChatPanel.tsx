// src/components/chat/ChatPanel.tsx
'use client'

import { useEffect, useRef } from 'react'
import { useChat } from './useChat'
import { MessageBubble } from './MessageBubble'
import { TypingIndicator } from './TypingIndicator'
import { QuickReplies } from './QuickReplies'
import { ChatInput } from './ChatInput'

const VISITOR_OPTIONS = [
  "I'm a recruiter / hiring",
  "I'm a fellow developer",
  "I'm a potential client",
  "Just exploring",
]

export function ChatPanel() {
  const { messages, isThinking, visitorType, currentFollowUps, selectVisitorType, sendMessage, clearFollowUps } = useChat()
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isThinking])

  const handleFollowUp = (text: string) => {
    clearFollowUps()
    sendMessage(text)
  }

  const showFollowUps = currentFollowUps.length > 0 && !isThinking

  return (
    <main className="flex-1 flex flex-col h-screen sticky top-0 overflow-hidden">

      {/* Header */}
      <div className="px-6 py-4 border-b border-border bg-paper flex items-center gap-3 shrink-0">
        <div className="w-9 h-9 rounded-lg bg-ink flex items-center justify-center shrink-0">
          <span className="text-lg">🤖</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Pothan's Portfolio Assistant</p>
          <p className="text-xs text-ink-faint">Ask me anything about his work</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-4">

        {/* Opening — shown until visitor picks a type */}
        {!visitorType && messages.length === 0 && (
          <div className="flex flex-col gap-3">
            <div className="flex gap-2.5 msg-in">
              <div className="w-7 h-7 rounded-full bg-ink text-cream font-serif text-sm flex items-center justify-center shrink-0 mt-0.5">P</div>
              <div className="max-w-[520px] px-4 py-3 rounded-2xl rounded-bl-sm bg-[#f0ece4] text-ink text-sm leading-relaxed">
                <p>Hey there 👋 Welcome to Pothan's portfolio.</p>
                <p className="mt-2">I'm his personal assistant — I know everything about his work, skills, and experience. Before I start, I'd love to know a little about you.</p>
                <p className="mt-2 font-semibold">What brings you here today?</p>
              </div>
            </div>
            <QuickReplies options={VISITOR_OPTIONS} onSelect={selectVisitorType} />
          </div>
        )}

        {/* Conversation */}
        {messages.map(msg => <MessageBubble key={msg.id} message={msg} />)}

        {/* Thinking indicator */}
        {isThinking && <TypingIndicator />}

        {/* Contextual follow-up suggestions */}
        {showFollowUps && (
          <div className="flex flex-col gap-1.5">
            <p className="text-[0.68rem] text-ink-faint pl-9">You might want to ask:</p>
            <QuickReplies options={currentFollowUps} onSelect={handleFollowUp} />
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <ChatInput onSend={sendMessage} disabled={isThinking} />
    </main>
  )
}
