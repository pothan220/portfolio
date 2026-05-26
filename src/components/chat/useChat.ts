// src/components/chat/useChat.ts
'use client'

import { useState, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { nlpSearch, FALLBACK } from '@/lib/nlp-engine'
import type { ChatMessage, VisitorType } from '@/types'

const GREETINGS: Record<VisitorType, string> = {
  recruiter: `Great — highlighting the most relevant experience for you.\n\nPothan has **3 years** of full-stack experience, currently at **Nextech** (healthcare EHR) and previously **The Hut Group** (global e-commerce). He's open to new opportunities.\n\nWhat would you like to know first?`,

  developer: `Fellow dev! Pothan lives in **TypeScript, React, Node.js and AWS**.\n\nHe's also done some interesting ML/AI work — built **SentiMap**, an NLP research analysis tool using TF-IDF, Sentence Transformers and NetworkX. No external APIs, just clean applied ML.\n\nWhat do you want to dig into?`,

  client: `Good to hear from you! Pothan specialises in **full-stack web applications** — from healthcare platforms to high-traffic e-commerce serving millions of users.\n\nHe's comfortable taking a project from design to production on AWS.\n\nWhat kind of project do you have in mind?`,

  other: `Happy to give you the full tour!\n\nPothan's a full-stack engineer with projects across **healthcare tech**, **global e-commerce**, and **AI/NLP research**.\n\nWhat are you curious about?`,
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

  const selectVisitorType = useCallback((text: string) => {
    const vType = toVisitorType(text)
    setVisitorType(vType)
    addMessage('user', text)

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

  const sendMessage = useCallback((text: string) => {
    if (!text.trim() || isThinking) return

    addMessage('user', text)
    setFollowUps([])
    setIsThinking(true)
    
    setTimeout(() => {
      const result = nlpSearch(text)

      if (result) {
        addMessage('assistant', result.answer)
        setFollowUps(result.followUps)
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