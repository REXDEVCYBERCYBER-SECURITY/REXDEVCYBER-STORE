
import React, { useState, useRef, useEffect } from 'react';
import { analyzeSecurityPrompt } from '../geminiService';

const AIAnalyst: React.FC = () => {
  const [input, setInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isAnalyzing) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsAnalyzing(true);

    const analysis = await analyzeSecurityPrompt(userMessage);
    setMessages(prev => [...prev, { role: 'assistant', content: analysis }]);
    setIsAnalyzing(false);
  };

  return (
    <div className="h-full flex flex-col space-y-6 animate-in fade-in duration-500">
      <header>
        <h2 className="text-3xl font-extrabold text-white">AI Security Analyst</h2>
        <p className="text-slate-400">Upload code snippets or describe infrastructure for rapid vulnerability assessment.</p>
      </header>

      <div className="flex-1 glass rounded-[32px] flex flex-col overflow-hidden border-cyan-500/20">
        <div ref={scrollRef} className="flex-1 p-6 space-y-6 overflow-y-auto cyber-grid">
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
              <i className="fa-solid fa-robot text-6xl text-cyan-500"></i>
              <p className="max-w-xs">Enter a security query, system description, or code block to begin automated analysis.</p>
            </div>
          )}
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-6 rounded-[24px] ${
                msg.role === 'user' 
                ? 'bg-cyan-500 text-white rounded-tr-none' 
                : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none prose prose-invert prose-sm'
              }`}>
                {msg.role === 'assistant' ? (
                  <div dangerouslySetInnerHTML={{ __html: msg.content.replace(/\n/g, '<br/>') }} />
                ) : (
                  msg.content
                )}
              </div>
            </div>
          ))}
          {isAnalyzing && (
            <div className="flex justify-start">
              <div className="bg-slate-800 p-6 rounded-[24px] rounded-tl-none border border-slate-700">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleAnalyze} className="p-6 bg-slate-900 border-t border-slate-800">
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste logs, code, or describe a system vulnerability..."
              className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 pr-24 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white resize-none h-24 transition-all"
            />
            <button
              type="submit"
              disabled={isAnalyzing || !input.trim()}
              className="absolute right-4 bottom-4 px-6 py-2 bg-cyan-500 text-white font-bold rounded-xl hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Analyze
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AIAnalyst;
