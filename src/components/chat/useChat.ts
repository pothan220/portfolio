// src/components/chat/useChat.ts
'use client'

import { useState, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { search, FALLBACK } from '@/lib/nlp-engine'
import type { ChatMessage, VisitorType } from '@/types'

// Visitor-type personalised greetings
const GREETINGS: Record<VisitorType, string> = {
  recruiter: `Great — I'll make sure to highlight the most relevant experience for you.

Pothan has **~3 years** of full-stack experience. Currently at **Nextech** (Ophthalmology EHR) and previously at **The Hut Group** (Look Fantastic — global e-commerce). He's open to new opportunities.

What would you like to know first?`,

  developer: `Fellow dev! Pothan lives in **TypeScript, React, Node.js and AWS**.

He's also done some interesting ML/AI work — built **SentiMap**, an NLP research analysis tool using TF-IDF + Sentence Transformers + NetworkX. No external APIs, just clean applied ML.

What do you want to dig into?`,

  client: `Good to hear from you! Pothan specialises in **full-stack web applications** — from healthcare platforms to high-traffic e-commerce serving millions of users.

He's comfortable taking a project from design to production on AWS.

What kind of project do you have in mind?`,

  other: `Happy to give you the full tour!

Pothan's a full-stack engineer with some interesting projects across **healthcare tech**, **global e-commerce**, and **AI/NLP research**.

What are you curious about?`,
}

function toVisitorType(text: string): VisitorType {
  if (text.includes('recruiter')) return 'recruiter'
  if (text.includes('developer')) return 'developer'
  if (text.includes('client'))    return 'client'
  return 'other'
}

export function useChat() {
  const [messages, setMessages]           = useState<ChatMessage[]>([])
  const [visitorType, setVisitorType]     = useState<VisitorType | undefined>()
  const [currentFollowUps, setFollowUps]  = useState<string[]>([])
  const [isThinking, setIsThinking]       = useState(false)

  const addMessage = useCallback((role: 'user' | 'assistant', content: string) => {
    setMessages(prev => [...prev, { id: uuidv4(), role, content }])
  }, [])

  // ── Visitor selects who they are ──
  const selectVisitorType = useCallback((text: string) => {
    const vType = toVisitorType(text)
    setVisitorType(vType)
    addMessage('user', text)

    // Small delay — feels more natural than instant
    setIsThinking(true)
    setTimeout(() => {
      addMessage('assistant', GREETINGS[vType])
      setFollowUps(
        vType === 'recruiter' ? ['What companies has he worked at?', 'Is he available to hire?', 'What is his tech stack?']
        : vType === 'developer' ? ['Tell me about SentiMap', 'What is his AWS setup?', 'What ML frameworks does he use?']
        : vType === 'client'    ? ['What kind of projects can he build?', 'Has he worked in healthcare?', 'How can I contact Pothan?']
        : ['What has Pothan built?', 'What is his tech stack?', 'Tell me about SentiMap']
      )
      setIsThinking(false)
    }, 400)
  }, [addMessage])

  // ── User sends a message → NLP engine processes it ──
  const sendMessage = useCallback((text: string) => {
    if (!text.trim() || isThinking) return

    addMessage('user', text)
    setFollowUps([])
    setIsThinking(true)

    // Simulate a brief "thinking" moment (feels natural, also shows the typing indicator)
    setTimeout(() => {
      const result = search(text)

      if (result) {
        addMessage('assistant', result.entry.answer)
        setFollowUps(result.entry.followUps)
      } else {
        addMessage('assistant', FALLBACK.answer)
        setFollowUps(FALLBACK.followUps)
      }

      setIsThinking(false)
    }, 350)
  }, [isThinking, addMessage])

  return {
    messages,
    isThinking,
    visitorType,
    currentFollowUps,
    selectVisitorType,
    sendMessage,
    clearFollowUps: () => setFollowUps([]),
  }
}
