"use client";

import { useEffect, useRef, useState } from "react";
import { nlpSearch } from "../lib/nlp-engine";

type Message = { role: "bot" | "user"; text: string };

const VISITOR_OPTIONS = ["I'm a recruiter / hiring", "I'm a fellow developer", "I'm a potential client", "Just exploring"];

const GREETINGS = {
  recruiter: `Great — highlighting the most relevant experience for you.\n\nPothan has **3 years** full-stack experience, currently at **Nextech** (healthcare EHR) and previously **The Hut Group** (global e-commerce). He's open to new opportunities.\n\nWhat would you like to know first?`,
  developer: `Fellow dev! Pothan works in **TypeScript, React, Node.js and AWS**.\n\nHe's also built **SentiMap** — an NLP research tool using TF-IDF + Sentence Transformers + NetworkX. No external AI APIs, all from scratch.\n\nWhat do you want to dig into?`,
  client: `Pothan specialises in **full-stack web apps** — from healthcare platforms to high-traffic e-commerce serving millions.\n\nComfortable from design all the way to production on AWS.\n\nWhat kind of project do you have in mind?`,
  other: `Happy to give you the full tour!\n\nPothan's a full-stack engineer with interesting projects across **healthcare tech**, **global e-commerce**, and **AI/NLP research**.\n\nWhat are you curious about?`,
};

function renderMarkdown(text: string) {
  const escaped = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return escaped
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/^→\s(.+)$/gm, '<div style="padding-left:0.8rem;position:relative;margin:0.2rem 0"><span style="position:absolute;left:0;color:var(--accent)">→</span>$1</div>')
    .replace(/\n\n/g, "<br><br>")
    .replace(/\n/g, "<br>");
}

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [thinking, setThinking] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [quickReplies, setQuickReplies] = useState<string[]>([]);
  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight });
  }, [messages, thinking]);

  useEffect(() => {
    if (open && !started) {
      setStarted(true);
      window.setTimeout(() => {
        setMessages([{ role: "bot", text: "Hey there 👋 Welcome to Pothan's portfolio.\n\nI'm his personal assistant — I know about his work and skills. Before I start, what brings you here today?" }]);
        setQuickReplies(VISITOR_OPTIONS);
      }, 250);
    }
    if (open) window.setTimeout(() => inputRef.current?.focus(), 80);
  }, [open, started]);

  function replyToVisitor(text: string) {
    setQuickReplies([]);
    setMessages((prev) => [...prev, { role: "user", text }]);
    setThinking(true);
    const type = text.includes("recruiter") ? "recruiter" : text.includes("developer") ? "developer" : text.includes("client") ? "client" : "other";
    window.setTimeout(() => {
      setThinking(false);
      setMessages((prev) => [...prev, { role: "bot", text: GREETINGS[type] }]);
      setQuickReplies(type === "recruiter" ? ["What companies has he worked at?", "Is he available to hire?", "What is his tech stack?"] : type === "developer" ? ["Tell me about SentiMap", "What is his AWS setup?", "What ML frameworks does he use?"] : type === "client" ? ["What can he build?", "Has he worked in healthcare?", "How can I contact him?"] : ["What has he built?", "What is his stack?", "Tell me about SentiMap"]);
    }, 380);
  }

  function processMessage(text: string) {
    const clean = text.trim();
    if (!clean || thinking) return;
    setQuickReplies([]);
    setMessages((prev) => [...prev, { role: "user", text: clean }]);
    setInput("");
    setThinking(true);
    window.setTimeout(() => {
      const entry = nlpSearch(clean);
      setMessages((prev) => [...prev, { role: "bot", text: entry.answer }]);
      setQuickReplies(entry.followUps);
      setThinking(false);
    }, 380);
  }

  function handleQuickReply(text: string) {
    if (VISITOR_OPTIONS.includes(text) && messages.length <= 1) replyToVisitor(text);
    else processMessage(text);
  }

  return (
    <>
      <button id="chat-fab" onClick={() => setOpen((v) => !v)} title="Ask about Pothan" type="button">
        <span>{open ? "✕" : "💬"}</span>
        <div className="fab-badge" />
      </button>
      <div id="chat-window" className={open ? "open" : ""}>
        <div className="chat-win-header">
          <div className="chat-win-avatar">PP</div>
          <div>
            <div className="chat-win-title">Pothan&apos;s Assistant</div>
            <div className="chat-win-sub">Ask me anything about his work</div>
          </div>
          <button className="chat-win-close" onClick={() => setOpen(false)} type="button">✕</button>
        </div>
        <div className="chat-win-msgs" ref={messagesRef}>
          {messages.map((message, index) => (
            <div className={`chat-msg ${message.role === "user" ? "user" : ""}`} key={`${message.role}-${index}`}>
              {message.role === "bot" && <div className="chat-msg-av bot">PP</div>}
              <div className={`chat-bubble ${message.role === "bot" ? "bot" : "user"}`} dangerouslySetInnerHTML={{ __html: renderMarkdown(message.text) }} />
              {message.role === "user" && <div className="chat-msg-av usr">👤</div>}
            </div>
          ))}
          {thinking && (
            <div className="chat-msg">
              <div className="chat-msg-av bot">PP</div>
              <div className="chat-typing"><span /><span /><span /></div>
            </div>
          )}
        </div>
        <div className="chat-qr">
          {quickReplies.map((reply) => <button className="chat-qr-btn" key={reply} onClick={() => handleQuickReply(reply)} type="button">{reply}</button>)}
        </div>
        <div className="chat-win-input">
          <input ref={inputRef} value={input} placeholder="Ask about skills, projects…" onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") processMessage(input); }} />
          <button className="chat-send" disabled={thinking} onClick={() => processMessage(input)} type="button">➤</button>
        </div>
      </div>
    </>
  );
}
