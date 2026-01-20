import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ArrowUpRight,
  Globe,
  Database,
  Cpu,
  Layers,
  Terminal,
  Code,
  ShieldCheck,
  Zap,
  Sparkles,
  X,
  Menu
} from 'lucide-react';
import { content } from './data';

/**
 * 核心组件：支持鼠标跟随边框高强度发光特效
 * 针对边框发光做了“加粗加亮”处理
 */
const GlowCard = ({ children, className = "", scaleOnHover = true, onClick }) => {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const updatePosition = (clientX, clientY) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: clientX - rect.left, y: clientY - rect.top });
    setOpacity(1);
  };

  const handleMouseMove = (e) => {
    updatePosition(e.clientX, e.clientY);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches.length > 0) {
      const touch = e.touches[0];
      updatePosition(touch.clientX, touch.clientY);
    }
  };

  return (
    <div 
      className={`relative group ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      onTouchMove={handleTouchMove}
      onTouchStart={(e) => handleTouchMove(e)}
      onTouchEnd={() => setOpacity(0)} // 手指离开时熄灭
      onClick={onClick}
    >
      {/* 隐形感应区域：向外扩展 20px，捕捉“靠近”事件 */}
      <div className="absolute -inset-5 z-0" />

      {/* 视觉卡片主体 */}
      <div 
        ref={cardRef}
        className="relative h-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0c1017] transition-all duration-500"
      >
        {/* 1. 背景聚光灯 (蓝白色强效微光) */}
        <div 
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
          style={{
            opacity: opacity * 0.6,
            background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.15), transparent 70%)`
          }}
        />
        
        {/* 2. 边框发光层 (加粗加亮版聚光灯边框) */}
        <div 
          className="pointer-events-none absolute -inset-px rounded-[2.5rem] border-[2.5px] border-blue-400/80 transition-opacity duration-500 z-10"
          style={{
            opacity: opacity,
            WebkitMaskImage: `radial-gradient(180px circle at ${position.x}px ${position.y}px, black 0%, transparent 100%)`,
            maskImage: `radial-gradient(180px circle at ${position.x}px ${position.y}px, black 0%, transparent 100%)`
          }}
        />

        {/* 内容层：支持全站缩放 */}
        <div className={`relative z-20 h-full w-full transition-transform duration-500 ease-out ${scaleOnHover ? 'group-hover:scale-[1.03]' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [lang, setLang] = useState('en');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 禁止背景滚动当模态框打开时
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedItem]);


  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-300 selection:bg-blue-600 selection:text-white font-sans antialiased">
      {/* Background Glows - Subtle Blue & Pink */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-pink-600/5 blur-[140px] rounded-full opacity-40" />
      </div>

      {/* Modal / 模态框 */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300" 
            onClick={() => setSelectedItem(null)}
          />
          <div className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-[#0c1017] border border-white/10 rounded-3xl shadow-2xl animate-in fade-in zoom-in duration-200 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors z-50 border border-white/5"
            >
              <X size={20} />
            </button>
            <div className="p-6 sm:p-10">
              {selectedItem.image && (
                <div className="w-full aspect-video rounded-2xl overflow-hidden mb-8 border border-white/5">
                   <img src={selectedItem.image} alt="" className="w-full h-full object-cover" />
                </div>
              )}
              <div className="flex flex-wrap gap-3 mb-6">
                 {(selectedItem.tags || []).map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full uppercase tracking-wider">{tag}</span>
                 ))}
                 {selectedItem.date && (
                    <span className="text-[10px] font-bold px-3 py-1 bg-white/5 text-slate-300 border border-white/10 rounded-full uppercase tracking-wider">{selectedItem.date}</span>
                 )}
              </div>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  {selectedItem.title || selectedItem.company}
                </h2>
                {/* 模态框里的跳转箭头：如果有GitHub链接则显示并可点击 */}
                {selectedItem.github && (
                  <a 
                    href={selectedItem.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 hover:bg-blue-500/20 text-slate-400 hover:text-blue-400 rounded-full transition-all border border-white/5 hover:border-blue-500/30"
                    title="View Source on GitHub"
                  >
                    <ArrowUpRight size={24} />
                  </a>
                )}
              </div>
              
              {(selectedItem.role || selectedItem.desc) && (
                <p className="text-lg text-blue-400/80 font-bold mb-8 uppercase tracking-wide">
                  {selectedItem.role || selectedItem.title ? selectedItem.desc : ''}
                </p>
              )}
              
              <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                {selectedItem.fullDesc ? (
                   <ul className="space-y-4 list-disc pl-5 marker:text-blue-500">
                     {selectedItem.fullDesc.map((point, idx) => (
                       <li key={idx} className="leading-relaxed">{point}</li>
                     ))}
                   </ul>
                ) : (
                  <p>{selectedItem.desc}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay (Outside Nav to avoid backdrop-filter constraint) */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[49] bg-transparent" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#07090e]/90 backdrop-blur-xl py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center relative">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 rounded-lg flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all">
              <span className="text-white font-black text-lg">Q</span>
            </div>
            <span className="font-black text-slate-100 tracking-tighter text-xl uppercase hidden sm:block">
              {t.lastName}{t.firstName}
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-10">
            <div className={`hidden md:flex gap-8 font-bold uppercase tracking-[0.2em] text-slate-400 ${lang === 'zh' ? 'text-xs' : 'text-[11px]'}`}>
              {t.nav.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="hover:text-blue-400 transition-colors">{item.name}</a>
              ))}
            </div>
            <button 
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              className="px-4 py-1.5 rounded-full border border-white/10 hover:border-pink-500/50 text-[10px] font-bold text-slate-100 transition-all uppercase tracking-widest bg-white/5"
            >
              {lang === 'zh' ? 'English' : '中文'}
            </button>
            <button 
              className="md:hidden p-1 text-slate-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute top-full right-8 mt-2 w-36 bg-[#0c1017] border border-white/10 rounded-2xl shadow-2xl p-2 z-[50] flex flex-col items-center animate-in fade-in zoom-in-95 duration-200">
              {t.nav.map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  className={`w-full text-center px-4 py-3 text-xs font-bold uppercase ${lang === 'zh' ? 'tracking-[0.4em]' : 'tracking-widest'} text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pb-24">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center mb-24 relative py-32">
          <div className="grid md:grid-cols-12 gap-16 items-center w-full">
            <div className="md:col-span-8 order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-500/5 border border-pink-500/20 rounded-full mb-8">
                <Sparkles size={14} className="text-pink-400" />
                <span className="text-[10px] font-bold text-pink-400 uppercase tracking-widest">{t.tagline}</span>
              </div>
              <h1 className={`mb-8 text-white ${lang === 'zh' ? 'font-black text-5xl sm:text-7xl md:text-9xl leading-tight tracking-wide' : 'font-black text-5xl sm:text-7xl md:text-9xl leading-none tracking-tighter'}`}>
                {lang === 'zh' ? (
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-blue-400 to-blue-500">
                    {t.lastName}{t.firstName}<span className="text-blue-600">.</span>
                  </span>
                ) : (
                  <>
                    <span className="block italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-blue-400 to-blue-500 pb-2 md:pb-4 uppercase">{t.lastName}</span>
                    <span className="block">{t.firstName}<span className="text-blue-600">.</span></span>
                  </>
                )}
              </h1>
              <p className="text-lg sm:text-2xl font-medium leading-relaxed text-slate-400 max-w-2xl mb-8 sm:mb-12 border-l-4 border-blue-800/50 pl-6 sm:pl-8">
                {t.bio}
              </p>
              
              <div className="flex items-center gap-2 sm:gap-8 overflow-x-auto sm:overflow-visible">
                <div className="flex gap-2 sm:gap-4 shrink-0">
                  <a href="https://github.com/qitu1" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-4 bg-white/5 text-slate-400 hover:text-white hover:bg-blue-500/10 transition-all border border-white/5 rounded-xl sm:rounded-2xl hover:shadow-lg"><Github size={18} className="sm:w-5 sm:h-5" /></a>
                  <a href="https://www.linkedin.com/in/fengruiqi8" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-4 bg-white/5 text-slate-400 hover:text-white hover:bg-blue-500/10 transition-all border border-white/5 rounded-xl sm:rounded-2xl hover:shadow-lg"><Linkedin size={18} className="sm:w-5 sm:h-5" /></a>
                  <a href="mailto:1758922025@qq.com" className="p-2.5 sm:p-4 bg-white/5 text-slate-400 hover:text-white hover:bg-blue-500/10 transition-all border border-white/5 rounded-xl sm:rounded-2xl hover:shadow-lg"><Mail size={18} className="sm:w-5 sm:h-5" /></a>
                </div>
                <a 
                  href={t.resumeUrl}
                  download 
                  className="group flex-1 sm:flex-none flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-blue-950 via-blue-800 to-blue-950 text-white px-4 py-3 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl hover:shadow-[0_0_25px_rgba(37,99,235,0.3)] transition-all transform hover:-translate-y-1 whitespace-nowrap"
                >
                  {t.resume} <Download size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
            <div className="md:col-span-4 order-1 md:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-500/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 p-2 bg-white/5">
                  <img 
                    src="/images/myself.jpg" 
                    alt={t.name}
                    className="w-full h-full object-cover object-[72%_center] rounded-[2rem] transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800"; }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 教育背景 */}
        <section id="education" className="mb-48 scroll-mt-32">
          <h2 className={`font-bold tracking-[0.6em] uppercase text-slate-500 mb-16 flex items-center gap-4 ${lang === 'zh' ? 'text-sm' : 'text-xs'}`}>
            <span className="w-12 h-px bg-slate-800"></span> {t.sections.edu}
          </h2>
          <div className="space-y-8">
            {t.education.map((item, idx) => (
              <GlowCard key={idx} scaleOnHover={true}>
                <div className="relative p-6 sm:p-10">
                  <div className="mb-3 sm:mb-0 sm:absolute sm:top-8 sm:right-10 text-[10px] font-black text-blue-400 tracking-widest uppercase bg-blue-500/5 px-3 py-1 rounded-sm border border-blue-500/10 w-fit">{item.date}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{item.school}</h3>
                  <p className="text-blue-400/80 font-bold text-xs tracking-wide uppercase mb-6">{item.sub}</p>
                  <div className="space-y-3">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="text-sm text-slate-400 flex items-start gap-4 leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-900 mt-2 flex-shrink-0" /> {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </section>

        {/* 实习经历 */}
        <section id="experience" className="mb-48 scroll-mt-32">
          <h2 className={`font-bold tracking-[0.6em] uppercase text-slate-500 mb-16 flex items-center gap-4 ${lang === 'zh' ? 'text-sm' : 'text-xs'}`}>
            <span className="w-12 h-px bg-slate-800"></span> {t.sections.exp}
          </h2>
          <div className="space-y-24">
            {t.experience.map((item, idx) => (
              <GlowCard key={idx} scaleOnHover={true} onClick={() => setSelectedItem(item)}>
                <div className="grid md:grid-cols-2 gap-16 items-center p-8">
                  <div className="relative aspect-video overflow-hidden rounded-[1.5rem] border border-white/5 transition-colors duration-500 group-hover:border-blue-500/20 shadow-xl">
                    <img 
                      src={item.image} 
                      alt={item.company}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-60" />
                  </div>
                  <div>
                    <div className="inline-block px-3 py-1 bg-blue-500/5 text-blue-400 rounded-sm text-[9px] sm:text-[10px] font-black tracking-widest uppercase mb-4 sm:mb-6 border border-blue-500/10">{item.date}</div>
                    <h3 className="text-2xl sm:text-4xl font-black text-white mb-2 sm:mb-4 tracking-tighter uppercase leading-tight">{item.company}</h3>
                    <p className="text-blue-400 font-black text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-8">{item.role}</p>
                    <p className="text-sm sm:text-lg text-slate-400 leading-relaxed mb-6 sm:mb-10">{item.desc}</p>
                    <div className="flex gap-4 items-center group/link cursor-pointer">
                       <span className="w-8 sm:w-12 h-px bg-blue-800 group-hover/link:w-12 sm:group-hover/link:w-16 transition-all duration-300"></span>
                       <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-blue-400 uppercase">View Details</span>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </section>

        {/* 核心项目 */}
        <section id="projects" className="mb-48 scroll-mt-32">
          <h2 className={`font-bold tracking-[0.6em] uppercase text-slate-500 mb-16 flex items-center gap-4 ${lang === 'zh' ? 'text-sm' : 'text-xs'}`}>
            <span className="w-12 h-px bg-slate-800"></span> {t.sections.pro}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {t.projects.map((project, idx) => (
              <GlowCard key={idx} className="flex flex-col" scaleOnHover={true} onClick={() => setSelectedItem(project)}>
                <div className="p-4 h-full flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] mb-8 relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#07090e]/30" />
                  </div>
                  <div className="px-4 pb-6 mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-bold px-3 py-1 border border-blue-500/20 text-blue-400/80 uppercase rounded-sm group-hover:border-blue-400/40 transition-colors">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 flex justify-between items-center transition-colors">
                      {project.title} 
                      {project.github ? (
                        <a 
                          href={project.github}
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="hover:bg-white/5 rounded-full p-1 -mr-1 transition-colors"
                        >
                          <ArrowUpRight size={18} className="text-slate-600 group-hover:text-blue-400 group-hover:-translate-y-0.5 transition-all" />
                        </a>
                      ) : (
                        <ArrowUpRight size={18} className="text-slate-600 group-hover:text-blue-400 group-hover:-translate-y-0.5 transition-all" />
                      )}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{project.desc}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </section>

        {/* 技术栈 - 纯图标版 */}
        <section id="stack" className="mb-32 scroll-mt-32">
          <h2 className={`font-bold tracking-[0.6em] uppercase text-slate-500 mb-16 flex items-center gap-4 ${lang === 'zh' ? 'text-sm' : 'text-xs'}`}>
            <span className="w-12 h-px bg-slate-800"></span> {t.sections.skill}
          </h2>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
            {t.techStack.map((tech, idx) => (
              <div 
                key={idx} 
                className="group relative flex flex-col items-center justify-center p-2 sm:p-6 bg-[#0c1017] rounded-xl sm:rounded-[1.5rem] border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]"
              >
                 <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#1a1f2e] rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-105 transition-transform duration-300 border border-white/5 group-hover:border-white/10 shadow-inner">
                   <img src={tech.icon} alt={tech.name} className="w-4 h-4 sm:w-6 sm:h-6" />
                 </div>
                 <span className="text-[6px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-blue-400 transition-colors text-center leading-none break-all sm:break-normal">
                   {tech.name}
                 </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="py-24 border-t border-white/5 bg-[#07090e]">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <span className="font-black text-2xl tracking-tighter text-white uppercase block italic font-serif">FRQ<span className="text-blue-600 not-italic">.</span></span>
            <p className="text-slate-600 text-[10px] font-bold tracking-[0.2em] mt-4 uppercase">© 2026 Designed for Engineering Integrity</p>
          </div>
          <div className="flex gap-12 text-[10px] font-bold text-slate-500 tracking-widest uppercase">
            <a href="https://github.com/qitu1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors tracking-[0.3em]">GitHub</a>
            <a href="https://www.linkedin.com/in/fengruiqi8" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors tracking-[0.3em]">LinkedIn</a>
            <a href="mailto:1758922025@qq.com" className="hover:text-blue-400 transition-colors tracking-[0.3em]">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
