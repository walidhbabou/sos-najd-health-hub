"use client";
import { useState } from "react";

export default function ChatAssistant() {
  const [messages, setMessages] = useState<{ from: string; text: string }[]>([]);
  const [text, setText] = useState("");

  async function send() {
    if (!text.trim()) return;
    const userMsg = { from: "user", text };
    setMessages((m) => [...m, userMsg]);
    setText("");
    // basic echo stub — replace with OpenAI API call on server
    setTimeout(() => {
      setMessages((m) => [...m, { from: "assistant", text: `Assistant: ${userMsg.text}` }]);
    }, 800);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="h-64 overflow-auto rounded border p-3 bg-white">
        {messages.length === 0 && <div className="text-sm text-muted">Ask the assistant about symptoms, appointments, or care.</div>}
        {messages.map((m, i) => (
          <div key={i} className={`mb-2 ${m.from === 'user' ? 'text-right' : ''}`}>
            <div className="inline-block rounded px-3 py-1" style={{background: m.from === 'user' ? '#e6fffa' : '#eef2ff'}}>{m.text}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Ask a health question..." className="flex-1 rounded border px-3 py-2" />
        <button onClick={send} className="rounded bg-accent px-4 py-2 text-white">Send</button>
      </div>
    </div>
  );
}
