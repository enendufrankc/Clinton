
import React, { useState } from 'react';
import { 
  Linkedin, 
  Code, 
  Award,
  MessageSquare,
  X,
  Send,
  ArrowUpRight,
  Globe,
  Zap,
  Target,
  FileText
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  EXPERIENCES, 
  EDUCATIONS, 
  PUBLICATIONS, 
  SKILLS 
} from './constants';
import { askAboutResume } from './geminiService';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm sm:text-base">C</div>
        <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">Clinton<span className="text-blue-600">.</span></span>
      </div>
      <div className="hidden md:flex gap-6 lg:gap-10 text-sm font-semibold text-slate-500">
        <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
        <a href="#experience" className="hover:text-blue-600 transition-colors">Work</a>
        <a href="#skills" className="hover:text-blue-600 transition-colors">Expertise</a>
        <a href="#education" className="hover:text-blue-600 transition-colors">Background</a>
      </div>
      <a href="#contact" className="bg-blue-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold hover:bg-blue-700 transition-all">
        Connect
      </a>
    </div>
  </nav>
);

const StatCard: React.FC<{ value: string, label: string }> = ({ value, label }) => (
  <div className="stat-card px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-center md:text-left">
    <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-1 sm:mb-2">{value}</div>
    <div className="text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.2em] font-bold text-slate-400">{label}</div>
  </div>
);

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!query.trim()) return;
    const userMsg = query;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setQuery('');
    setLoading(true);
    const response = await askAboutResume(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: response }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="w-[350px] md:w-[400px] h-[550px] bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
          <div className="p-6 bg-blue-600 flex justify-between items-center text-white">
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-80">Assistant</p>
              <h4 className="font-bold text-lg">Chat with Chibueze</h4>
            </div>
            <button onClick={() => setIsOpen(false)} className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"><X size={18} /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
            {messages.length === 0 && (
              <div className="text-center mt-10">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  <MessageSquare size={32} />
                </div>
                <p className="text-slate-500 text-sm px-4">Ask me about Chibueze's tax expertise, publications, or career at Barclays.</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-slate-700 shadow-sm border border-slate-100'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && <div className="text-slate-400 text-xs animate-pulse font-bold">Thinking...</div>}
          </div>
          <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={query} 
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your question..."
              className="flex-1 bg-slate-100 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20"
            />
            <button onClick={handleSend} className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition-colors"><Send size={18} /></button>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-all duration-300 ring-8 ring-blue-600/10">
          <MessageSquare size={28} />
        </button>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <AIChat />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 sm:gap-16 md:gap-24 relative">
          
          {/* Vertical Decorator */}
          <div className="absolute left-[-100px] top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6">
            <div className="w-1 h-32 bg-slate-100 rounded-full overflow-hidden">
                <div className="w-full h-1/2 bg-blue-600"></div>
            </div>
            <span className="vertical-text text-[10px] uppercase tracking-[0.6em] font-black text-slate-300">Professional Odyssey</span>
            <div className="w-2 h-2 rounded-full bg-slate-200"></div>
          </div>

          {/* Blob Portrait Area */}
          <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px]">
              {/* Background Blob Layer 1 */}
              <div className="absolute inset-0 bg-blue-600/10 blob-mask rotate-12 scale-110 animate-pulse"></div>
              {/* Background Blob Layer 2 */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 blob-mask opacity-90 shadow-2xl"></div>
              {/* Image Layer */}
              <div className="absolute inset-0 blob-mask overflow-hidden border-[8px] sm:border-[12px] border-white">
                <img 
                  src="/images/profile.jpg" 
                  className="w-full h-full object-cover object-top" 
                  alt="Chibueze Clinton"
                />
              </div>
            </div>
          </div>

          {/* Text Area */}
          <div className="w-full md:w-1/2 space-y-6 sm:space-y-8 order-1 md:order-2 text-center md:text-left">
            <div className="space-y-2">
              <p className="text-blue-600 text-xs sm:text-sm font-extrabold uppercase tracking-[0.3em] sm:tracking-[0.4em]">About Me</p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
                Hey, I'm <br />
                Chibueze Clinton 👋
              </h1>
            </div>
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              {PERSONAL_INFO.summary}
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#about" className="btn-primary px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-sm shadow-lg">
                Know More
              </a>
              <div className="flex gap-2">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 sm:p-4 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors text-slate-600">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-y border-slate-100 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 py-4">
          <StatCard value="4+" label="Years Experience" />
          <StatCard value="100%" label="Accuracy Rate" />
          <StatCard value="6" label="Journals Published" />
          <StatCard value="8+" label="Tax Jurisdictions" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600" 
                    alt="Financial analysis and charts"
                    className="w-full h-40 sm:h-52 lg:h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600" 
                    alt="Professional signing documents"
                    className="w-full h-32 sm:h-40 lg:h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=600" 
                    alt="Business meeting and collaboration"
                    className="w-full h-32 sm:h-40 lg:h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" 
                    alt="Data analytics dashboard"
                    className="w-full h-40 sm:h-52 lg:h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-blue-600 text-xs sm:text-sm font-extrabold uppercase tracking-widest">Who I Am</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">Driving Excellence in<br />Tax Operations</h2>
              </div>
              <div className="space-y-4 sm:space-y-6 text-slate-500 text-base sm:text-lg leading-relaxed">
                <p>
                  I'm a results-driven EMEA Tax Operations Analyst at Barclays with a passion for transforming complex tax processes into streamlined, accurate systems. My journey spans from academic excellence to corporate impact.
                </p>
                <p>
                  With expertise across multiple tax jurisdictions including France, Japan, Italy, and Switzerland, I bring a global perspective to every challenge. My work has been recognized by leadership for delivering 100% accuracy under tight deadlines.
                </p>
                <p>
                  Beyond operations, I'm a published researcher with six peer-reviewed articles exploring the intersection of business, ethics, and strategy. I believe in continuous learning and bringing academic rigor to practical business solutions.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                <div className="flex items-center gap-3 bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center text-blue-600">
                    <Target size={20} className="sm:hidden" />
                    <Target size={24} className="hidden sm:block" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-extrabold text-slate-900">100%</p>
                    <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider">Accuracy</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center text-blue-600">
                    <Globe size={20} className="sm:hidden" />
                    <Globe size={24} className="hidden sm:block" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-extrabold text-slate-900">8+</p>
                    <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider">Jurisdictions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 lg:mb-20 gap-4 sm:gap-8">
            <div className="space-y-3 sm:space-y-4">
              <div className="w-12 sm:w-16 h-1.5 sm:h-2 bg-blue-600 rounded-full"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">Career Trajectory</h2>
              <p className="text-slate-500 text-base sm:text-lg">Defining excellence in EMEA tax and client operations.</p>
            </div>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:gap-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="group bg-white p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-12">
                <div className="md:w-1/4">
                    <div className="p-4 sm:p-6 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 h-full flex flex-col justify-center">
                        <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest opacity-60 mb-1 sm:mb-2">{exp.period}</p>
                        <p className="text-xs sm:text-sm font-bold">{exp.location}</p>
                    </div>
                </div>
                <div className="md:w-3/4">
                  <div className="flex justify-between items-start mb-4 sm:mb-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-1 sm:mb-2">{exp.role}</h3>
                      <p className="text-blue-600 font-bold tracking-tight text-sm sm:text-base">{exp.company}</p>
                    </div>
                    <div className="hidden sm:flex w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-100 items-center justify-center text-slate-300 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-all">
                        <ArrowUpRight size={20} />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-1 gap-3 sm:gap-4">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex gap-3 sm:gap-4 items-start text-slate-500 text-xs sm:text-sm leading-relaxed">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></div>
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="skills" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-slate-900 text-white rounded-t-[40px] sm:rounded-t-[60px] md:rounded-t-[100px] -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-10 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">Strategic Mastery</h2>
            <div className="hidden sm:block h-px bg-white/20 flex-1"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {SKILLS.map((cat, idx) => (
              <div key={idx} className="p-6 sm:p-8 lg:p-10 bg-white/5 border border-white/10 rounded-2xl sm:rounded-[32px] lg:rounded-[40px] hover:bg-white/10 transition-colors group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 lg:mb-8 group-hover:scale-110 transition-transform">
                  {idx === 0 ? <Target size={20} className="sm:hidden" /> : idx === 1 ? <Code size={20} className="sm:hidden" /> : <Zap size={20} className="sm:hidden" />}
                  {idx === 0 ? <Target size={24} className="hidden sm:block" /> : idx === 1 ? <Code size={24} className="hidden sm:block" /> : <Zap size={24} className="hidden sm:block" />}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 lg:mb-8">{cat.category}</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {cat.items.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-white/60 hover:text-white hover:bg-blue-600 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic & Publications */}
      <section id="education" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
            {/* Education */}
            <div className="space-y-10 sm:space-y-12 lg:space-y-16">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-blue-600 text-xs sm:text-sm font-extrabold uppercase tracking-widest">Academic Record</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">Education</h2>
              </div>
              <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                {EDUCATIONS.map((edu, idx) => (
                  <div key={idx} className="relative pl-8 sm:pl-12 border-l-2 border-slate-100">
                    <div className="absolute -left-[9px] sm:-left-[11px] top-0 w-4 h-4 sm:w-5 sm:h-5 bg-white border-[3px] sm:border-4 border-blue-600 rounded-full"></div>
                    <p className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mb-1 sm:mb-2">{edu.period}</p>
                    <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1 sm:mb-2">{edu.degree}</h4>
                    <p className="text-blue-600 font-bold mb-4 sm:mb-6 text-sm sm:text-base">{edu.institution}</p>
                    <div className="space-y-2 sm:space-y-3">
                      {edu.achievements.map((ach, aIdx) => (
                        <p key={aIdx} className="text-xs sm:text-sm text-slate-500 flex gap-2">
                          <Award size={14} className="text-slate-300 shrink-0 sm:hidden" />
                          <Award size={16} className="text-slate-300 shrink-0 hidden sm:block" /> {ach}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Publications */}
            <div className="space-y-10 sm:space-y-12 lg:space-y-16">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-blue-600 text-xs sm:text-sm font-extrabold uppercase tracking-widest">Intellectual Impact</p>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">Publications</h2>
                </div>
                <div className="grid gap-4 sm:gap-6 lg:gap-8">
                  {PUBLICATIONS.map((pub, idx) => (
                    <div key={idx} className="p-5 sm:p-6 lg:p-8 bg-slate-50 rounded-2xl sm:rounded-3xl border border-slate-100 hover:border-blue-200 hover:bg-white transition-all group">
                      <div className="flex gap-4 sm:gap-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg sm:rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors shrink-0">
                          <FileText size={16} className="sm:hidden" />
                          <FileText size={20} className="hidden sm:block" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[9px] sm:text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1 sm:mb-2">{pub.year}</p>
                          <h4 className="text-sm sm:text-base lg:text-lg font-extrabold text-slate-900 leading-tight mb-2 sm:mb-4 group-hover:text-blue-600 transition-colors">"{pub.title}"</h4>
                          <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider line-clamp-2">{pub.journal}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Connect */}
      <footer id="contact" className="bg-slate-950 text-white py-16 sm:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-white/5 rounded-full border border-white/10 mb-6 sm:mb-10">
            <p className="text-blue-400 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] sm:tracking-[0.4em]">Next Step</p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold mb-8 sm:mb-12 tracking-tighter">
            Let's build the <br /> <span className="text-blue-600 italic underline decoration-white/10 underline-offset-4 sm:underline-offset-8">Next Chapter</span>.
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 mb-16 sm:mb-20 lg:mb-24">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold hover:text-blue-400 transition-colors border-b-2 border-white/10 pb-2 break-all sm:break-normal">
              {PERSONAL_INFO.email}
            </a>
            <div className="hidden md:block w-2 h-2 rounded-full bg-white/20"></div>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold hover:text-blue-400 transition-colors border-b-2 border-white/10 pb-2">
              LinkedIn
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 pt-10 sm:pt-16 lg:pt-20 border-t border-white/5 text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest">
            <div className="flex justify-center sm:justify-start gap-6 sm:gap-12">
              <a href="#" className="hover:text-white transition-colors">Legal</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
            </div>
            <div className="order-first sm:order-none">© {new Date().getFullYear()} Chibueze Clinton</div>
            <div className="flex justify-center sm:justify-end gap-6 sm:gap-12">
                <span className="flex items-center gap-2"><Globe size={12} className="sm:hidden" /><Globe size={14} className="hidden sm:block" /> Global Mobility</span>
            </div>
          </div>
        </div>

        {/* Decorative Blob */}
        <div className="absolute -bottom-40 -right-40 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-600/10 blob-mask opacity-20"></div>
      </footer>
    </div>
  );
}
