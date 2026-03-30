/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { InlineWidget } from 'react-calendly';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  MessageSquare, 
  Zap, 
  Shield, 
  Users, 
  Database, 
  CheckCircle2, 
  Calendar,
  ChevronRight,
  BrainCircuit,
  Sparkles,
  Search
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <Zap className="text-white w-5 h-5 fill-current" />
          </div>
          <span className="text-xl font-bold tracking-tight">Relay</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#how-it-works" className="hover:text-black transition-colors">How it works</a>
          <a href="#demo" className="hover:text-black transition-colors">Sandbox</a>
          <a href="#pricing" className="hover:text-black transition-colors">Pricing</a>
        </div>
        <div>
          <a 
            href="#book-demo" 
            className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </div>
  </nav>
);

const ChatDemo = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [showOutput, setShowOutput] = useState(false);

  const startDemo = () => {
    setIsProcessing(true);
    setMessages([]);
    setShowOutput(false);
    
    setTimeout(() => {
      setIsProcessing(false);
      setShowOutput(true);
      setMessages([
        { role: 'user', content: 'What are the critical risks for the handover of Project Phoenix?' },
        { 
          role: 'assistant', 
          content: 'Based on the scattered memory from PM Alex:\n\n1. **Technical Risk**: Project is currently delayed. Slack logs indicate the **API provider is unstable**, which is the root cause of the timeline slip.\n2. **Stakeholder Risk**: Communication with **Client A** is flagged as "tricky." You need to maintain a specific pace to avoid friction.\n3. **Strategic Risk**: The **Q2 Roadmap** was recently downsized. Email records confirm this was due to **resource shortages**, not performance issues.\n\nRecommendation: Prioritize stabilizing the API vendor relationship before the next Client A sync.',
          isTyping: false 
        }
      ]);
    }, 2000);
  };

  useEffect(() => {
    startDemo();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Left: Input Sources */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2 px-2">Raw Input Sources</div>
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3 relative overflow-hidden group">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-3 h-3 text-blue-400" />
              <span className="text-[10px] font-bold text-white/60 uppercase">Slack: #project-phoenix</span>
            </div>
            <p className="text-xs text-white/40 italic">"Guys, the API provider is still acting up. Project Phoenix is definitely going to delay at this rate..."</p>
            <p className="text-xs text-white/40 italic">"Also, Client A is being tricky again. Watch the communication pace, don't push too hard yet."</p>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3 relative overflow-hidden group">
            <div className="flex items-center gap-2 mb-2">
              <Database className="w-3 h-3 text-purple-400" />
              <span className="text-[10px] font-bold text-white/60 uppercase">Email: Roadmap Update</span>
            </div>
            <p className="text-xs text-white/40 italic">"Subject: Q2 Adjustments. We had to trim the roadmap. Main reason is the resource shortage in the backend team..."</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3 relative overflow-hidden group">
            <div className="flex items-center gap-2 mb-2">
              <BrainCircuit className="w-3 h-3 text-green-400" />
              <span className="text-[10px] font-bold text-white/60 uppercase">Doc: Handover Note</span>
            </div>
            <p className="text-xs text-white/40 italic">"Project Phoenix: Ongoing. Client A relationship: Sensitive. Q2 Roadmap: Adjusted."</p>
          </div>
        </div>

        {/* Middle: Processing Line */}
        <div className="lg:col-span-1 flex flex-col items-center justify-center py-4 lg:py-0">
          <div className="h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block" />
          <div className={cn(
            "flex flex-col items-center gap-4 transition-all duration-500",
            isProcessing ? "opacity-100 scale-110" : "opacity-40 scale-100"
          )}>
            <div className="w-8 h-8 rounded-full border border-blue-500/50 flex items-center justify-center relative">
              <div className={cn(
                "absolute inset-0 rounded-full border-t-2 border-blue-500",
                isProcessing && "animate-spin"
              )} />
              <Zap className="w-4 h-4 text-blue-500" />
            </div>
            <div className="writing-vertical text-[10px] font-mono text-blue-400 uppercase tracking-widest whitespace-nowrap lg:rotate-180 lg:[writing-mode:vertical-rl]">
              {isProcessing ? "Structuring Memory..." : "Memory Synced"}
            </div>
          </div>
          <div className="h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block" />
        </div>

        {/* Right: Output Chat */}
        <div className="lg:col-span-7">
          <div className="bg-[#151619] rounded-2xl border border-white/10 shadow-2xl overflow-hidden h-full flex flex-col">
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] font-mono text-white/60 uppercase tracking-widest">Relay AI Assistant</span>
              </div>
              <button 
                onClick={startDemo}
                className="text-[10px] font-mono text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-widest flex items-center gap-1"
              >
                <Zap className="w-3 h-3" /> Re-run Demo
              </button>
            </div>
            
            <div className="p-6 flex-1 space-y-6 overflow-y-auto min-h-[400px]">
              <AnimatePresence>
                {showOutput && messages.map((msg, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "flex gap-4",
                      msg.role === 'user' ? "justify-end" : "justify-start"
                    )}
                  >
                    <div className={cn(
                      "max-w-[90%] p-4 rounded-2xl text-sm leading-relaxed",
                      msg.role === 'user' 
                        ? "bg-white/10 text-white rounded-tr-none" 
                        : "bg-blue-600 text-white rounded-tl-none shadow-lg shadow-blue-900/20"
                    )}>
                      <div className="whitespace-pre-wrap">{msg.content}</div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {!showOutput && isProcessing && (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="flex gap-2 justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                    <p className="text-xs font-mono text-white/40 uppercase tracking-widest">Synthesizing Alex's Handover...</p>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-white/5 border-t border-white/5">
              <div className="relative">
                <input 
                  disabled
                  placeholder="Ask about Alex's projects..."
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 text-sm text-white/30 focus:outline-none"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600/50 p-1.5 rounded-lg">
                  <Search className="w-4 h-4 text-white/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BookingFlow = () => {
  const [step, setStep] = useState<'form' | 'calendly'>('form');
  const [formData, setFormData] = useState({
    role: '',
    scenario: '',
    painPoint: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('calendly');
  };

  return (
    <div id="book-demo" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to setup your Org Memory?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Book a 30-minute demo to see how Relay can transform your team's knowledge management.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden min-h-[600px]">
          <AnimatePresence mode="wait">
            {step === 'form' ? (
              <motion.div 
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="p-8 md:p-12"
              >
                <div className="max-w-md mx-auto">
                  <div className="mb-8">
                    <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
                      <Sparkles className="w-4 h-4" />
                      <span>Step 1 of 2</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Tell us a bit about your team</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Role</label>
                      <select 
                        required
                        value={formData.role}
                        onChange={e => setFormData({...formData, role: e.target.value})}
                        className="w-full border-gray-200 rounded-xl focus:ring-black focus:border-black transition-all"
                      >
                        <option value="">Select a role...</option>
                        <option value="founder">Founder / CEO</option>
                        <option value="product">Product Manager</option>
                        <option value="ops">Operations / HR</option>
                        <option value="eng">Engineering Lead</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Are you currently facing a handover or offboarding scenario?</label>
                      <div className="grid grid-cols-2 gap-4">
                        <button 
                          type="button"
                          onClick={() => setFormData({...formData, scenario: 'yes'})}
                          className={cn(
                            "py-3 px-4 rounded-xl border text-sm font-medium transition-all",
                            formData.scenario === 'yes' ? "bg-black text-white border-black" : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                          )}
                        >
                          Yes, right now
                        </button>
                        <button 
                          type="button"
                          onClick={() => setFormData({...formData, scenario: 'no'})}
                          className={cn(
                            "py-3 px-4 rounded-xl border text-sm font-medium transition-all",
                            formData.scenario === 'no' ? "bg-black text-white border-black" : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                          )}
                        >
                          Not currently
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">What's your biggest pain point with team knowledge?</label>
                      <textarea 
                        required
                        value={formData.painPoint}
                        onChange={e => setFormData({...formData, painPoint: e.target.value})}
                        placeholder="e.g. Information is scattered across Slack and Docs, hard to find context for old decisions..."
                        className="w-full border-gray-200 rounded-xl focus:ring-black focus:border-black transition-all h-24 resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
                    >
                      Continue to Schedule
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="calendly"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="h-full"
              >
                <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                  <button 
                    onClick={() => setStep('form')}
                    className="text-sm text-gray-500 hover:text-black flex items-center gap-1"
                  >
                    <ChevronRight className="w-4 h-4 rotate-180" />
                    Back to info
                  </button>
                  <div className="text-sm font-medium text-gray-900">Step 2: Pick a time</div>
                  <div className="w-16" />
                </div>
                <div className="h-[600px]">
                  <InlineWidget 
                    url="https://calendly.com/isabelle-tanka/30min"
                    styles={{ height: '100%' }}
                    prefill={{
                      customAnswers: {
                        a1: formData.role,
                        a2: formData.scenario,
                        a3: formData.painPoint
                      }
                    }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
              <Sparkles className="w-3 h-3" />
              <span>Now in Early Access</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Capture your <span className="text-blue-600">Organization's Memory</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Relay automatically structures your team's scattered conversations and documents into a queryable brain. No more lost context when people leave.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#book-demo" 
                className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-2"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#demo" 
                className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                Try Sandbox
              </a>
            </div>
          </motion.div>

          {/* Social Proof / Trusted By */}
          <div className="mt-20 pt-10 border-t border-gray-100">
            <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">Helping teams preserve context at</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
              <div className="text-2xl font-bold tracking-tighter">TECHCORP</div>
              <div className="text-2xl font-bold tracking-tighter">FLOWSTATE</div>
              <div className="text-2xl font-bold tracking-tighter">NEXUS</div>
              <div className="text-2xl font-bold tracking-tighter">VELOCITY</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sandbox Demo Section */}
      <section id="demo" className="py-24 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-500/20">
                <BrainCircuit className="w-3 h-3" />
                <span>Sandbox Demo</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Value perception, <span className="text-blue-500">pre-integration.</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                You don't need to connect your Slack or Drive to see the magic. Our sandbox shows how Relay structures "messy" organizational data into clear, actionable answers.
              </p>
              <ul className="space-y-4">
                {[
                  "Automatic decision logging",
                  "Stakeholder context mapping",
                  "Cross-platform source verification",
                  "Instant offboarding handovers"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full" />
              <ChatDemo />
            </div>
          </div>
        </div>
      </section>

      {/* How it works / What happens next */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What happens after you book?</h2>
            <p className="mt-4 text-lg text-gray-600">We make the onboarding process as frictionless as possible.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "1. Discovery Call",
                desc: "A 15-min chat to understand your team's specific knowledge gaps and handover challenges."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "2. Custom Setup",
                desc: "We help you structure your first 'Org Memory' node based on a real past project or decision."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "3. Team Onboarding",
                desc: "Invite your team to a structured environment where knowledge is preserved, not buried."
              }
            ].map((step, i) => (
              <div key={i} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-all group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Flow */}
      <BookingFlow />

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
              <Zap className="text-white w-4 h-4 fill-current" />
            </div>
            <span className="font-bold tracking-tight">Relay</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-black">Privacy</a>
            <a href="#" className="hover:text-black">Terms</a>
            <a href="#" className="hover:text-black">Contact</a>
          </div>
          <p className="text-sm text-gray-400">© 2026 Relay AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
