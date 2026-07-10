"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { MessageSquare, X, Send } from "lucide-react";

type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! I am Solvire AI. How can I assist you today?" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  const sendMessage = async () => {
    const text = inputText.trim();
    if (!text || isTyping) return;

    const newMessages = [...messages, { role: "user" as const, content: text }];
    setMessages(newMessages);
    setInputText("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server returned ${response.status}: ${errorText.substring(0, 100)}`);
      }

      const data = await response.json();
      let aiResponse = "I'm sorry, I couldn't generate a response.";
      
      if (data.error) {
         throw new Error(data.error);
      }
      
      if (data.choices && data.choices.length > 0 && data.choices[0].message) {
        aiResponse = data.choices[0].message.content;
      } else if (data.reply) {
        aiResponse = data.reply;
      }

      setMessages((prev) => [...prev, { role: "assistant", content: aiResponse }]);
    } catch (error: any) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `Error: ${error.message || "Network error. Please try again later."}` }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999999] font-sans text-slate-900">
      {/* FAB */}
      <button
        onClick={toggleChat}
        className={`w-[60px] h-[60px] rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg cursor-pointer border-none transition-all duration-300 ${
          isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
        } hover:scale-105`}
      >
        <MessageSquare className="w-7 h-7" />
      </button>

      {/* Chat Window */}
      <div
        className={`absolute bottom-[80px] right-0 w-[380px] h-[600px] max-h-[calc(100vh-120px)] max-w-[calc(100vw-48px)] bg-white/75 backdrop-blur-md border border-white/50 rounded-3xl shadow-2xl flex flex-col overflow-hidden origin-bottom-right transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100 pointer-events-auto" : "scale-80 opacity-0 pointer-events-none"
        } sm:max-w-[calc(100vw-32px)] sm:right-[-8px]`}
      >
        {/* Header */}
        <div className="bg-slate-900/90 backdrop-blur-sm text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white/10 border border-white/20 rounded-full flex items-center justify-center font-bold">
              S
            </div>
            <div>
              <h3 className="m-0 text-base font-semibold">Solvire AI</h3>
              <p className="m-0 mt-0.5 text-xs opacity-70">Customer Support</p>
            </div>
          </div>
          <button
            onClick={toggleChat}
            className="bg-transparent border-none text-white cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-4 scrollbar-thin scrollbar-thumb-slate-900/20 scrollbar-track-transparent">
          {messages.filter(m => m.role !== 'system').map((msg, idx) => (
            <div
              key={idx}
              className={`flex flex-col max-w-[85%] ${
                msg.role === "user" ? "self-end items-end" : "self-start items-start"
              }`}
            >
              <div
                className={`px-4 py-3 text-sm leading-relaxed rounded-2xl shadow-sm ${
                  msg.role === "user"
                    ? "bg-slate-900 text-white rounded-br-sm"
                    : "bg-white/90 text-slate-900 border border-black/5 rounded-bl-sm"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex flex-col max-w-[85%] self-start items-start">
              <div className="px-4 py-3 rounded-2xl bg-white/90 border border-black/5 rounded-bl-sm shadow-sm">
                <div className="flex gap-1.5 py-1">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.32s]"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.16s]"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white/50 border-t border-white/30 flex gap-3">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message..."
            autoComplete="off"
            className="flex-1 bg-white/80 border border-slate-900/10 rounded-full px-4 py-3 text-sm outline-none transition-all focus:bg-white focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
          />
          <button
            onClick={sendMessage}
            disabled={isTyping}
            className="w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center cursor-pointer transition-all hover:bg-slate-800 disabled:bg-slate-400 disabled:cursor-not-allowed shrink-0"
          >
            <Send className="w-4 h-4 ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
