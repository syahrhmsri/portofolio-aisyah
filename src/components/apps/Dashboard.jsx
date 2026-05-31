import React, { useRef, useEffect } from 'react';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import fotoAisyah from '../../assets/FotoAisyah.png';

const Dashboard = ({ activeTab, setActiveTab }) => {
  const scrollContainerRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  
  // Track if scrolling is actively triggered by tab clicking to prevent scroll race condition
  const isScrollingToTabRef = useRef(false);

  // Smooth scroll handler based on activeTab updates
  useEffect(() => {
    let targetRef = null;
    if (activeTab === 'about' && aboutRef.current) {
      targetRef = aboutRef.current;
    } else if (activeTab === 'experience' && experienceRef.current) {
      targetRef = experienceRef.current;
    } else if (activeTab === 'projects' && projectsRef.current) {
      targetRef = projectsRef.current;
    } else if (activeTab === 'skills' && aboutRef.current) {
      targetRef = aboutRef.current;
    }

    if (targetRef) {
      isScrollingToTabRef.current = true;
      targetRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Reset manual block after smooth scroll transition completes (approx 800ms)
      const timer = setTimeout(() => {
        isScrollingToTabRef.current = false;
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [activeTab]);

  // Synchronize sidebar and address bar as the visitor scrolls down
  const handleScroll = () => {
    if (isScrollingToTabRef.current) return; // Prevent scroll race condition!
    if (!scrollContainerRef.current || !aboutRef.current || !experienceRef.current || !projectsRef.current) return;
    
    const containerTop = scrollContainerRef.current.getBoundingClientRect().top;
    const projTop = projectsRef.current.getBoundingClientRect().top - containerTop;
    const expTop = experienceRef.current.getBoundingClientRect().top - containerTop;
    
    // Check if the sections are scrolled into the viewport (Swapped: Projects first, then Experience)
    if (expTop < 220) {
      if (activeTab !== 'experience') {
        setActiveTab('experience');
      }
    } else if (projTop < 220) {
      if (activeTab !== 'projects' && activeTab !== 'skills') {
        setActiveTab('projects');
      }
    } else {
      if (activeTab !== 'about' && activeTab !== 'skills') {
        setActiveTab('about');
      }
    }
  };

  const getSimulatedUrl = () => {
    if (activeTab === 'projects') return 'https://aisyah.site/projects';
    if (activeTab === 'experience') return 'https://aisyah.site/experience';
    return 'https://aisyah.site/about';
  };

  return (
    <div className="flex flex-col h-full w-full bg-[#080d1a] text-slate-100 font-sans select-none overflow-hidden">
      
      {/* simulated Browser URL Header */}
      <div className="flex items-center gap-3 px-4 py-2 bg-[#e1e1d8] border-b border-[#a0a096] text-black text-xs font-semibold shadow-sm select-none">
        <span className="text-[#64645e] font-bold text-[14px]">Address:</span>
        <div className="flex-1 flex items-center gap-2.5 px-3.5 py-1.5 bg-white border border-[#96968c] rounded-sm shadow-inner min-w-0">
          <span className="text-blue-500 text-base">🌐</span>
          <span className="text-black font-bold select-all truncate text-[15px]">{getSimulatedUrl()}</span>
        </div>
        <button 
          onClick={() => setActiveTab(activeTab === 'about' ? 'projects' : (activeTab === 'projects' ? 'experience' : 'about'))}
          className="flex items-center gap-1.5 px-3 py-0.5 bg-[#4caf50] hover:bg-[#388e3c] text-white border border-[#2e7d32] rounded shadow-sm active:translate-y-0.5 active:shadow-inner transition-all font-bold text-xs"
        >
          <span>→</span> Go
        </button>
        <span className="text-[#64645e] hover:text-black cursor-pointer font-bold border-l border-[#c8c8be] pl-3 hidden sm:inline text-xs">Links »</span>
      </div>

      {/* Main Workspace */}
      <div className="flex flex-1 min-h-0 w-full">
        
        {/* Left Simulated Sidebar (System Tasks style matching image 2) */}
        <div className="w-72 border-r border-[#1e2a4a]/40 bg-[#151c2c] p-4 flex flex-col gap-5 overflow-y-auto hidden md:flex select-none">
          
          {/* Card 1: System Tasks */}
          <div className="rounded-lg bg-[#1a2333] border border-slate-800/40 overflow-hidden shadow-lg">
            {/* Card Header */}
            <div className="bg-[#242e3e] px-4 py-3 flex items-center justify-between text-[16px] font-black text-white tracking-wide border-b border-slate-800/40 select-none">
              <span>System Tasks</span>
              <span className="text-[11px] text-slate-400 font-normal scale-y-75">v</span>
            </div>
            {/* Card Body */}
            <div className="p-3 bg-[#1e2638] flex flex-col gap-1.5">
              
              <button
                onClick={() => setActiveTab('about')}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg border text-left transition-all group ${
                  activeTab === 'about' || activeTab === 'skills'
                    ? 'bg-[#303c54] border-slate-700/50 text-white font-black shadow-sm'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-[#303c54]/30'
                }`}
              >
                <svg className={`w-5 h-5 shrink-0 stroke-current ${activeTab === 'about' || activeTab === 'skills' ? 'text-white' : 'text-slate-400 group-hover:text-white'} transition-colors`} fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-[16px] font-black tracking-wide">About me</span>
              </button>

              <button
                onClick={() => setActiveTab('projects')}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg border text-left transition-all group ${
                  activeTab === 'projects'
                    ? 'bg-[#303c54] border-slate-700/50 text-white font-black shadow-sm'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-[#303c54]/30'
                }`}
              >
                <svg className={`w-5 h-5 shrink-0 stroke-current ${activeTab === 'projects' ? 'text-white' : 'text-slate-400 group-hover:text-white'} transition-colors`} fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <span className="text-[16px] font-black tracking-wide">Projects</span>
              </button>

              <button
                onClick={() => setActiveTab('experience')}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg border text-left transition-all group ${
                  activeTab === 'experience'
                    ? 'bg-[#303c54] border-slate-700/50 text-white font-black shadow-sm'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-[#303c54]/30'
                }`}
              >
                <svg className={`w-5 h-5 shrink-0 stroke-current ${activeTab === 'experience' ? 'text-white' : 'text-slate-400 group-hover:text-white'} transition-colors`} fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-[16px] font-black tracking-wide">Experience</span>
              </button>

            </div>
          </div>

          {/* Card 2: Contacts */}
          <div className="rounded-lg bg-[#1a2333] border border-slate-800/40 overflow-hidden shadow-lg">
            {/* Card Header */}
            <div className="bg-[#242e3e] px-4 py-3 flex items-center justify-between text-[16px] font-black text-white tracking-wide border-b border-slate-800/40 select-none">
              <span>Contacts</span>
              <span className="text-[11px] text-slate-400 font-normal scale-y-75">v</span>
            </div>
            {/* Card Body */}
            <div className="p-4 bg-[#1e2638] flex flex-col gap-4 text-[13px]">
              <span className="text-slate-400 font-black text-[13px] block select-none">Get in touch</span>
              
              {/* Social Outline SVGs Row */}
              <div className="flex gap-3.5">
                <a 
                  href="https://github.com/syahrhmsri" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-slate-750 bg-[#273248] hover:bg-[#32405c] flex items-center justify-center transition-transform hover:scale-105 shadow-sm text-slate-200 hover:text-white"
                  title="GitHub"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/aisyahrahmasari" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-slate-750 bg-[#273248] hover:bg-[#32405c] flex items-center justify-center transition-transform hover:scale-105 shadow-sm text-slate-200 hover:text-white"
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a 
                  href="https://instagram.com/syahrhmsri" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-slate-750 bg-[#273248] hover:bg-[#32405c] flex items-center justify-center transition-transform hover:scale-105 shadow-sm text-slate-200 hover:text-white"
                  title="Instagram"
                >
                  <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-1 select-all">
                <a 
                  href="mailto:aiisyahrahmasarii@gmail.com" 
                  className="text-slate-100 hover:text-white font-black text-[15px] select-all truncate block hover:underline"
                >
                  aiisyahrahmasarii@gmail.com
                </a>
                <p className="text-[13px] text-slate-400 leading-relaxed font-semibold mt-1">
                  I'm open to opportunities and collaborations!
                </p>
              </div>
            </div>
          </div>

          {/* Footer User Profile */}
          <div className="mt-auto p-3.5 rounded-lg bg-[#1a2333] border border-slate-800/40 flex items-center shadow-md select-none">
            <div className="flex flex-col min-w-0">
              <span className="text-[15px] font-black text-white truncate">Aisyah Rahmasari</span>
              <span className="text-[12px] font-bold text-emerald-400 tracking-tight truncate flex items-center gap-2 mt-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                Online & Active
              </span>
            </div>
          </div>

        </div>

        {/* Right Content Panel (Dark Grid Theme with smooth scroll and sequential sections) */}
        <div className="flex-1 relative bg-[#080d1a] flex flex-col min-h-0">
          {/* Subtle Grid overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ 
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 0)', 
              backgroundSize: '20px 20px' 
            }} 
          />
          {/* Main Scrollable Viewport */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex-1 overflow-y-auto scroll-smooth relative"
          >
            <div ref={aboutRef}>
              <About activeTab={activeTab} />
            </div>

            {/* Section Divider */}
            <div className="max-w-5xl xl:max-w-[92%] mx-auto px-8 md:px-12 select-none py-4">
              <hr className="border-[#1e2a4a]/40" />
            </div>

            <div ref={projectsRef}>
              <Projects />
            </div>

            {/* Section Divider */}
            <div className="max-w-5xl xl:max-w-[92%] mx-auto px-8 md:px-12 select-none py-4">
              <hr className="border-[#1e2a4a]/40" />
            </div>

            <div ref={experienceRef}>
              <Experience />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
