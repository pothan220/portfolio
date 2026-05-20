// src/types/index.ts

export type Role = 'user' | 'assistant'

export interface ChatMessage {
  id: string
  role: Role
  content: string
}

export type VisitorType = 'recruiter' | 'developer' | 'client' | 'other'
